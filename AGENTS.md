# AGENTS.md

## Purpose

This repository contains the shared TypeScript type package used across BagMask applications and functions. It publishes `@c6dillon/bagmask-shared-types` to GitHub Packages.

## Project Layout

- `src/` contains the source type definitions.
- `src/index.ts` is the public export surface for the package.
- Files like `user.ts`, `company.ts`, `post.ts`, and `recruiter-connect.ts` define domain models consumed by other repos.
- `dist/` is generated build output and publishable package content. Do not hand-edit it.

## Environment And Tooling

- TypeScript compiles from `src/` to `dist/`.
- The package publishes to `https://npm.pkg.github.com`.
- `prepare` and `prepublishOnly` both run `npm run build`.
- The package is not private, but publish access is restricted through GitHub Packages.

## Working Rules

- Treat `src/index.ts` as the canonical package surface. Export new types there when they are intended for external consumers.
- Keep changes backward compatible when possible because multiple BagMask repos depend on this package.
- Avoid mixing unrelated type cleanup with behavior-driven schema changes.
- Do not edit `dist/` manually.
- If a change renames or removes a shared type, call out the likely downstream repos that will need updates.

## Shared Firestore Schema Context

For BagMask Firestore schema and shared type decisions, use the redacted schema files in this repo as the source of truth:

- `C:\BagMask\bagmask-shared-types\docs\firestore-prod-schema-notes.md`
- `C:\BagMask\bagmask-shared-types\schema\firestore-prod-shapes.redacted.json`

When changing Firestore-facing shared interfaces, collection models, or embedded snapshot types:

- read those files first
- prefer their observed prod shapes over assumptions from local code alone
- treat embedded job snapshots separately from canonical `posts` records when the schema notes call that out
- do not add raw prod data to this repo

## Commands

Run from the repo root:

```bash
npm install
npm run clean
npm run build
npm publish
```

## Validation

For most changes, run:

```bash
npm run build
```

Before publishing:

```bash
npm run clean
npm run build
```

Then confirm `package.json` has the intended version bump and that your GitHub Packages auth is configured correctly.

## Notes For Future Sessions

- Publishing requires a GitHub token with package access in the user-level `.npmrc`, as documented in `README.md`.
- This repo is the right place for interfaces shared across BagMask apps and functions. If the same shape is being copied into multiple repos, move it here instead.
- Coordinate version bumps with downstream repos that pin or vendor the package.
