---
name: vercel-sandbox
description: Vercel Sandbox documentation and guidance for running untrusted code in isolated environments. Use when working with Vercel Sandbox - a compute primitive for safely executing AI-generated code, user-submitted scripts, or developer experiments in Firecracker microVMs. Triggers on questions about Vercel Sandbox SDK, sandbox CLI, @vercel/sandbox, Sandbox.create, snapshots, persistent sandboxes, sandbox authentication, sandbox pricing, sandbox system specs, microVMs, code execution isolation, or ANY Vercel Sandbox-related development tasks.
---

# Vercel Sandbox

Vercel Sandbox is a compute primitive for safely running untrusted or user-generated code on Vercel. Each sandbox runs in an isolated Firecracker microVM with its own filesystem and network. It supports Node.js and Python runtimes, snapshotting, persistent sandboxes, and is controlled via a TypeScript/Python SDK or CLI.

## Research Process

To answer questions about Vercel Sandbox, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to Vercel Sandbox documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research Vercel Sandbox docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching Vercel Sandbox documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. Start by fetching the main overview page:
   URL: https://vercel.com/docs/vercel-sandbox.md

   Individual doc pages are available by appending .md to the path, e.g.:
   https://vercel.com/docs/vercel-sandbox/{page}.md

2. Based on the questions above, identify and fetch the most relevant pages.
   The docs are organized as follows:

   **Overview & Getting Started:**
   - /docs/vercel-sandbox.md - Overview, features, use cases
   - /docs/vercel-sandbox/quickstart.md - Step-by-step first sandbox
   - /docs/vercel-sandbox/working-with-sandbox.md - Common tasks, long-running tasks, debugging, monitoring, examples

   **Concepts:**
   - /docs/vercel-sandbox/concepts.md - How sandboxes work, lifecycle, security model, isolation architecture
   - /docs/vercel-sandbox/concepts/authentication.md - OIDC tokens vs access tokens
   - /docs/vercel-sandbox/concepts/snapshots.md - Save/restore sandbox state
   - /docs/vercel-sandbox/concepts/persistent-sandboxes.md - Auto-save state (beta), named sandboxes, sessions
   - /docs/vercel-sandbox/concepts/tags.md - Categorize sandboxes with key-value tags (beta)
   - /docs/vercel-sandbox/concepts/firewall.md - Network access policies

   **Reference:**
   - /docs/vercel-sandbox/sdk-reference.md - Full SDK API (TypeScript/Python): Sandbox.create, runCommand, writeFile, etc.
   - /docs/vercel-sandbox/cli-reference.md - CLI commands: create, run, connect, cp, stop, snapshot, etc.
   - /docs/vercel-sandbox/system-specifications.md - Runtimes (node24, node22, python3.13), packages, sudo config
   - /docs/vercel-sandbox/pricing.md - Pricing tiers, resource limits, rate limits, cost examples

   **Knowledge Base Examples (vercel.com/kb):**
   - /kb/guide/how-to-execute-ai-generated-code-safely - AI code execution
   - /kb/guide/how-to-install-system-packages-in-vercel-sandbox - Installing dnf packages
   - /kb/guide/using-vercel-sandbox-claude-agent-sdk - Claude Agent SDK integration
   - /kb/guide/running-ai-generated-code-sandbox - Running AI code
   - /kb/guide/sandbox-private-github-repositories - Private repo access
   - /kb/guide/running-openclaw-in-vercel-sandbox - OpenClaw integration
   - /kb/guide/running-opencode-securely-with-the-vercel-sandbox - OpenCode integration
   - /kb/guide/how-to-reconnect-to-a-running-sandbox - Reconnecting to sandboxes

3. Fetch multiple relevant pages in parallel using WebFetch.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user execute AI-generated code safely:

```
Task tool prompt:

You are researching Vercel Sandbox documentation to help with a specific task.

## Your Research Goal
Find complete instructions for executing AI-generated code safely in a Vercel Sandbox, including SDK setup, authentication, and running arbitrary code.

## Context
A user is building an AI assistant that generates code and needs to execute it in an isolated environment, capture output, and return results to the user.

## Specific Questions to Answer
1. How do you install and authenticate the @vercel/sandbox SDK?
2. How do you create a sandbox and run AI-generated code?
3. How do you capture stdout/stderr from executed commands?
4. How do you manage files in the sandbox filesystem?
5. How do you handle timeouts and cleanup?

## Research Process
1. Fetch https://vercel.com/docs/vercel-sandbox/quickstart.md for setup
2. Fetch https://vercel.com/docs/vercel-sandbox/sdk-reference.md for API details
3. Fetch https://vercel.com/docs/vercel-sandbox/concepts/authentication.md for auth setup

## Required Output
Provide step-by-step integration instructions with code examples for creating sandboxes, writing files, running commands, and capturing output.
```

### Example: Using Snapshots for Fast Startup

```
Task tool prompt:

You are researching Vercel Sandbox documentation to help with a specific task.

## Your Research Goal
Understand how to use snapshots to speed up sandbox startup by pre-installing dependencies and saving state.

## Context
A user's sandboxes spend significant time installing npm packages on every creation. They want to snapshot a pre-configured environment and reuse it.

## Specific Questions to Answer
1. How do you create a snapshot of a running sandbox?
2. How do you create a new sandbox from a snapshot?
3. How do snapshots interact with persistent sandboxes?
4. What are snapshot expiration limits and storage costs?
5. How do you list and manage snapshots?

## Research Process
1. Fetch https://vercel.com/docs/vercel-sandbox/concepts/snapshots.md
2. Fetch https://vercel.com/docs/vercel-sandbox/concepts/persistent-sandboxes.md
3. Fetch https://vercel.com/docs/vercel-sandbox/pricing.md for limits

## Required Output
Provide a guide to snapshot workflows with SDK and CLI code examples.
```

### Example: Setting Up Persistent Sandboxes

```
Task tool prompt:

You are researching Vercel Sandbox documentation to help with a specific task.

## Your Research Goal
Learn how to use persistent sandboxes (beta) that auto-save state and resume where they left off, including named sandboxes and session management.

## Context
A user wants to give each of their platform's users a named sandbox that persists between sessions without manual snapshot management.

## Specific Questions to Answer
1. How do persistent sandboxes differ from ephemeral ones?
2. How do you create a named persistent sandbox?
3. How do you resume a stopped sandbox by name?
4. How do sessions work within a persistent sandbox?
5. What are the breaking changes in the beta SDK?

## Research Process
1. Fetch https://vercel.com/docs/vercel-sandbox/concepts/persistent-sandboxes.md
2. Fetch https://vercel.com/docs/vercel-sandbox/sdk-reference.md for API details

## Required Output
Provide a complete guide to persistent sandboxes with SDK and CLI examples, including migration notes from the stable API.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: Common Topics

| Topic | Key Docs |
|-------|----------|
| Getting Started | `/docs/vercel-sandbox/quickstart` |
| How Sandboxes Work | `/docs/vercel-sandbox/concepts` |
| SDK Reference | `/docs/vercel-sandbox/sdk-reference` |
| CLI Reference | `/docs/vercel-sandbox/cli-reference` |
| Authentication | `/docs/vercel-sandbox/concepts/authentication` |
| Snapshots | `/docs/vercel-sandbox/concepts/snapshots` |
| Persistent Sandboxes | `/docs/vercel-sandbox/concepts/persistent-sandboxes` |
| Tags | `/docs/vercel-sandbox/concepts/tags` |
| Firewall | `/docs/vercel-sandbox/concepts/firewall` |
| System Specs | `/docs/vercel-sandbox/system-specifications` |
| Common Tasks | `/docs/vercel-sandbox/working-with-sandbox` |
| Pricing & Limits | `/docs/vercel-sandbox/pricing` |

## Key SDK Methods

| Method | Description |
|--------|-------------|
| `Sandbox.create()` | Create a new sandbox (options: runtime, timeout, snapshot) |
| `Sandbox.get()` | Reconnect to a running sandbox by ID or name |
| `sandbox.runCommand()` | Execute a command (blocking or detached) |
| `sandbox.writeFile()` | Write content to a file in the sandbox |
| `sandbox.readFile()` | Read a file from the sandbox |
| `sandbox.listFiles()` | List files in a directory |
| `sandbox.uploadFile()` | Upload a local file to the sandbox |
| `sandbox.downloadFile()` | Download a file from the sandbox |
| `sandbox.getUrl()` | Get the public URL for an exposed port |
| `sandbox.snapshot()` | Save sandbox state (stops the sandbox) |
| `sandbox.stop()` | Stop the sandbox |
| `sandbox.extendTimeout()` | Extend the running timeout |

## Documentation URL

Main documentation: `https://vercel.com/docs/vercel-sandbox.md`
