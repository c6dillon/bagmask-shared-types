# @c6dillon/bagmask-shared-types

Shared TypeScript types for Bagmask Angular applications.

## Firestore Schema Notes

Redacted production Firestore schema findings used to guide shared type changes live in:

- [docs/firestore-prod-schema-notes.md](docs/firestore-prod-schema-notes.md)
- [schema/firestore-prod-shapes.redacted.json](schema/firestore-prod-shapes.redacted.json)

These files are tracked in git for repo knowledge and future conversations, but they are not published in the npm package.

## Local development

```bash
npm install
npm run build
```

## Publishing

1. Update `version` in `package.json`.
2. Authenticate to your private npm registry.
3. Publish the package:

```bash
npm publish
```

## Installing in an app

Add this to your user-level `~/.npmrc` before installing or publishing:

```ini
@c6dillon:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Your GitHub token should have:

- `read:packages`
- `write:packages`
- `repo` if the package repo is private

Install from GitHub Packages:

```bash
npm install @c6dillon/bagmask-shared-types
```

Example import:

```ts
import type { User, JobPosting, Company } from '@c6dillon/bagmask-shared-types';
```
