---
name: quickjs-sandbox
description: QuickJS WebAssembly sandbox documentation and guidance for executing JavaScript/TypeScript securely. Use when working with @sebastianwessel/quickjs - a TypeScript package for running untrusted JS/TS code in an isolated QuickJS WebAssembly runtime. Triggers on questions about QuickJS sandbox, @sebastianwessel/quickjs, loadQuickJs, runSandboxed, evalCode, sandbox options, virtual file system, sandboxed fetch, custom modules in QuickJS, AI code execution in WASM, or ANY QuickJS sandbox-related development tasks.
---

# QuickJS Sandbox

`@sebastianwessel/quickjs` is a TypeScript package for safely executing JavaScript and TypeScript code in a WebAssembly QuickJS sandbox. It provides isolation via WASM (no containers needed), a virtual file system (memfs), optional fetch, basic Node.js module compatibility, TypeScript transpilation, and configurable execution limits.

## Research Process

To answer questions about QuickJS Sandbox, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to QuickJS Sandbox documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research QuickJS sandbox docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching @sebastianwessel/quickjs documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. The documentation lives at https://sebastianwessel.github.io/quickjs/
   There is no llms.txt index. Fetch individual pages as needed using the
   URL pattern: https://sebastianwessel.github.io/quickjs/{path}.html

2. Based on the questions above, identify and fetch the most relevant pages.
   The docs are organized as follows:

   **Getting Started & Core Concepts:**
   - /docs/index.html - Installation, basic usage (backend + browser), Vite/Cloudflare setup
   - /docs/basic-understanding.html - Host/guest model, sync execution, event loop blocking, workers, async behavior
   - /docs/security-model.html - Threat model, defense-in-depth recommendations, browser vs backend
   - /docs/runtime-options.html - All sandbox options: execution limits, virtual FS, fetch, console, env, TypeScript, timers, module loaders

   **File System & Modules:**
   - /docs/file-system.html - Virtual file system (memfs), mounting files, importing files, direct fs access
   - /docs/module-resolution/index.html - Module loading, path normalizer, sync vs async loaders
   - /docs/module-resolution/node-compatibility.html - Supported Node.js modules (fs, path, assert, buffer, events, url, util, etc.)
   - /docs/module-resolution/custom-modules.html - Bundling and providing custom node_modules (Bun, esbuild)

   **Networking:**
   - /docs/fetch.html - Fetch in guest system, security alternatives, default adapter options (rate limiting, host restrictions, CORS, timeout)

   **Use Cases (detailed tutorials):**
   - /use-cases/ai-generated-code.html - Executing AI-generated code: prompt engineering, sandboxed execution, full workflow
   - /use-cases/user-generated-code.html - User-provided code: JSON log processing, TypeScript support, state management
   - /use-cases/serverside-rendering.html - SSR with React in QuickJS, dynamic module loading from esm.sh, async variant

3. For API-level details, also check:
   - https://jsr.io/@sebastianwessel/quickjs/doc - JSR API documentation (functions, types, exports)
   - https://github.com/sebastianwessel/quickjs - GitHub repo (examples in /example directory)
   - https://www.npmjs.com/package/@sebastianwessel/quickjs - npm package info

4. Fetch multiple relevant pages in parallel using WebFetch.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user execute AI-generated code safely:

```
Task tool prompt:

You are researching @sebastianwessel/quickjs documentation to help with a specific task.

## Your Research Goal
Find complete instructions for executing AI-generated JavaScript code safely in a QuickJS WebAssembly sandbox.

## Context
A user is building an AI assistant that generates JavaScript code from natural language prompts. They need to execute the generated code in isolation, capture output, and handle errors gracefully.

## Specific Questions to Answer
1. How do you install and set up @sebastianwessel/quickjs with a WASM variant?
2. How do you run code with runSandboxed and evalCode?
3. How do you configure sandbox options (allowFetch, executionTimeout, etc.)?
4. How do you capture console output and handle errors from sandboxed code?
5. What are the best practices for AI code execution (prompt format, code cleanup)?

## Research Process
1. Fetch https://sebastianwessel.github.io/quickjs/docs/index.html for setup
2. Fetch https://sebastianwessel.github.io/quickjs/docs/runtime-options.html for all options
3. Fetch https://sebastianwessel.github.io/quickjs/use-cases/ai-generated-code.html for the full AI workflow

## Required Output
Provide step-by-step integration instructions with code examples for sandbox setup, code execution, and error handling.
```

### Example: Custom Modules and Virtual File System

```
Task tool prompt:

You are researching @sebastianwessel/quickjs documentation to help with a specific task.

## Your Research Goal
Understand how to mount files and provide custom npm modules inside a QuickJS sandbox.

## Context
A user needs to run sandboxed code that imports a custom library and reads data from virtual files. They want to understand how the virtual file system works and how to bundle custom modules.

## Specific Questions to Answer
1. How do you mount files into the sandbox with mountFs?
2. How do you provide custom node_modules?
3. How do you bundle a module into a single ESM file for the sandbox?
4. Which Node.js built-in modules are supported?
5. How does allowFs differ from regular imports?

## Research Process
1. Fetch https://sebastianwessel.github.io/quickjs/docs/file-system.html
2. Fetch https://sebastianwessel.github.io/quickjs/docs/module-resolution/custom-modules.html
3. Fetch https://sebastianwessel.github.io/quickjs/docs/module-resolution/node-compatibility.html

## Required Output
Provide a guide to file system and module setup with code examples for mounting files and bundling custom modules.
```

### Example: Secure Fetch Configuration

```
Task tool prompt:

You are researching @sebastianwessel/quickjs documentation to help with a specific task.

## Your Research Goal
Learn how to securely configure network access (fetch) for sandboxed code, including host restrictions, rate limiting, and alternatives to direct fetch.

## Context
A user needs to allow limited HTTP access from sandboxed code but wants to restrict which hosts can be called and prevent abuse.

## Specific Questions to Answer
1. How does allowFetch work and what are the security implications?
2. How do you configure the default fetch adapter (allowedHosts, rate limiting, CORS)?
3. What is the recommended alternative to giving full fetch access?
4. How do you provide host functions as env variables instead?
5. What are the default security settings?

## Research Process
1. Fetch https://sebastianwessel.github.io/quickjs/docs/fetch.html
2. Fetch https://sebastianwessel.github.io/quickjs/docs/security-model.html
3. Fetch https://sebastianwessel.github.io/quickjs/docs/runtime-options.html

## Required Output
Provide a security-focused guide to network access with configuration examples and recommended patterns.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: Common Topics

| Topic | Key Docs |
|-------|----------|
| Installation & Setup | `/docs/index.html` |
| Host/Guest Model | `/docs/basic-understanding.html` |
| Security Model | `/docs/security-model.html` |
| All Sandbox Options | `/docs/runtime-options.html` |
| Virtual File System | `/docs/file-system.html` |
| Fetch / Networking | `/docs/fetch.html` |
| Module Resolution | `/docs/module-resolution/index.html` |
| Node.js Compatibility | `/docs/module-resolution/node-compatibility.html` |
| Custom Modules | `/docs/module-resolution/custom-modules.html` |
| AI Code Execution | `/use-cases/ai-generated-code.html` |
| User Code Execution | `/use-cases/user-generated-code.html` |
| Server-Side Rendering | `/use-cases/serverside-rendering.html` |

## Key API Surface

| Function / Type | Description |
|----------------|-------------|
| `loadQuickJs(variant)` | Load sync WASM runtime, returns `{ runSandboxed }` |
| `loadAsyncQuickJs(variant)` | Load async WASM runtime (supports async module loading) |
| `runSandboxed(fn, options)` | Execute code in an isolated sandbox |
| `evalCode(code)` | Evaluate JS/TS code inside the sandbox, returns `{ ok, data }` or `{ ok, error }` |
| `SandboxOptions` | Sync sandbox config (allowFetch, allowFs, env, mountFs, executionTimeout, etc.) |
| `SandboxAsyncOptions` | Async sandbox config (adds async module loaders) |

## Required Packages

```
npm install @sebastianwessel/quickjs @jitl/quickjs-ng-wasmfile-release-sync
```

For async variant (e.g. SSR with dynamic imports):
```
npm install @jitl/quickjs-ng-wasmfile-release-asyncify
```

## Documentation URL

Main documentation: `https://sebastianwessel.github.io/quickjs/`
