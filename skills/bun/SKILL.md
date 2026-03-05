---
name: bun
description: Bun JavaScript runtime, bundler, package manager, and test runner documentation and guidance. Use when working with Bun - an all-in-one toolkit for developing JavaScript/TypeScript applications. Triggers on questions about Bun runtime, bun install, bun test, bun build, Bun.serve, Bun.file, Bun.spawn, bunfig.toml, Bun APIs, SQLite, S3, Redis, WebSockets, HTTP server, bundler configuration, hot reloading, macros, plugins, or ANY Bun-related development tasks.
---

# Bun

Bun is an all-in-one toolkit for developing, bundling, testing, and running JavaScript and TypeScript applications. It includes a fast runtime, native bundler, package manager, and test runner.

## Research Process

To answer questions about Bun, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to Bun documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research Bun docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching Bun documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. First, fetch the documentation index to see all available resources:
   URL: https://bun.com/docs/llms.txt
   
   This file lists all documentation pages organized by category.

2. Based on the questions above, identify and fetch the most relevant documentation. The docs are organized by topic:

   **Getting Started:**
   - /docs/index.md - Welcome and overview
   - /docs/installation.md - Installation methods (npm, Homebrew, Docker, script)
   - /docs/quickstart.md - Build your first app
   - /docs/typescript.md - TypeScript configuration
   
   **Runtime:**
   - /docs/runtime/index.md - Runtime overview and execution
   - /docs/runtime/bun-apis.md - Bun global object and built-in modules
   - /docs/runtime/bunfig.md - bunfig.toml configuration
   - /docs/runtime/environment-variables.md - Environment variables and .env support
   - /docs/runtime/module-resolution.md - Module resolution and imports
   - /docs/runtime/nodejs-compat.md - Node.js compatibility status
   - /docs/runtime/watch-mode.md - --watch and --hot modes
   - /docs/runtime/debugger.md - Debugging with WebKit Inspector
   - /docs/runtime/plugins.md - Runtime plugins
   - /docs/runtime/globals.md - Global objects
   - /docs/runtime/web-apis.md - Web-standard APIs
   
   **HTTP Server & Networking:**
   - /docs/runtime/http/server.md - Bun.serve HTTP server
   - /docs/runtime/http/routing.md - Route definitions and parameters
   - /docs/runtime/http/websockets.md - Server-side WebSockets
   - /docs/runtime/http/tls.md - TLS/HTTPS configuration
   - /docs/runtime/http/cookies.md - Cookie handling
   - /docs/runtime/http/error-handling.md - Error handling
   - /docs/runtime/networking/fetch.md - Fetch API
   - /docs/runtime/networking/tcp.md - TCP connections
   - /docs/runtime/networking/udp.md - UDP connections
   - /docs/runtime/networking/dns.md - DNS resolution
   
   **File System & I/O:**
   - /docs/runtime/file-io.md - File I/O APIs
   - /docs/runtime/streams.md - Streams API
   - /docs/runtime/binary-data.md - Binary data handling
   - /docs/runtime/glob.md - File globbing
   - /docs/runtime/archive.md - Tar archives
   
   **Child Processes & Shell:**
   - /docs/runtime/child-process.md - Bun.spawn and Bun.spawnSync
   - /docs/runtime/shell.md - Bun shell scripting API
   
   **Database & Storage:**
   - /docs/runtime/sqlite.md - Native SQLite driver
   - /docs/runtime/sql.md - SQL database support (Postgres, MySQL, SQLite)
   - /docs/runtime/redis.md - Native Redis client
   - /docs/runtime/s3.md - S3-compatible object storage
   
   **Utilities:**
   - /docs/runtime/hashing.md - Password hashing
   - /docs/runtime/semver.md - Semantic versioning API
   - /docs/runtime/color.md - Color formatting
   - /docs/runtime/utils.md - Utility functions
   - /docs/runtime/transpiler.md - JavaScript/TypeScript transpiler
   - /docs/runtime/html-rewriter.md - HTMLRewriter for HTML transformation
   - /docs/runtime/cookies.md - Cookie parsing
   - /docs/runtime/secrets.md - Secrets management
   
   **Advanced Runtime:**
   - /docs/runtime/ffi.md - Foreign Function Interface
   - /docs/runtime/node-api.md - Node-API native add-ons
   - /docs/runtime/workers.md - Web Workers
   - /docs/runtime/jsx.md - JSX/TSX support
   - /docs/runtime/json5.md - JSON5 support
   - /docs/runtime/yaml.md - YAML support
   - /docs/runtime/jsonl.md - JSONL streaming parser
   
   **Bundler:**
   - /docs/bundler/index.md - Bundler overview
   - /docs/bundler/fullstack.md - Fullstack dev server
   - /docs/bundler/hot-reloading.md - Hot Module Replacement (HMR)
   - /docs/bundler/html-static.md - HTML & static sites
   - /docs/bundler/css.md - CSS bundling
   - /docs/bundler/loaders.md - Built-in loaders
   - /docs/bundler/plugins.md - Bundler plugins
   - /docs/bundler/macros.md - Bundle-time macros
   - /docs/bundler/minifier.md - Minification
   - /docs/bundler/executables.md - Single-file executables
   - /docs/bundler/bytecode.md - Bytecode caching
   - /docs/bundler/esbuild.md - esbuild migration guide
   
   **Package Manager:**
   - /docs/pm/bunx.md - bunx (run packages from npm)
   - /docs/pm/workspaces.md - Monorepo workspaces
   - /docs/pm/catalogs.md - Shared dependency versions
   - /docs/pm/lockfile.md - Lockfile format
   - /docs/pm/global-cache.md - Global package cache
   - /docs/pm/isolated-installs.md - Isolated installs (pnpm-style)
   - /docs/pm/lifecycle.md - Lifecycle scripts
   - /docs/pm/scopes-registries.md - Scoped packages and registries
   - /docs/pm/overrides.md - Dependency overrides
   - /docs/pm/npmrc.md - .npmrc support
   
   **Package Manager CLI:**
   - /docs/pm/cli/install.md - bun install
   - /docs/pm/cli/add.md - bun add
   - /docs/pm/cli/remove.md - bun remove
   - /docs/pm/cli/update.md - bun update
   - /docs/pm/cli/link.md - bun link
   - /docs/pm/cli/publish.md - bun publish
   - /docs/pm/cli/audit.md - bun audit
   - /docs/pm/cli/outdated.md - bun outdated
   - /docs/pm/cli/patch.md - bun patch
   - /docs/pm/cli/why.md - bun why
   - /docs/pm/cli/info.md - bun info
   - /docs/pm/cli/pm.md - bun pm utilities
   - /docs/pm/filter.md - --filter flag for monorepos
   
   **Test Runner:**
   - /docs/test/index.md - Test runner overview
   - /docs/test/writing-tests.md - Writing tests (describe, it, expect)
   - /docs/test/discovery.md - Test file discovery
   - /docs/test/lifecycle.md - beforeAll, beforeEach, afterEach, afterAll
   - /docs/test/mocks.md - Mock functions and module mocks
   - /docs/test/snapshots.md - Snapshot testing
   - /docs/test/dom.md - DOM testing with happy-dom
   - /docs/test/code-coverage.md - Code coverage
   - /docs/test/configuration.md - Test configuration
   - /docs/test/dates-times.md - Mocking time and dates
   - /docs/test/reporters.md - Test reporters
   - /docs/test/runtime-behavior.md - Test runtime behavior
   
   **Templating:**
   - /docs/runtime/templating/init.md - bun init
   - /docs/runtime/templating/create.md - bun create
   
   **Guides - Ecosystem Integrations:**
   - /docs/guides/ecosystem/nextjs.md - Next.js
   - /docs/guides/ecosystem/react.md - React
   - /docs/guides/ecosystem/vite.md - Vite
   - /docs/guides/ecosystem/astro.md - Astro
   - /docs/guides/ecosystem/remix.md - Remix
   - /docs/guides/ecosystem/nuxt.md - Nuxt
   - /docs/guides/ecosystem/sveltekit.md - SvelteKit
   - /docs/guides/ecosystem/qwik.md - Qwik
   - /docs/guides/ecosystem/solidstart.md - SolidStart
   - /docs/guides/ecosystem/hono.md - Hono
   - /docs/guides/ecosystem/elysia.md - Elysia
   - /docs/guides/ecosystem/express.md - Express
   - /docs/guides/ecosystem/docker.md - Docker
   - /docs/guides/ecosystem/drizzle.md - Drizzle ORM
   - /docs/guides/ecosystem/prisma.md - Prisma
   - /docs/guides/ecosystem/mongoose.md - Mongoose
   - /docs/guides/ecosystem/discordjs.md - Discord bot
   - /docs/guides/ecosystem/sentry.md - Sentry
   - /docs/guides/ecosystem/pm2.md - PM2 daemon
   - /docs/guides/ecosystem/systemd.md - systemd daemon
   - /docs/guides/ecosystem/tanstack-start.md - TanStack Start
   - /docs/guides/ecosystem/neon-drizzle.md - Neon Postgres
   - /docs/guides/ecosystem/upstash.md - Upstash Redis
   
   **Guides - Deployment:**
   - /docs/guides/deployment/vercel.md - Vercel
   - /docs/guides/deployment/railway.md - Railway
   - /docs/guides/deployment/render.md - Render
   - /docs/guides/deployment/digital-ocean.md - DigitalOcean
   - /docs/guides/deployment/aws-lambda.md - AWS Lambda
   - /docs/guides/deployment/google-cloud-run.md - Google Cloud Run
   
   **Guides - HTTP:**
   - /docs/guides/http/simple.md - Simple HTTP server
   - /docs/guides/http/server.md - Common HTTP server usage
   - /docs/guides/http/fetch.md - Send HTTP requests
   - /docs/guides/http/tls.md - Configure TLS
   - /docs/guides/http/hot.md - Hot reload HTTP server
   - /docs/guides/http/cluster.md - HTTP server cluster
   - /docs/guides/http/file-uploads.md - File uploads with FormData
   - /docs/guides/http/stream-file.md - Stream file as response
   - /docs/guides/http/proxy.md - Proxy HTTP requests
   
   **Guides - WebSockets:**
   - /docs/guides/websocket/simple.md - Simple WebSocket server
   - /docs/guides/websocket/pubsub.md - Pub/sub WebSocket server
   - /docs/guides/websocket/context.md - Per-socket context data
   - /docs/guides/websocket/compression.md - WebSocket compression
   
   **Guides - Testing:**
   - /docs/guides/test/run-tests.md - Run tests
   - /docs/guides/test/watch-mode.md - Watch mode
   - /docs/guides/test/coverage.md - Code coverage
   - /docs/guides/test/mock-functions.md - Mock functions
   - /docs/guides/test/snapshot.md - Snapshot testing
   - /docs/guides/test/happy-dom.md - DOM testing
   - /docs/guides/test/testing-library.md - Testing Library
   - /docs/guides/test/migrate-from-jest.md - Migrate from Jest

3. For framework-specific questions, fetch the relevant ecosystem guide.

4. Fetch multiple relevant pages in parallel using WebFetch.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user set up an HTTP server:

```
Task tool prompt:

You are researching Bun documentation to help with a specific task.

## Your Research Goal
Find complete instructions for creating a high-performance HTTP server with Bun.serve, including routing, WebSocket support, and TLS configuration.

## Context
A user wants to build a REST API with WebSocket support using Bun's native HTTP server. They need end-to-end setup instructions.

## Specific Questions to Answer
1. How do you create a basic HTTP server with Bun.serve?
2. How do you define routes with path parameters and wildcards?
3. How do you handle WebSocket connections?
4. How do you configure TLS/HTTPS?
5. How do you handle static files and streaming responses?

## Research Process
1. First fetch https://bun.com/docs/llms.txt for the documentation index
2. Then fetch the HTTP server docs: /docs/runtime/http/server.md, /docs/runtime/http/routing.md, /docs/runtime/http/websockets.md, /docs/runtime/http/tls.md
3. Also fetch /docs/guides/http/simple.md and /docs/guides/websocket/simple.md

## Required Output
Provide step-by-step server setup instructions with all code examples. Include WebSocket integration and TLS configuration.
```

### Example: SQLite Database Integration

```
Task tool prompt:

You are researching Bun documentation to help with a specific task.

## Your Research Goal
Understand how to use Bun's native SQLite driver for database operations, including queries, transactions, and migrations.

## Context
A user wants to use SQLite as their database with Bun. They need to understand the API and best practices.

## Specific Questions to Answer
1. How do you open a database connection?
2. How do you execute queries with prepared statements?
3. How do you handle transactions?
4. What are the performance characteristics?
5. How do you handle migrations?

## Research Process
1. Fetch https://bun.com/docs/llms.txt for the index
2. Fetch /docs/runtime/sqlite.md for the SQLite driver documentation
3. Fetch /docs/runtime/sql.md for general SQL database support

## Required Output
Provide a comprehensive guide to SQLite usage with code examples for common operations.
```

### Example: Bundler Configuration

```
Task tool prompt:

You are researching Bun documentation to help with a specific task.

## Your Research Goal
Learn how to configure Bun's bundler for a production build, including code splitting, minification, and plugin development.

## Context
A user wants to bundle their TypeScript application for production with optimal settings.

## Specific Questions to Answer
1. How do you configure the bundler with Bun.build?
2. What loader options are available?
3. How do you create custom plugins?
4. How do you enable code splitting and tree shaking?
5. How do you configure minification?

## Research Process
1. Fetch https://bun.com/docs/llms.txt for the index
2. Fetch bundler docs: /docs/bundler/index.md, /docs/bundler/plugins.md, /docs/bundler/loaders.md, /docs/bundler/minifier.md

## Required Output
Provide bundler configuration guide with examples for common build scenarios.
```

### Example: Test Runner Setup

```
Task tool prompt:

You are researching Bun documentation to help with a specific task.

## Your Research Goal
Set up Bun's test runner with mocking, snapshots, and code coverage for a TypeScript project.

## Context
A user wants to migrate from Jest to Bun's native test runner while maintaining similar testing patterns.

## Specific Questions to Answer
1. How do you write tests with describe, it, and expect?
2. How do you mock functions and modules?
3. How do you use snapshot testing?
4. How do you configure code coverage?
5. What Jest compatibility features are available?

## Research Process
1. Fetch https://bun.com/docs/llms.txt for the index
2. Fetch test runner docs: /docs/test/index.md, /docs/test/writing-tests.md, /docs/test/mocks.md, /docs/test/snapshots.md, /docs/test/code-coverage.md
3. Fetch /docs/guides/test/migrate-from-jest.md for migration guidance

## Required Output
Provide test runner setup guide with examples for mocking, snapshots, and coverage configuration.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: Common Topics

| Topic | Key Docs |
|-------|----------|
| Getting Started | `/docs/index.md`, `/docs/installation.md`, `/docs/quickstart.md` |
| Runtime Config | `/docs/runtime/bunfig.md`, `/docs/runtime/environment-variables.md` |
| HTTP Server | `/docs/runtime/http/server.md`, `/docs/runtime/http/routing.md` |
| WebSockets | `/docs/runtime/http/websockets.md`, `/docs/guides/websocket/simple.md` |
| File I/O | `/docs/runtime/file-io.md`, `/docs/runtime/streams.md` |
| SQLite | `/docs/runtime/sqlite.md` |
| SQL (Postgres/MySQL) | `/docs/runtime/sql.md` |
| Redis | `/docs/runtime/redis.md` |
| S3 Storage | `/docs/runtime/s3.md` |
| Child Processes | `/docs/runtime/child-process.md`, `/docs/runtime/shell.md` |
| Bundler | `/docs/bundler/index.md`, `/docs/bundler/plugins.md` |
| Test Runner | `/docs/test/index.md`, `/docs/test/writing-tests.md` |
| Package Manager | `/docs/pm/cli/install.md`, `/docs/pm/workspaces.md` |
| Node.js Compat | `/docs/runtime/nodejs-compat.md` |
| Ecosystem | `/docs/guides/ecosystem/` (Next.js, React, Hono, etc.) |
| Deployment | `/docs/guides/deployment/` (Vercel, Railway, etc.) |

## Bun APIs Quick Reference

| API | Description |
|-----|-------------|
| `Bun.serve()` | HTTP/WebSocket server |
| `Bun.file()` | File reference (lazy read) |
| `Bun.write()` | Write to file |
| `Bun.spawn()` | Spawn child process |
| `Bun.spawnSync()` | Synchronous child process |
| `Bun.$` | Shell scripting API |
| `Bun.build()` | JavaScript/TypeScript bundler |
| `Bun.Transpiler` | Code transpiler |
| `Bun.password` | Password hashing |
| `Bun.env` | Environment variables |
| `Bun.version` | Bun version string |
| `Bun.sleep()` | Async sleep |
| `Bun.sleepSync()` | Sync sleep |
| `Bun.which()` | Find executable path |
| `Bun.peek()` | Inspect promise state |
| `Bun.deepEquals()` | Deep equality check |
| `Bun.escapeHTML()` | HTML string escaping |
| `Bun.hash()` | Fast hashing |
| `Bun.gzipSync()` | gzip compression |
| `Bun.deflateSync()` | DEFLATE compression |
| `Bun.Redis` | Redis client |
| `Bun.SQL` | SQL database client |
| `Bun.S3` | S3-compatible storage |
| `new Database()` | SQLite database (bun:sqlite) |

## Documentation URL

Main documentation index: `https://bun.com/docs/llms.txt`
