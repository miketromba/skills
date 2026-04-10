---
name: isolated-vm
description: isolated-vm documentation and guidance for secure JavaScript isolation using v8 Isolates in Node.js. Use when working with isolated-vm - a native Node.js module providing access to v8's Isolate interface for running JavaScript in completely isolated environments with memory limits. Triggers on questions about isolated-vm, ivm.Isolate, v8 isolates, sandboxed JS execution in Node.js, cross-isolate references, ExternalCopy, Reference, Context, evalClosure, compileModule, or ANY isolated-vm-related development tasks.
---

# isolated-vm

`isolated-vm` is a Node.js native module that provides access to v8's Isolate interface, enabling creation of completely isolated JavaScript environments. Each isolate has its own heap, garbage collector, and built-in objects. It supports memory limits, timeouts, cross-isolate data transfer (Reference, ExternalCopy, Callback), ES modules, CPU profiling, and v8 inspector integration. It is currently in maintenance mode.

## Research Process

To answer questions about isolated-vm, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to isolated-vm documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research isolated-vm docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching the isolated-vm library documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. The entire API documentation lives in the README on GitHub. Fetch it:
   URL: https://raw.githubusercontent.com/laverdet/isolated-vm/main/README.md

   This single file contains the full API reference for all classes and methods.

2. The README covers these sections:

   **Overview & Requirements:**
   - Project status (maintenance mode), requirements (Node.js 16+)
   - IMPORTANT: Node.js 20+ requires --no-node-snapshot flag
   - Compiler needed for installation (node-gyp)
   - Security considerations for running untrusted code

   **API - Core Classes:**

   Isolate (main entry point):
   - new ivm.Isolate({ memoryLimit, inspector, snapshot, onCatastrophicError })
   - isolate.compileScript / compileScriptSync - compile JS code
   - isolate.compileModule / compileModuleSync - compile ES modules
   - isolate.createContext / createContextSync - create execution contexts
   - isolate.dispose() - destroy isolate and free memory
   - isolate.getHeapStatistics / getHeapStatisticsSync
   - isolate.cpuTime / wallTime (bigint, nanoseconds)
   - isolate.isDisposed, isolate.referenceCount
   - isolate.startCpuProfiler / stopCpuProfiler

   Context (sandboxed execution environment):
   - context.global - Reference to global object
   - context.eval / evalSync / evalIgnored - run code with timeout
   - context.evalClosure / evalClosureSync - run code as function with $0, $1 args
   - context.release()

   Script (compiled JS chunk):
   - script.run / runSync / runIgnored - execute in a context with timeout
   - script.release()

   Module (ES module support):
   - module.dependencySpecifiers - array of import specifiers
   - module.namespace - Reference to exports
   - module.instantiate / instantiateSync - resolve dependencies via callback
   - module.evaluate / evaluateSync - run module with timeout
   - module.release()

   Callback (cross-isolate function references):
   - new ivm.Callback(fn, { async, ignored, sync })
   - Automatically created when passing functions to isolated-vm methods

   Reference (pointer to value in any isolate):
   - new ivm.Reference(value, { unsafeInherit })
   - reference.typeof, copy/copySync, deref, derefInto, release
   - reference.get/set/delete (property access across isolates)
   - reference.apply/applySync/applyIgnored/applySyncPromise (invoke functions)

   ExternalCopy (cross-isolate data transfer):
   - new ivm.ExternalCopy(value, { transferList, transferOut })
   - Supports primitives, Dates, ArrayBuffers, TypedArrays, SharedArrayBuffers
   - Other objects use structured clone algorithm
   - externalCopy.copy / copyInto / release
   - ExternalCopy.totalExternalSize (static)

   **Shared Options:**
   - CachedDataOptions - compile cache for faster parsing
   - ScriptOrigin - filename, line/column offset for debugging
   - TransferOptions - copy, externalCopy, reference, promise flags

   **Security Section:**
   - Never leak isolated-vm objects to untrusted code
   - Keep Node.js/v8 updated
   - Run isolates in separate processes
   - Defense in depth (containers, site isolation pattern)

   **FAQ:**
   - Cannot pass modules/libraries into isolates directly
   - Must bundle code or set up shim delegates for host operations
   - Low-level module requiring deep JS/security knowledge

   **Alternatives Comparison:**
   - vm, worker_threads, vm2, tiny-worker vs isolated-vm
   - isolated-vm is unique in being secure + memory limited + isolated + multithreaded

3. For additional context, you may also check:
   - https://www.npmjs.com/package/isolated-vm - npm package info
   - https://github.com/laverdet/isolated-vm/issues - common issues and patterns

4. The README is comprehensive. Search through it for the relevant sections.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user set up basic code execution:

```
Task tool prompt:

You are researching the isolated-vm library documentation to help with a specific task.

## Your Research Goal
Find complete instructions for creating an isolated JavaScript environment, running untrusted code with memory limits and timeouts, and safely passing data in and out.

## Context
A user wants to run user-submitted JavaScript code in a sandboxed environment with strict resource limits to prevent abuse.

## Specific Questions to Answer
1. How do you create an Isolate with memory limits?
2. How do you create a Context and set up global variables?
3. How do you run code with a timeout?
4. How do you pass data into and out of the isolate safely?
5. How do you properly dispose of resources?

## Research Process
1. Fetch https://raw.githubusercontent.com/laverdet/isolated-vm/main/README.md
2. Focus on: Isolate constructor, Context creation, eval/evalSync, Reference, ExternalCopy, and the Examples section

## Required Output
Provide step-by-step setup instructions with code examples for isolate creation, code execution, data transfer, and cleanup.
```

### Example: ES Module Support

```
Task tool prompt:

You are researching the isolated-vm library documentation to help with a specific task.

## Your Research Goal
Understand how to compile and run ES modules in an isolate, including dependency resolution via the resolveCallback.

## Context
A user wants to run modular JavaScript code with import/export statements inside an isolate, resolving dependencies dynamically.

## Specific Questions to Answer
1. How do you compile a module with isolate.compileModule?
2. How does module.instantiate work with the resolveCallback?
3. How do you access module.dependencySpecifiers?
4. How do you evaluate a module and get its exports via module.namespace?
5. How do you chain multiple modules together?

## Research Process
1. Fetch https://raw.githubusercontent.com/laverdet/isolated-vm/main/README.md
2. Focus on the Module class section

## Required Output
Provide a guide to ES module usage with code examples for compilation, instantiation, and evaluation.
```

### Example: Cross-Isolate Communication

```
Task tool prompt:

You are researching the isolated-vm library documentation to help with a specific task.

## Your Research Goal
Learn how to safely pass functions and data between isolates using Reference, Callback, and ExternalCopy.

## Context
A user needs to expose host functions (like logging or API calls) to sandboxed code and retrieve results back from the isolate.

## Specific Questions to Answer
1. How do Reference, Callback, and ExternalCopy differ?
2. How do you expose a host function to the isolate (e.g., console.log)?
3. How do you use evalClosure with $0, $1 arguments?
4. How do TransferOptions (copy, reference, externalCopy, promise) work?
5. What are the security pitfalls of leaking references?

## Research Process
1. Fetch https://raw.githubusercontent.com/laverdet/isolated-vm/main/README.md
2. Focus on Reference, Callback, ExternalCopy classes, TransferOptions, and the Security section

## Required Output
Provide a guide to cross-isolate communication with code examples and security best practices.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: API Classes

| Class | Purpose |
|-------|---------|
| `Isolate` | Main entry point. Create isolated v8 environments with memory limits |
| `Context` | Sandboxed execution environment within an isolate (own global object) |
| `Script` | Compiled JS code, runnable in any context within its isolate |
| `Module` | ES module with dependency resolution and namespace exports |
| `Callback` | Simple cross-isolate function references (args/returns are copied) |
| `Reference` | Pointer to a value in any isolate (get/set/apply across isolates) |
| `ExternalCopy` | Data stored outside v8 heap for fast cross-isolate transfer |

## Important Notes

- Node.js 20+ requires `--no-node-snapshot` flag
- Native module: requires C++ compiler for installation
- Maintenance mode: existing features supported, no new features planned
- Never leak isolated-vm objects (Reference, ExternalCopy, etc.) to untrusted code
- All async methods run in the order they were queued
- Sync methods can block the event loop; prefer async or run in workers

## Documentation URL

Full documentation (README): `https://github.com/laverdet/isolated-vm`
