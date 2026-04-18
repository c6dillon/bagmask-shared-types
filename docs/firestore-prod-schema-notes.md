# Firestore Prod Schema Notes (Redacted)

This document captures redacted structural findings from the production Firestore project used by BagMask shared types work.

## Snapshot Metadata

- Snapshot date: `2026-04-18`
- Source project: `bagmask-d6f1f`
- Sample method: up to 10 documents per top-level collection or collection group
- Redaction policy: no raw document values, no message content, no emails, no names, no document IDs, no UID-like map keys

## Purpose

Use this file when evolving types in `src/`. It is intended to answer:

- which collections are structurally stable enough for strict interfaces
- which collections contain meaningful type drift or sparse fields
- where embedded Firestore snapshots diverge from canonical collection records

## Modeling Guidance

- Treat canonical collection records and embedded snapshots as different types when the data shows drift.
- Prefer `Record<string, T>` for UID-keyed maps such as recruiter conversation per-user state.
- Use nullable and optional fields deliberately for Firestore records that evolved over time.
- Do not assume embedded timestamps are always Firestore `Timestamp` instances. Some persisted snapshots contain serialized timestamp objects.
- Do not assume embedded `job` payloads are clean copies of `posts`. Some samples contain extra historical or SDK-like fields.

## Collection Summary

| Collection | Sampled | Field Paths | Optional | Type Drift | Variants | Notes |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| `users` | 10 | 39 | 29 | 2 | 8 | Sparse profile shape with survey and plan fields appearing on subsets of users |
| `posts` | 10 | 109 | 33 | 15 | 9 | Main job record is variant-heavy and contains several nullable / union fields |
| `companies` | 10 | 32 | 0 | 1 | 1 | Cleanest canonical shape in the sample |
| `leads` | 10 | 141 | 62 | 18 | 10 | Stores a denormalized `job` snapshot with extra drift |
| `jobAlert2` | 10 | 21 | 1 | 4 | 2 | Mostly stable, but list preferences vary between empty arrays and populated arrays |
| `job_search_metrics` | 10 | 8 | 0 | 3 | 1 | Search filters are historically inconsistent in scalar vs array representation |
| `job_view_metrics` | 10 | 159 | 73 | 20 | 8 | Denormalized `job` snapshot plus occasional embedded `user` snapshot |
| `advertising_metrics` | 10 | 8 | 0 | 1 | 1 | Mostly stable event shape |
| `products` | 9 | 16 | 11 | 1 | 4 | Product metadata varies by plan family |
| `customers` | 10 | 3 | 0 | 0 | 1 | Very stable Stripe customer root doc |
| `rc_conversations` | 10 | 86 | 80 | 1 | 10 | Dynamic UID-keyed maps dominate structural variance |
| `prices` | 10 | 22 | 10 | 3 | 6 | Recurring and one-time Stripe prices share a collection |
| `checkout_sessions` | 10 | 11 | 1 | 0 | 2 | Stable checkout session shape |
| `subscriptions` | 10 | 18 | 0 | 3 | 1 | Stable subscription shape with nullable cancellation timestamps |
| `messages` | 10 | 3 | 0 | 0 | 1 | Very stable RC message shape |
| `jobApplications` | 10 | 131 | 28 | 13 | 5 | Embedded `job` snapshot differs from canonical `posts` |
| `payments` | 10 | 49 | 3 | 0 | 2 | Stable Stripe payment intent style documents |

## High-Value Notes By Domain

### Canonical Records

- `companies` is a strong candidate for a strict shared interface.
- `customers`, `messages`, `checkout_sessions`, `subscriptions`, and `payments` are also relatively stable.
- `users` should remain permissive. Only a small core of fields was always present in the sample.

### Job-Shaped Data

- `posts` should be treated as the canonical live job record.
- `leads.job`, `job_view_metrics.job`, and `jobApplications.job` should not be modeled as identical to `posts`.
- Common job drift observed across samples includes:
  - `companyJobID`: `null | number | string`
  - `zipCode`: nullable numeric and, in view metrics, sometimes string / float
  - `reqNewGrads`, `resScheduledCall`, `salSigningBonusBoolean`: `boolean | null`
  - `resCaseMix`: `string[] | null`
  - geo fields missing on some snapshots

### Metrics And Historical Snapshots

- `job_search_metrics` uses mixed scalar and array shapes:
  - `employmentTypeSearched`: `string | string[]`
  - `jobStateSearched`: `string | object[]`
  - `taxStatusSearched`: `string | string[]`
- `advertising_metrics.jobStateSearched` also showed `string | object[]`.
- `job_view_metrics` occasionally included an embedded `user` snapshot in addition to the embedded job snapshot.

### Recruiter Connect

- `rc_conversations` contains dynamic per-user maps rather than fixed field names.
- Model these as records keyed by user UID, not as explicit properties:
  - `lastEmailSent`
  - `lastReadAtByUser`
  - `unreadReminderByUser`
- `unreadBy` varies between `string[]` and empty arrays.

### Embedded Firestore Internals

- Some `leads.job` and `jobApplications.job` samples contained SDK-like nested `job.doc.*` data.
- Some embedded timestamp fields in `jobApplications.job` appeared as serialized `{ seconds, nanoseconds }` objects instead of Firestore `Timestamp`.
- These are the clearest signals that embedded snapshots need separate interfaces from canonical collection records.

## Shared Types Direction

The data supports keeping separate interfaces for:

- canonical records such as `Post`, `User`, `Company`, `StripeProduct`, `StripeSubscription`
- embedded job snapshots used in `Lead`, `JobViewMetric`, and `JobApplication`
- dynamic RC conversation records with UID-keyed maps
- metrics records with explicit unions where historical drift is already present

Suggested naming direction:

- `PostRecord` or `JobPostingRecord`
- `EmbeddedPostSnapshot`
- `JobSearchMetricRecord`
- `RecruiterConversationRecord`

## Refresh Process

When refreshing these notes:

1. Pull a new redacted schema snapshot from Firestore.
2. Update [schema/firestore-prod-shapes.redacted.json](../schema/firestore-prod-shapes.redacted.json).
3. Update this document only where conclusions changed.
4. Keep raw values, IDs, and UID-like map keys out of git.
