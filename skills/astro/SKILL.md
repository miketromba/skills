---
name: astro
description: Astro web framework documentation and guidance. Use when working with Astro - an all-in-one web framework for building content-driven websites using island architecture and server-first design. Triggers on questions about Astro setup, .astro components, content collections, Markdown/MDX, islands, SSR, SSG, routing, integrations (React, Vue, Svelte, Preact, Solid), Astro config, deployment, CMS integration, migration, or ANY Astro-related development tasks.
---

# Astro

Astro is an all-in-one web framework for building content-driven websites. It uses island architecture and server-first design to minimize client-side JavaScript. It supports UI frameworks like React, Vue, Svelte, Preact, and Solid via integrations, and is powered by Vite.

## Research Process

To answer questions about Astro, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to Astro documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research Astro docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching Astro framework documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. First, fetch the documentation index to understand what's available:
   URL: https://docs.astro.build/llms.txt

   Astro provides curated documentation sets as separate files. Choose the
   most relevant one(s) based on the questions above:

   **General documentation (pick ONE based on needs):**
   - https://docs.astro.build/llms-small.txt - Abridged docs (compact, non-essential content removed). Use for quick lookups and common questions.
   - https://docs.astro.build/llms-full.txt - Complete docs (everything). Use when you need thorough or obscure information.

   **Topic-specific documentation (fetch alongside or instead of general docs):**
   - https://docs.astro.build/_llms-txt/api-reference.txt - API reference (terse, structured API descriptions)
   - https://docs.astro.build/_llms-txt/how-to-recipes.txt - How-to recipes (guided examples for adding features)
   - https://docs.astro.build/_llms-txt/build-a-blog-tutorial.txt - Blog tutorial (step-by-step beginner guide)
   - https://docs.astro.build/_llms-txt/deployment-guides.txt - Deployment guides (deploying to various services)
   - https://docs.astro.build/_llms-txt/cms-guides.txt - CMS guides (integrating content management systems)
   - https://docs.astro.build/_llms-txt/backend-services.txt - Backend services (Firebase, Sentry, Supabase, etc.)
   - https://docs.astro.build/_llms-txt/migration-guides.txt - Migration guides (migrating from other tools)
   - https://docs.astro.build/_llms-txt/additional-guides.txt - Additional guides (e-commerce, auth, testing, DAM)

2. Selection strategy:
   - For API/config questions → fetch api-reference.txt
   - For "how do I add X" questions → fetch how-to-recipes.txt
   - For deployment questions → fetch deployment-guides.txt
   - For CMS integration → fetch cms-guides.txt
   - For backend/third-party services → fetch backend-services.txt
   - For migrating from another framework → fetch migration-guides.txt
   - For e-commerce, auth, testing → fetch additional-guides.txt
   - For beginner/tutorial questions → fetch build-a-blog-tutorial.txt
   - For general or broad questions → fetch llms-small.txt (or llms-full.txt if depth needed)
   - When unsure → start with llms-small.txt, then fetch topic-specific files as needed

3. These are large text files containing full documentation content.
   Search through the fetched content for relevant sections.

4. Fetch multiple files in parallel using WebFetch when the question
   spans multiple topics.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user set up an Astro project with content collections:

```
Task tool prompt:

You are researching Astro framework documentation to help with a specific task.

## Your Research Goal
Find complete instructions for setting up an Astro project with content collections for a blog, including schema validation and querying content.

## Context
A user wants to build a blog using Astro's content collections feature with typed Markdown content, frontmatter validation, and dynamic page generation.

## Specific Questions to Answer
1. How do you create and configure content collections?
2. How do you define a schema for frontmatter validation?
3. How do you query and render collection entries?
4. How do you generate dynamic pages from collection entries?
5. How do you use Markdown and MDX with content collections?

## Research Process
1. First fetch https://docs.astro.build/llms-small.txt for the abridged docs
2. Also fetch https://docs.astro.build/_llms-txt/api-reference.txt for API details on content collections

## Required Output
Provide step-by-step setup instructions with all code examples. Include schema definition, collection querying, and dynamic route generation.
```

### Example: Deploying an Astro Site

```
Task tool prompt:

You are researching Astro framework documentation to help with a specific task.

## Your Research Goal
Find deployment instructions for an Astro site to a specific hosting platform, including SSR adapter configuration if needed.

## Context
A user wants to deploy their Astro site and needs platform-specific instructions, including whether to use static or server output mode.

## Specific Questions to Answer
1. How do you configure Astro for static vs server-rendered output?
2. How do you install and configure an SSR adapter?
3. What are the platform-specific deployment steps?
4. How do you configure environment variables for production?
5. What build commands and output settings are needed?

## Research Process
1. Fetch https://docs.astro.build/_llms-txt/deployment-guides.txt for platform-specific deployment instructions
2. Also fetch https://docs.astro.build/_llms-txt/api-reference.txt for adapter and config API details

## Required Output
Provide deployment instructions with configuration examples for the target platform.
```

### Example: Adding a UI Framework Integration

```
Task tool prompt:

You are researching Astro framework documentation to help with a specific task.

## Your Research Goal
Learn how to integrate a UI framework (React, Vue, Svelte, etc.) with Astro, including island architecture and client directives.

## Context
A user wants to use interactive React/Vue/Svelte components within their Astro site while keeping the benefits of Astro's island architecture.

## Specific Questions to Answer
1. How do you install a framework integration?
2. How do you use framework components in .astro files?
3. How do client directives work (client:load, client:idle, client:visible, etc.)?
4. How do you share state between islands?
5. How do you handle framework-specific features like React context or Vue composables?

## Research Process
1. Fetch https://docs.astro.build/llms-small.txt for general framework integration docs
2. Also fetch https://docs.astro.build/_llms-txt/how-to-recipes.txt for practical integration examples

## Required Output
Provide integration guide with code examples for component usage, client directives, and state management patterns.
```

### Example: Migrating from Another Framework

```
Task tool prompt:

You are researching Astro framework documentation to help with a specific task.

## Your Research Goal
Find guidance for migrating an existing project from another framework (Next.js, Gatsby, Nuxt, etc.) to Astro.

## Context
A user wants to migrate their existing site to Astro and needs to understand the differences and migration path.

## Specific Questions to Answer
1. What are the key architectural differences?
2. How do you migrate routing and pages?
3. How do you migrate components and layouts?
4. How do you handle data fetching in Astro?
5. What are common gotchas during migration?

## Research Process
1. Fetch https://docs.astro.build/_llms-txt/migration-guides.txt for framework-specific migration instructions
2. Optionally fetch https://docs.astro.build/llms-small.txt for general Astro concepts

## Required Output
Provide a migration guide with before/after code examples and a checklist of changes needed.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: Documentation Files

| Need | Fetch This |
|------|------------|
| General / broad questions | `llms-small.txt` (abridged) or `llms-full.txt` (complete) |
| API, config, types | `_llms-txt/api-reference.txt` |
| How to add features | `_llms-txt/how-to-recipes.txt` |
| Blog tutorial (beginner) | `_llms-txt/build-a-blog-tutorial.txt` |
| Deploying to hosts | `_llms-txt/deployment-guides.txt` |
| CMS integrations | `_llms-txt/cms-guides.txt` |
| Backend services | `_llms-txt/backend-services.txt` |
| Migrating from other tools | `_llms-txt/migration-guides.txt` |
| E-commerce, auth, testing | `_llms-txt/additional-guides.txt` |

## Key Astro Concepts

| Concept | Description |
|---------|-------------|
| Island Architecture | Interactive UI components hydrate independently, rest of page is static HTML |
| Content Collections | Type-safe content management for Markdown, MDX, JSON, YAML |
| Client Directives | `client:load`, `client:idle`, `client:visible`, `client:media`, `client:only` |
| Output Modes | `static` (SSG, default), `server` (SSR), `hybrid` (mix of both) |
| Integrations | Official integrations for React, Vue, Svelte, Preact, Solid, Tailwind, MDX |
| `.astro` Files | HTML-like templating syntax with a frontmatter script fence for server logic |

## Documentation URL

Main documentation index: `https://docs.astro.build/llms.txt`
