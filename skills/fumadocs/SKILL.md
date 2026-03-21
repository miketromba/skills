---
name: fumadocs
description: Fumadocs documentation framework guidance. Use when working with Fumadocs - a flexible docs framework for Next.js, React Router, TanStack Start, and Waku. Triggers on questions about Fumadocs setup, page tree, MDX content source, Fumadocs UI, Fumadocs Core, search integration, OpenAPI docs, internationalization, layouts, components, navigation, deploying, or ANY Fumadocs-related development tasks.
---

# Fumadocs

Fumadocs is a composable documentation framework supporting Next.js, React Router, TanStack Start, and Waku. It consists of Fumadocs Core (headless library), Fumadocs UI (default theme), Fumadocs MDX (official content source), and Fumadocs CLI.

## Research Process

To answer questions about Fumadocs, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to Fumadocs documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research Fumadocs docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching Fumadocs documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. First, fetch the documentation index to see all available pages:
   URL: https://www.fumadocs.dev/llms.txt

   This index lists every documentation page organized by package.
   Doc pages can be fetched by appending .md to the path, e.g.:
   https://www.fumadocs.dev/docs/search.md

2. Based on the questions above, identify and fetch the most relevant documentation. The docs are organized by package:

   **Framework (core docs framework):**

   Getting Started:
   - /docs - Quick start guide
   - /docs/what-is-fumadocs - Introduction and overview
   - /docs/comparisons - Comparisons with other frameworks

   Manual Installation (per-framework):
   - /docs/manual-installation - Overview
   - /docs/manual-installation/next - Next.js setup
   - /docs/manual-installation/react-router - React Router setup
   - /docs/manual-installation/tanstack-start - TanStack Start setup
   - /docs/manual-installation/waku - Waku setup

   Writing:
   - /docs/page-conventions - Page slugs and page tree
   - /docs/markdown - Writing documents in MDX
   - /docs/markdown/math - Math equations
   - /docs/markdown/mermaid - Mermaid diagrams
   - /docs/markdown/twoslash - TypeScript Twoslash

   Configuration:
   - /docs/navigation - Navigation configuration
   - /docs/deploying - Deployment guide
   - /docs/deploying/static - Static site output
   - /docs/internationalization - i18n overview
   - /docs/internationalization/next - i18n with Next.js
   - /docs/internationalization/react-router - i18n with React Router
   - /docs/internationalization/tanstack-start - i18n with TanStack Start

   Search:
   - /docs/search - Search overview
   - /docs/search/orama - Orama (default search)
   - /docs/search/algolia - Algolia integration
   - /docs/search/flexsearch - FlexSearch
   - /docs/search/mixedbread - Mixedbread
   - /docs/search/orama-cloud - Orama Cloud
   - /docs/search/typesense - Typesense
   - /docs/search/custom - Custom search solutions

   Integrations:
   - /docs/integrations/feedback - User feedback
   - /docs/integrations/llms - AI & LLM integration
   - /docs/integrations/validate-links - Link validation
   - /docs/integrations/obsidian - Obsidian vault rendering
   - /docs/integrations/python - Python doc generation
   - /docs/integrations/typescript - TypeScript doc generation
   - /docs/integrations/content - Content source integration
   - /docs/integrations/content/custom - Custom content sources
   - /docs/integrations/content/mdx-remote - MDX Remote
   - /docs/integrations/og - OG image generation
   - /docs/integrations/og/next - OG with Next.js
   - /docs/integrations/og/takumi - OG with Takumi
   - /docs/integrations/openapi - OpenAPI docs generation
   - /docs/integrations/openapi/api-page - OpenAPI page component
   - /docs/integrations/openapi/generate-files - generateFiles()
   - /docs/integrations/openapi/server - createOpenAPI() server
   - /docs/integrations/story - Story component display
   - /docs/integrations/story/next - Story with Next.js
   - /docs/integrations/story/vite - Story with Vite

   Guides:
   - /docs/guides - Guides overview
   - /docs/guides/access-control - Access control
   - /docs/guides/export-epub - EPUB export
   - /docs/guides/export-pdf - PDF export
   - /docs/guides/rss - RSS feed generation

   **Fumadocs UI (default theme):**

   - /docs/ui - UI overview
   - /docs/ui/component-library - Headless component library
   - /docs/ui/theme - Theming

   Search UI:
   - /docs/ui/search - Search UI component

   Components:
   - /docs/ui/components - Component overview
   - /docs/ui/components/accordion - Accordion
   - /docs/ui/components/auto-type-table - Auto type table
   - /docs/ui/components/banner - Banner
   - /docs/ui/components/codeblock - Code block (Shiki)
   - /docs/ui/components/dynamic-codeblock - Dynamic code block
   - /docs/ui/components/files - File structure display
   - /docs/ui/components/github-info - GitHub info
   - /docs/ui/components/graph-view - Graph view
   - /docs/ui/components/image-zoom - Zoomable image
   - /docs/ui/components/inline-toc - Inline TOC
   - /docs/ui/components/steps - Steps
   - /docs/ui/components/tabs - Tabs
   - /docs/ui/components/type-table - Type table

   Layouts:
   - /docs/ui/layouts - Layout overview
   - /docs/ui/layouts/links - Layout links/navigation
   - /docs/ui/layouts/nav - Navbar configuration
   - /docs/ui/layouts/docs - Docs layout
   - /docs/ui/layouts/flux - Flux (minimal) layout
   - /docs/ui/layouts/home-layout - Home layout
   - /docs/ui/layouts/notebook - Notebook layout
   - /docs/ui/layouts/page - Docs page component
   - /docs/ui/layouts/root-provider - Root provider

   **Fumadocs Core (headless library):**

   - /docs/headless - Introduction

   Search (headless):
   - /docs/headless/search - Search configuration
   - /docs/headless/search/algolia - Algolia
   - /docs/headless/search/flexsearch - FlexSearch
   - /docs/headless/search/mixedbread - Mixedbread
   - /docs/headless/search/orama - Built-in Orama search
   - /docs/headless/search/orama-cloud - Orama Cloud
   - /docs/headless/search/trieve - Trieve
   - /docs/headless/search/typesense - Typesense

   API References:
   - /docs/headless/page-tree - Page tree structure
   - /docs/headless/internationalization/config - i18n configuration
   - /docs/headless/internationalization/middleware - i18n middleware
   - /docs/headless/components - Headless components
   - /docs/headless/components/breadcrumb - Breadcrumb
   - /docs/headless/components/link - Link
   - /docs/headless/components/toc - Table of Contents
   - /docs/headless/utils - Utilities
   - /docs/headless/utils/get-toc - Get TOC from content
   - /docs/headless/utils/git-last-edit - Last modified time
   - /docs/headless/utils/page-tree - Page tree utilities
   - /docs/headless/utils/shiki - Shiki management

   MDX Plugins:
   - /docs/headless/mdx - MDX plugins overview
   - /docs/headless/mdx/headings - Heading processing
   - /docs/headless/mdx/install - Package install code blocks
   - /docs/headless/mdx/rehype-code - Rehype code highlighter
   - /docs/headless/mdx/remark-admonition - Admonitions
   - /docs/headless/mdx/remark-image - Image sizing
   - /docs/headless/mdx/remark-llms - LLM markdown generation
   - /docs/headless/mdx/remark-mdx-files - File generation from codeblocks
   - /docs/headless/mdx/remark-npm - Package manager code blocks
   - /docs/headless/mdx/remark-ts2js - TS to JS conversion
   - /docs/headless/mdx/structure - Document structure extraction

   Sources:
   - /docs/headless/source-api - Loader API
   - /docs/headless/source-api/plugins - Loader plugins
   - /docs/headless/source-api/source - Source setup
   - /docs/headless/page-conventions - Page slug conventions
   - /docs/headless/content-collections - Content Collections

   **Fumadocs MDX (official content source):**

   - /docs/mdx - Getting started
   - /docs/mdx/performance - Performance

   Accessing Collections:
   - /docs/mdx/entry - Entry files
   - /docs/mdx/entry/browser - Browser entry
   - /docs/mdx/entry/dynamic - Dynamic entry
   - /docs/mdx/entry/import - Import MDX files
   - /docs/mdx/entry/server - Server entry

   Framework Integration:
   - /docs/mdx/next - Next.js integration
   - /docs/mdx/vite - Vite integration

   Runtime Loader:
   - /docs/mdx/loader - Loader overview
   - /docs/mdx/loader/bun - Bun runtime
   - /docs/mdx/loader/node - Node.js runtime

   Configuration:
   - /docs/mdx/collections - Collections definition
   - /docs/mdx/global - Global options
   - /docs/mdx/mdx - MDX processor presets

   Features:
   - /docs/mdx/include - Content reuse
   - /docs/mdx/last-modified - Last modified time
   - /docs/mdx/async - Lazy loading
   - /docs/mdx/typegen - Type generation
   - /docs/mdx/workspace - Monorepo workspace

   **Fumadocs CLI:**

   - /docs/cli - CLI user guide
   - /docs/cli/create-fumadocs-app - Create new app
   - /docs/cli/press - Fumapress (Markdown viewer)

3. Fetch multiple relevant pages in parallel using WebFetch.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user set up Fumadocs with Next.js:

```
Task tool prompt:

You are researching Fumadocs documentation to help with a specific task.

## Your Research Goal
Find complete instructions for setting up a Fumadocs documentation site with Next.js, including MDX content source, navigation, and search.

## Context
A user wants to create a documentation site using Fumadocs on Next.js with the default Fumadocs UI theme, MDX content, and built-in search.

## Specific Questions to Answer
1. How do you create a new Fumadocs project or add it to an existing Next.js app?
2. How do you configure Fumadocs MDX as the content source?
3. How do you set up navigation and page tree?
4. How do you configure the Docs layout and page components?
5. How do you enable built-in Orama search?

## Research Process
1. First fetch https://www.fumadocs.dev/llms.txt for the documentation index
2. Then fetch /docs.md, /docs/manual-installation/next.md, /docs/mdx.md, /docs/mdx/next.md
3. Also fetch /docs/navigation.md, /docs/ui/layouts/docs.md, /docs/search/orama.md

## Required Output
Provide step-by-step setup instructions with all code examples. Include project structure, configuration, and layout setup.
```

### Example: OpenAPI Integration

```
Task tool prompt:

You are researching Fumadocs documentation to help with a specific task.

## Your Research Goal
Understand how to generate API documentation from an OpenAPI schema using Fumadocs, including page generation and the API playground component.

## Context
A user has an OpenAPI spec and wants to auto-generate interactive API documentation within their Fumadocs site.

## Specific Questions to Answer
1. How do you set up the OpenAPI integration?
2. How do you generate pages from an OpenAPI schema with generateFiles()?
3. How do you use createOpenAPI() for the server instance?
4. How do you render the API page component?
5. How do you customize the generated API docs?

## Research Process
1. First fetch https://www.fumadocs.dev/llms.txt for the index
2. Fetch /docs/integrations/openapi.md, /docs/integrations/openapi/generate-files.md, /docs/integrations/openapi/server.md, /docs/integrations/openapi/api-page.md

## Required Output
Provide a complete guide to OpenAPI integration with configuration and code examples.
```

### Example: Theming and UI Customization

```
Task tool prompt:

You are researching Fumadocs documentation to help with a specific task.

## Your Research Goal
Learn how to customize the Fumadocs UI theme, layouts, and components to match a brand's visual identity.

## Context
A user wants to customize colors, fonts, layout structure, and add custom components to their Fumadocs site.

## Specific Questions to Answer
1. How do you configure theming and colors?
2. What layout options are available (Docs, Flux, Notebook, Home)?
3. How do you customize the navbar and navigation links?
4. What built-in UI components are available?
5. How do you add custom components?

## Research Process
1. First fetch https://www.fumadocs.dev/llms.txt for the index
2. Fetch /docs/ui.md, /docs/ui/theme.md, /docs/ui/layouts.md, /docs/ui/layouts/docs.md, /docs/ui/layouts/nav.md
3. Fetch /docs/ui/components.md for component overview

## Required Output
Provide a comprehensive theming and customization guide with configuration examples.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: Common Topics

| Topic | Key Docs |
|-------|----------|
| Getting Started | `/docs`, `/docs/what-is-fumadocs` |
| Next.js Setup | `/docs/manual-installation/next`, `/docs/mdx/next` |
| React Router Setup | `/docs/manual-installation/react-router` |
| TanStack Start Setup | `/docs/manual-installation/tanstack-start` |
| MDX Content Source | `/docs/mdx`, `/docs/mdx/collections` |
| Page Tree & Slugs | `/docs/page-conventions`, `/docs/headless/page-tree` |
| Navigation | `/docs/navigation`, `/docs/ui/layouts/links` |
| Search | `/docs/search`, `/docs/search/orama` |
| Fumadocs UI | `/docs/ui`, `/docs/ui/theme`, `/docs/ui/layouts` |
| Components | `/docs/ui/components` (accordion, tabs, steps, code block, etc.) |
| Layouts | `/docs/ui/layouts/docs`, `/docs/ui/layouts/flux`, `/docs/ui/layouts/notebook` |
| OpenAPI | `/docs/integrations/openapi`, `/docs/integrations/openapi/generate-files` |
| i18n | `/docs/internationalization`, framework-specific pages |
| Deployment | `/docs/deploying`, `/docs/deploying/static` |
| MDX Plugins | `/docs/headless/mdx` (rehype-code, remark-admonition, etc.) |
| Headless Core | `/docs/headless`, `/docs/headless/source-api` |
| CLI | `/docs/cli`, `/docs/cli/create-fumadocs-app` |
| AI & LLMs | `/docs/integrations/llms` |

## Package Overview

| Package | Purpose |
|---------|---------|
| Fumadocs Core | Headless library: page tree, search, components, MDX plugins, utilities |
| Fumadocs UI | Default theme: layouts (Docs, Flux, Notebook, Home), UI components, search UI |
| Fumadocs MDX | Official content source: MDX collections, entries, loader, type generation |
| Fumadocs CLI | CLI tools: project scaffolding, component installation, Fumapress |

## Documentation URL

Main documentation index: `https://www.fumadocs.dev/llms.txt`
