---
name: posthog
description: |
  Integrate and work with PostHog analytics, feature flags, experiments, session replay, surveys, error tracking, and all other PostHog products. Use when the user asks to add PostHog tracking, capture events, set up feature flags, run A/B tests, configure session replay, create surveys, use the PostHog API, work with PostHog SDKs (JavaScript, Node, React, Python, etc.), debug PostHog integration issues, or implement any PostHog functionality. Also use when questions arise about PostHog configuration, data pipelines, webhooks, or the PostHog data model.
---

# PostHog

Work with PostHog by fetching the latest documentation on-demand. Never rely on memorized PostHog APIs or configuration — always fetch current docs to ensure accuracy.

## Documentation Entry Points

| Area | URL |
|------|-----|
| Docs home | `https://posthog.com/docs` |
| SDKs | `https://posthog.com/docs/libraries` |
| Frameworks | `https://posthog.com/docs/frameworks` |
| API reference | `https://posthog.com/docs/api` |
| Product Analytics | `https://posthog.com/docs/product-analytics` |
| Feature Flags | `https://posthog.com/docs/feature-flags` |
| Experiments | `https://posthog.com/docs/experiments` |
| Session Replay | `https://posthog.com/docs/session-replay` |
| Surveys | `https://posthog.com/docs/surveys` |
| Error Tracking | `https://posthog.com/docs/error-tracking` |
| Data Pipelines | `https://posthog.com/docs/cdp` |
| Data Warehouse | `https://posthog.com/docs/data-warehouse` |
| Web Analytics | `https://posthog.com/docs/web-analytics` |
| LLM Analytics | `https://posthog.com/docs/llm-analytics` |
| AI Engineering | `https://posthog.com/docs/ai-engineering` |

## Workflow

When a task involves PostHog, spawn a sub-agent (via the Task tool) to research the relevant documentation. This keeps the main context clean while the sub-agent fetches and distills only the information needed.

### Sub-agent prompt template

Adapt this template based on what information is needed:

```
Research PostHog documentation to answer the following question:

<QUESTION or TASK DESCRIPTION>

Steps:
1. Fetch the relevant PostHog docs page using WebFetch. Start with the most specific entry point URL from this list:
   - Docs home: https://posthog.com/docs
   - SDKs: https://posthog.com/docs/libraries
   - Frameworks: https://posthog.com/docs/frameworks
   - API: https://posthog.com/docs/api
   - [include whichever entry point is most relevant]

2. Scan the fetched page for links to more specific sub-pages relevant to the question. Fetch those sub-pages as needed. Follow at most 2-3 levels deep.

3. Extract the specific information needed: API signatures, configuration options, code examples, setup instructions, etc.

4. Return a concise summary containing ONLY the information needed to complete the task. Include:
   - Exact code snippets or configuration
   - Any required package names and install commands
   - Key caveats or gotchas mentioned in the docs
   - Source URLs for the pages you referenced
```

### When to spawn a sub-agent vs. fetch directly

- **Spawn a sub-agent** (default): When you need to explore docs across multiple pages, or when the answer might require following links from an index page to sub-pages. This avoids polluting your main context with raw documentation.
- **Fetch directly** (skip sub-agent): When you already know the exact URL for a specific docs page and just need to confirm one detail. Use WebFetch yourself in this case.

### Example: Adding PostHog to a Next.js app

1. Spawn a sub-agent with prompt:
   ```
   Research PostHog documentation for how to integrate PostHog with a Next.js application.
   
   1. Fetch https://posthog.com/docs/frameworks and find the Next.js-specific page.
   2. Fetch that Next.js page and extract the full setup instructions.
   3. Also fetch https://posthog.com/docs/libraries to identify the correct JS/React SDK package.
   4. Return: package names, install commands, provider setup code, and any Next.js-specific configuration (App Router vs Pages Router).
   ```
2. Use the returned information to implement the integration.

### Example: Setting up feature flags

1. Spawn a sub-agent with prompt:
   ```
   Research PostHog documentation for implementing feature flags.
   
   1. Fetch https://posthog.com/docs/feature-flags to get the overview.
   2. Follow links to the SDK-specific implementation guide for [JavaScript/React/Node/etc.].
   3. Return: how to check flags client-side and server-side, the API for flag evaluation, and any relevant code examples.
   ```
2. Use the returned information to implement feature flags.

## Rules

- **Never guess PostHog APIs** — always fetch current docs. PostHog ships frequently and APIs evolve.
- **Prefer SDK-specific docs** over generic API docs when the user is working in a specific language/framework.
- **Check the frameworks page** (`/docs/frameworks`) when integrating into a specific framework — PostHog often has framework-specific setup guides.
- **Include source URLs** in your response so the user can reference the original docs.
