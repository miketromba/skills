---
name: bootstrap-ts-oss
description: Bootstrap a new TypeScript open-source npm package with Bun, tsup, Biome, Husky, GitHub Actions CI/CD, and dual ESM/CJS publishing. Use when the user wants to create, scaffold, initialize, set up, or bootstrap a new TypeScript library, npm package, or open-source project.
---

# Bootstrap TypeScript Open-Source Package

Scaffold a production-ready TypeScript npm package using Mike's stack: Bun runtime, tsup bundler, Biome linter/formatter, Husky git hooks, and GitHub Actions for CI + npm publishing with provenance.

## Philosophy

- **Anti-fragile**: Always run `bun init` first so scaffolding stays current, then overlay configs on top.
- **Dual format**: Every package ships both ESM and CJS with full TypeScript declarations.
- **Strict by default**: Strict TypeScript, Biome linting, and pre-commit hooks enforcing lint + test.
- **One-command ship**: Tag-triggered publishing via GitHub Actions — no manual npm publish.
- **AGENTS.md**: Every repo gets an AGENTS.md so AI tools understand the project immediately.

## Workflow

### Step 0: Confirm names

Before starting, if the user hasn't already specified:

1. **npm package name** — suggest a reasonable default based on the project description (e.g. the kebab-case project name) and ask the user to confirm or provide an alternative.
2. **GitHub repo name** — suggest the same name as the npm package and ask the user to confirm or provide an alternative.

### Step 1: Initialize with Bun

```bash
mkdir <project-name> && cd <project-name>
bun init -y
```

Inspect what `bun init` produced — it scaffolds `package.json`, `tsconfig.json`, an entry point, and possibly other files. These evolve over time as Bun updates, so **do not blindly overwrite them**. The steps below describe which fields/settings to ensure are present; always start from what `bun init` gave you and adjust from there.

If `bun init` places an entry file at the root (e.g. `index.ts`), move it to `src/index.ts`.

### Step 2: Set up directory structure

```
<project-name>/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── publish.yml
├── .husky/
│   └── pre-commit
├── src/
│   ├── index.ts          # Main entry point
│   └── index.test.ts     # Tests (colocated)
├── .gitignore
├── AGENTS.md
├── biome.json
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
└── tsup.config.ts
```

### Step 3: Install dev dependencies

```bash
bun add -d typescript tsup @biomejs/biome husky @types/bun
```

### Step 4: Configure package.json

Start from whatever `bun init` generated and **ensure** the following fields are set. Don't drop fields that `bun init` added unless they conflict.

Fields to set/add (adapt `name`, `description`, `repository`, etc. to the specific project):

```json
{
  "license": "MIT",
  "author": "miketromba",
  "repository": {
    "type": "git",
    "url": "https://github.com/miketromba/<package-name>.git"
  },
  "homepage": "https://github.com/miketromba/<package-name>",
  "bugs": {
    "url": "https://github.com/miketromba/<package-name>/issues"
  },
  "keywords": [],
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
      },
      "require": {
        "types": "./dist/index.d.cts",
        "default": "./dist/index.cjs"
      }
    }
  },
  "files": ["dist", "README.md"],
  "scripts": {
    "build": "tsup",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "test": "bun test",
    "prepare": "husky"
  }
}
```

Key points:
- `"type": "module"` — ESM-first
- Dual `exports` map with separate `import`/`require` paths and their `types` conditions
- `"files"` controls what ships to npm — keep it minimal
- `"prepare": "husky"` — auto-installs hooks on `bun install`
- devDependencies are populated by the `bun add -d` step — do not hardcode versions
- Remove any `bun init` entry point field (e.g. `"module": "index.ts"`) that points to a non-dist path

### Step 5: Configure TypeScript

`bun init` generates a `tsconfig.json`. Keep its defaults and ensure these settings are present (add or override as needed):

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "declaration": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "dist",
    "rootDir": "src",
    "types": ["bun-types"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

If `bun init` adds new useful fields in the future, keep them. The critical settings above must be present for dual-format builds to work.

### Step 6: Configure tsup

```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  clean: true,
  target: 'es2020',
  outDir: 'dist'
})
```

This produces `dist/index.js` (ESM), `dist/index.cjs` (CJS), `dist/index.d.ts`, and `dist/index.d.cts`.

### Step 7: Configure Biome

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.2/schema.json",
  "files": {
    "includes": ["**", "!dist"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "tab",
    "indentWidth": 4,
    "lineWidth": 80
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "semicolons": "asNeeded",
      "trailingCommas": "none",
      "arrowParentheses": "asNeeded"
    }
  }
}
```

Style: tabs, single quotes, no semicolons, no trailing commas, arrow parens only when needed. Add additional paths to the `!dist` exclude pattern if the project generates files (e.g. `"!data"`).

### Step 8: Configure .gitignore

`bun init` may create a `.gitignore`. If so, keep its contents and ensure these entries are present:

```
# dependencies
node_modules/

# output
dist/

# env
.env
.env.*

# caches
*.tsbuildinfo
.cache

# OS
.DS_Store

# IDE
.idea/
.vscode/
```

### Step 9: Set up Husky pre-commit hook

```bash
bunx husky init
```

Then overwrite `.husky/pre-commit` with:

```
bun run lint
bun test
```

This enforces that every commit passes linting and tests.

### Step 10: Create GitHub Actions — CI

`.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v2

      - name: Install dependencies
        run: bun install

      - name: Lint
        run: bun run lint

      - name: Build
        run: bun run build

      - name: Test
        run: bun test
```

### Step 11: Create GitHub Actions — Publish

`.github/workflows/publish.yml`:

```yaml
name: Publish to NPM

on:
  push:
    tags:
      - "v*"

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      id-token: write

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v2

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "24"

      - name: Install dependencies
        run: bun install

      - name: Lint
        run: bun run lint

      - name: Build
        run: bun run build

      - name: Test
        run: bun test

      - name: Publish to NPM
        run: npm publish --access public

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v2
        with:
          generate_release_notes: true
```

The `id-token: write` permission enables npm provenance. Node is needed alongside Bun because `npm publish` handles registry auth and provenance attestation.

**Trusted publishing setup**: The first publish of a new package must be done manually via `npm publish --access public` from the local machine. After that initial publish, go to the package's settings on npmjs.com, navigate to **Publishing access** and configure **Trusted Publishing** (OIDC) for the GitHub repository and the `publish.yml` workflow. Once configured, no `NPM_TOKEN` secret is needed — the workflow authenticates automatically via GitHub's OIDC token.

### Step 12: Create MIT LICENSE

Create a standard MIT license file with the copyright holder **Michael Tromba** and the current year.

### Step 13: Create AGENTS.md

Write an AGENTS.md tailored to the project. Follow this structure:

```markdown
# Agents

- **Runtime/tooling:** Bun (not Node)
- **Build:** `bun run build` — runs tsup
- **Lint:** `bun run lint` (Biome)
- **Test:** `bun test`
- **Pre-commit hook:** Husky runs lint + test automatically

## Shipping

When the user says "ship", that means: **push to remote AND publish to npm**. Do both.

1. `git push` — push commits to the remote
2. `npm version patch` (or `minor` / `major` as appropriate) — bumps version and creates a tag
3. `git push && git push --tags` — pushes the version commit and tag

The `v*` tag triggers `.github/workflows/publish.yml` which lints, builds, tests, publishes to npm with provenance, and creates a GitHub Release.

**Never skip the push + version + tag steps when asked to ship.**
```

Add project-specific sections as needed (source of truth, conventions, etc.).

### Step 14: Create README.md

Write a README appropriate to the package. Sections to consider (not all required — use judgment based on the package's subject matter):

- Banner image and/or badges (npm version, license)
- Clear description of what the package does
- Install instructions (show multiple package managers: npm, bun, pnpm, yarn)
- Usage examples with TypeScript code
- Why use this / motivation
- Contributing guide
- License link

### Step 15: Write starter source and test

`src/index.ts` — the main entry point with the package's public API.

`src/index.test.ts` — colocated tests using `bun:test`:

```typescript
import { describe, expect, test } from 'bun:test'
```

### Step 16: Build, lint, test, and verify

```bash
bun run build
bun run lint
bun test
```

### Step 17: Create GitHub repo and push

If the user hasn't specified a repo name, suggest one based on the package name and ask for confirmation.

```bash
gh repo create miketromba/<repo-name> --public --source=. --remote=origin --push
```

This initializes git, creates the remote repo, and pushes in one step. If git is already initialized or the repo already exists, fall back to manual steps as needed.

## Ship checklist

When the user says "ship":

1. `git push`
2. `npm version patch` (or `minor` / `major`)
3. `git push && git push --tags`

The `v*` tag triggers the publish workflow automatically.