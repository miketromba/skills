---
name: tanstack-query
description: TanStack Query (React Query) documentation and guidance. Use when working with TanStack Query - a powerful async state management library for data fetching, caching, synchronization, and server state management. Triggers on questions about React Query, TanStack Query, useQuery, useMutation, query invalidation, caching strategies, optimistic updates, infinite queries, prefetching, or ANY TanStack Query-related development tasks.
---

# TanStack Query

TanStack Query (formerly React Query) is a powerful async state management library for fetching, caching, synchronizing, and updating server state in your applications. It works with React, Vue, Solid, Svelte, and Angular.

## Important: Fetching Documentation

**CRITICAL**: When fetching TanStack Query documentation pages, always append `.md` to the URL to get the markdown version for optimal readability.

```
# ❌ Don't fetch this:
https://tanstack.com/query/latest/docs/framework/react/overview

# ✅ Fetch this instead:
https://tanstack.com/query/latest/docs/framework/react/overview.md
```

This applies to ALL documentation links from TanStack.

## Research Process

To answer questions about TanStack Query, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to TanStack Query documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research TanStack Query docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching TanStack Query documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

**IMPORTANT**: When fetching any TanStack documentation page, ALWAYS append `.md` to the URL to get the markdown version. For example:
- https://tanstack.com/query/latest/docs/framework/react/overview.md
- https://tanstack.com/query/latest/docs/framework/react/guides/queries.md

1. First, fetch the main TanStack Query overview:
   URL: https://tanstack.com/query/latest/docs/framework/react/overview.md

2. Based on the questions above, identify and fetch relevant documentation pages. Key documentation sections:

   **Getting Started:**
   - Overview: https://tanstack.com/query/latest/docs/framework/react/overview.md
   - Installation: https://tanstack.com/query/latest/docs/framework/react/installation.md
   - Quick Start: https://tanstack.com/query/latest/docs/framework/react/quick-start.md
   - Devtools: https://tanstack.com/query/latest/docs/framework/react/devtools.md
   - TypeScript: https://tanstack.com/query/latest/docs/framework/react/typescript.md

   **Core Guides:**
   - Queries: https://tanstack.com/query/latest/docs/framework/react/guides/queries.md
   - Query Keys: https://tanstack.com/query/latest/docs/framework/react/guides/query-keys.md
   - Query Functions: https://tanstack.com/query/latest/docs/framework/react/guides/query-functions.md
   - Parallel Queries: https://tanstack.com/query/latest/docs/framework/react/guides/parallel-queries.md
   - Dependent Queries: https://tanstack.com/query/latest/docs/framework/react/guides/dependent-queries.md
   - Background Fetching: https://tanstack.com/query/latest/docs/framework/react/guides/background-fetching-indicators.md
   - Window Focus Refetching: https://tanstack.com/query/latest/docs/framework/react/guides/window-focus-refetching.md
   - Disabling Queries: https://tanstack.com/query/latest/docs/framework/react/guides/disabling-queries.md
   - Query Retries: https://tanstack.com/query/latest/docs/framework/react/guides/query-retries.md
   - Paginated Queries: https://tanstack.com/query/latest/docs/framework/react/guides/paginated-queries.md
   - Infinite Queries: https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries.md
   - Placeholder Data: https://tanstack.com/query/latest/docs/framework/react/guides/placeholder-query-data.md
   - Initial Query Data: https://tanstack.com/query/latest/docs/framework/react/guides/initial-query-data.md
   - Prefetching: https://tanstack.com/query/latest/docs/framework/react/guides/prefetching.md

   **Mutations:**
   - Mutations: https://tanstack.com/query/latest/docs/framework/react/guides/mutations.md
   - Optimistic Updates: https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates.md
   - Query Invalidation: https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation.md
   - Invalidation from Mutations: https://tanstack.com/query/latest/docs/framework/react/guides/invalidations-from-mutations.md
   - Updates from Mutation Responses: https://tanstack.com/query/latest/docs/framework/react/guides/updates-from-mutation-responses.md

   **Caching & Performance:**
   - Caching: https://tanstack.com/query/latest/docs/framework/react/guides/caching.md
   - Default Query Function: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function.md
   - Suspense: https://tanstack.com/query/latest/docs/framework/react/guides/suspense.md
   - Filters: https://tanstack.com/query/latest/docs/framework/react/guides/filters.md

   **Server-Side Rendering:**
   - SSR: https://tanstack.com/query/latest/docs/framework/react/guides/ssr.md
   - Advanced SSR: https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr.md

   **Testing:**
   - Testing: https://tanstack.com/query/latest/docs/framework/react/guides/testing.md

   **API Reference:**
   - useQuery: https://tanstack.com/query/latest/docs/framework/react/reference/useQuery.md
   - useMutation: https://tanstack.com/query/latest/docs/framework/react/reference/useMutation.md
   - useQueryClient: https://tanstack.com/query/latest/docs/framework/react/reference/useQueryClient.md
   - useInfiniteQuery: https://tanstack.com/query/latest/docs/framework/react/reference/useInfiniteQuery.md
   - useSuspenseQuery: https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery.md
   - useQueries: https://tanstack.com/query/latest/docs/framework/react/reference/useQueries.md
   - useIsFetching: https://tanstack.com/query/latest/docs/framework/react/reference/useIsFetching.md
   - useMutationState: https://tanstack.com/query/latest/docs/framework/react/reference/useMutationState.md
   - QueryClient: https://tanstack.com/query/latest/docs/reference/QueryClient.md
   - QueryClientProvider: https://tanstack.com/query/latest/docs/framework/react/reference/QueryClientProvider.md

3. Remember to append .md to ALL documentation URLs before fetching!

4. Fetch multiple relevant pages in parallel using WebFetch.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user set up basic queries:

```
Task tool prompt:

You are researching TanStack Query documentation to help with a specific task.

## Your Research Goal
Find complete instructions for setting up TanStack Query in a React application and implementing basic data fetching with useQuery.

## Context
A user is new to TanStack Query and wants to understand how to fetch and cache data from an API.

## Specific Questions to Answer
1. How do you install TanStack Query?
2. How do you set up QueryClientProvider?
3. How do you use useQuery to fetch data?
4. How does the caching work by default?
5. How do you handle loading and error states?

## Research Process

**IMPORTANT**: Append .md to all documentation URLs!

1. Fetch these pages:
   - https://tanstack.com/query/latest/docs/framework/react/overview.md
   - https://tanstack.com/query/latest/docs/framework/react/installation.md
   - https://tanstack.com/query/latest/docs/framework/react/quick-start.md
   - https://tanstack.com/query/latest/docs/framework/react/guides/queries.md
   - https://tanstack.com/query/latest/docs/framework/react/guides/caching.md

## Required Output
Provide step-by-step setup instructions with code examples for installation, configuration, and basic query usage.
```

### Example: Mutations and Optimistic Updates

```
Task tool prompt:

You are researching TanStack Query documentation to help with a specific task.

## Your Research Goal
Learn how to implement mutations with optimistic updates for a better user experience when modifying server data.

## Context
A user wants to update a todo item and have the UI reflect the change immediately before the server responds.

## Specific Questions to Answer
1. How do you create a mutation with useMutation?
2. How do you implement optimistic updates?
3. How do you rollback on error?
4. How do you invalidate related queries after mutation?
5. What are the best practices for mutation error handling?

## Research Process

**IMPORTANT**: Append .md to all documentation URLs!

1. Fetch these pages:
   - https://tanstack.com/query/latest/docs/framework/react/guides/mutations.md
   - https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates.md
   - https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation.md
   - https://tanstack.com/query/latest/docs/framework/react/guides/updates-from-mutation-responses.md
   - https://tanstack.com/query/latest/docs/framework/react/reference/useMutation.md

## Required Output
Provide complete code examples for mutations with optimistic updates, including rollback handling and query invalidation.
```

### Example: Infinite Scrolling

```
Task tool prompt:

You are researching TanStack Query documentation to help with a specific task.

## Your Research Goal
Implement infinite scrolling/pagination using TanStack Query's useInfiniteQuery hook.

## Context
A user wants to load more items as the user scrolls down a list, fetching pages of data from an API.

## Specific Questions to Answer
1. How does useInfiniteQuery differ from useQuery?
2. How do you set up the getNextPageParam function?
3. How do you trigger fetching the next page?
4. How do you flatten paginated data for rendering?
5. How do you handle bidirectional infinite scroll?

## Research Process

**IMPORTANT**: Append .md to all documentation URLs!

1. Fetch these pages:
   - https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries.md
   - https://tanstack.com/query/latest/docs/framework/react/reference/useInfiniteQuery.md
   - https://tanstack.com/query/latest/docs/framework/react/guides/paginated-queries.md

## Required Output
Provide complete implementation guide with code examples for infinite scrolling.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: Core Hooks

| Hook | Purpose |
|------|---------|
| `useQuery` | Fetch and cache data |
| `useMutation` | Create/update/delete data |
| `useQueryClient` | Access QueryClient for manual operations |
| `useInfiniteQuery` | Infinite scrolling/pagination |
| `useSuspenseQuery` | Query with React Suspense |
| `useQueries` | Parallel queries dynamically |
| `useIsFetching` | Check if any queries are fetching |
| `useMutationState` | Access mutation state globally |

## Quick Reference: Common Patterns

| Pattern | Key Docs |
|---------|----------|
| Basic Setup | `installation.md`, `quick-start.md` |
| Data Fetching | `guides/queries.md`, `guides/query-keys.md` |
| Mutations | `guides/mutations.md`, `reference/useMutation.md` |
| Optimistic Updates | `guides/optimistic-updates.md` |
| Cache Invalidation | `guides/query-invalidation.md` |
| Infinite Scroll | `guides/infinite-queries.md` |
| SSR/Next.js | `guides/ssr.md`, `guides/advanced-ssr.md` |
| Prefetching | `guides/prefetching.md` |
| Suspense | `guides/suspense.md` |
| Testing | `guides/testing.md` |

## Documentation URL Pattern

All TanStack Query docs follow this pattern:
```
https://tanstack.com/query/latest/docs/framework/react/{path}.md
```

**Always append `.md` for markdown format!**
