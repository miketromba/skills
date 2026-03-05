---
name: supabase
description: Supabase backend-as-a-service platform documentation and guidance. Use when working with Supabase - an open-source Firebase alternative providing Postgres database, authentication, real-time subscriptions, edge functions, storage, and vector embeddings. Triggers on questions about Supabase setup, database, auth, RLS, edge functions, storage, realtime, pgvector, migrations, CLI, self-hosting, or ANY Supabase-related development tasks.
---

# Supabase

Supabase is an open-source Firebase alternative that provides a Postgres database, authentication, instant APIs, edge functions, real-time subscriptions, storage, and vector embeddings.

## Research Process

To answer questions about Supabase, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to Supabase documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research Supabase docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching Supabase documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. First, fetch the documentation index to see all available resources:
   URL: https://supabase.com/docs/llms.txt
   
   This meta-index links to specialized documentation files:
   - https://supabase.com/llms/guides.txt - Main guides and tutorials
   - https://supabase.com/llms/js.txt - JavaScript SDK reference
   - https://supabase.com/llms/dart.txt - Dart/Flutter SDK reference
   - https://supabase.com/llms/swift.txt - Swift/iOS SDK reference
   - https://supabase.com/llms/kotlin.txt - Kotlin/Android SDK reference
   - https://supabase.com/llms/python.txt - Python SDK reference
   - https://supabase.com/llms/csharp.txt - C# SDK reference
   - https://supabase.com/llms/cli.txt - CLI reference

2. Based on the questions above, identify and fetch the most relevant documentation. The guides are organized by topic:

   **Core Services:**
   - /docs/guides/database - Postgres database, tables, functions, triggers, RLS
   - /docs/guides/auth - Authentication, providers, JWTs, sessions, MFA
   - /docs/guides/api - Auto-generated REST API (PostgREST)
   - /docs/guides/storage - File storage, buckets, CDN, image transforms
   - /docs/guides/realtime - WebSockets, broadcast, presence, postgres changes
   - /docs/guides/functions - Edge Functions (Deno-based serverless)
   
   **AI & Vectors:**
   - /docs/guides/ai - pgvector, embeddings, semantic search
   - /docs/guides/ai/vector-columns - Vector storage and indexing
   - /docs/guides/ai/semantic-search - Similarity search
   - /docs/guides/ai/langchain - LangChain integration
   - /docs/guides/ai/hugging-face - Hugging Face integration
   
   **Platform & Operations:**
   - /docs/guides/cli - Supabase CLI and local development
   - /docs/guides/local-development - Local dev environment setup
   - /docs/guides/deployment - Branching, CI/CD, Terraform
   - /docs/guides/platform - Dashboard, organizations, billing
   - /docs/guides/self-hosting - Docker deployment
   
   **Database Features:**
   - /docs/guides/database/postgres/row-level-security - RLS policies
   - /docs/guides/database/postgres/indexes - Index optimization
   - /docs/guides/database/extensions - Postgres extensions
   - /docs/guides/database/api - Auto-generated APIs
   
   **Scheduling & Queues:**
   - /docs/guides/cron - pg_cron scheduled jobs
   - /docs/guides/queues - pgmq message queues
   
   **Security & Compliance:**
   - /docs/guides/security - SOC 2, HIPAA, platform security
   
   **Telemetry & Monitoring:**
   - /docs/guides/telemetry - Logs, metrics, reports
   - /docs/guides/telemetry/log-drains - Export logs to external services
   
   **Framework Quickstarts:**
   - /docs/guides/getting-started/quickstarts/nextjs
   - /docs/guides/getting-started/quickstarts/reactjs
   - /docs/guides/getting-started/quickstarts/nuxtjs
   - /docs/guides/getting-started/quickstarts/sveltekit
   - /docs/guides/getting-started/quickstarts/flutter
   - /docs/guides/getting-started/quickstarts/ios-swiftui
   - /docs/guides/getting-started/quickstarts/kotlin
   
   **Migrations:**
   - /docs/guides/resources/migrating-to-supabase/firebase-auth
   - /docs/guides/resources/migrating-to-supabase/firestore-data
   - /docs/guides/resources/migrating-to-supabase/heroku
   - /docs/guides/resources/migrating-to-supabase/postgres

3. For SDK-specific questions, fetch the appropriate SDK reference file (js.txt, python.txt, etc.)

4. Fetch multiple relevant pages in parallel using WebFetch.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user set up authentication:

```
Task tool prompt:

You are researching Supabase documentation to help with a specific task.

## Your Research Goal
Find complete instructions for implementing email/password authentication with Supabase in a Next.js application, including RLS policies for user data.

## Context
A user wants to add authentication to their Next.js app using Supabase Auth. They need end-to-end setup including protecting user data with Row Level Security.

## Specific Questions to Answer
1. How do you install and configure the Supabase client for Next.js?
2. How do you implement email/password sign up and sign in?
3. How do you protect routes and check auth state?
4. How do you create RLS policies that restrict data to authenticated users?
5. How do you handle auth state changes and session management?

## Research Process
1. First fetch https://supabase.com/llms/guides.txt for the main documentation
2. Then fetch the Next.js quickstart and auth guides
3. Also fetch https://supabase.com/llms/js.txt for JavaScript SDK specifics

## Required Output
Provide step-by-step integration instructions with all code examples. Include RLS policy examples and any troubleshooting guidance.
```

### Example: Setting Up Edge Functions

```
Task tool prompt:

You are researching Supabase documentation to help with a specific task.

## Your Research Goal
Understand how to create, deploy, and invoke Supabase Edge Functions, including connecting to the database and handling secrets.

## Context
A user wants to create serverless functions that process webhooks and interact with their Supabase database.

## Specific Questions to Answer
1. How do you create a new Edge Function locally?
2. How do you connect to Postgres from an Edge Function?
3. How do you manage secrets and environment variables?
4. How do you deploy Edge Functions?
5. How do you invoke Edge Functions from the client?

## Research Process
[... standard research process ...]

## Required Output
Provide a comprehensive guide to Edge Function development with code examples for function creation, database access, and deployment.
```

### Example: Vector Search with pgvector

```
Task tool prompt:

You are researching Supabase documentation to help with a specific task.

## Your Research Goal
Learn how to implement semantic search using Supabase's pgvector support, including embedding generation and similarity queries.

## Context
A user wants to build an AI-powered search feature that finds semantically similar content rather than exact keyword matches.

## Specific Questions to Answer
1. How do you enable and configure pgvector in Supabase?
2. How do you create a table with vector columns?
3. How do you generate and store embeddings?
4. How do you perform similarity searches?
5. What indexing strategies are available for vectors?

## Research Process
[... standard research process ...]

## Required Output
Provide implementation guide with SQL for table creation, embedding storage patterns, and similarity query examples.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: Common Topics

| Topic | Key Docs |
|-------|----------|
| Getting Started | `/docs/guides/getting-started`, quickstarts for each framework |
| Authentication | `/docs/guides/auth`, social providers, phone auth, MFA |
| Database | `/docs/guides/database`, RLS, functions, triggers |
| REST API | `/docs/guides/api`, PostgREST auto-generated endpoints |
| Edge Functions | `/docs/guides/functions`, Deno runtime, deployment |
| Storage | `/docs/guides/storage`, buckets, CDN, image transforms |
| Realtime | `/docs/guides/realtime`, broadcast, presence, postgres changes |
| Vectors/AI | `/docs/guides/ai`, pgvector, embeddings, semantic search |
| Local Dev | `/docs/guides/cli`, `/docs/guides/local-development` |
| Self-Hosting | `/docs/guides/self-hosting`, Docker deployment |
| Migrations | `/docs/guides/resources/migrating-to-supabase/` |

## SDK Reference Files

For detailed SDK method documentation, use these direct links:

| SDK | URL |
|-----|-----|
| JavaScript | `https://supabase.com/llms/js.txt` |
| Python | `https://supabase.com/llms/python.txt` |
| Dart/Flutter | `https://supabase.com/llms/dart.txt` |
| Swift/iOS | `https://supabase.com/llms/swift.txt` |
| Kotlin/Android | `https://supabase.com/llms/kotlin.txt` |
| C# | `https://supabase.com/llms/csharp.txt` |
| CLI | `https://supabase.com/llms/cli.txt` |
