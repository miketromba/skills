---
name: drizzle
description: Drizzle ORM TypeScript documentation and guidance. Use when working with Drizzle - a lightweight, type-safe TypeScript ORM for PostgreSQL, MySQL, SQLite, SingleStore, and MSSQL. Triggers on questions about Drizzle schema, migrations, drizzle-kit, queries, relations, joins, transactions, RLS, column types, database connections, or ANY Drizzle-related development tasks.
---

# Drizzle ORM

Drizzle is a modern TypeScript ORM that is lightweight (~7.4kb minified+gzipped), tree-shakeable with zero dependencies, and serverless-ready by design. It supports PostgreSQL, MySQL, SQLite, SingleStore, MSSQL, and CockroachDB.

## Research Process

To answer questions about Drizzle ORM, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to Drizzle documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research Drizzle docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching Drizzle ORM documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. First, fetch the documentation index to see all available pages:
   URL: https://orm.drizzle.team/llms.txt

2. Based on the questions above, identify and fetch the most relevant documentation pages. The docs are organized by topic:

   **Getting Started:**
   - /docs/get-started - Main getting started guide
   - /docs/get-started/postgresql-new - PostgreSQL setup (new project)
   - /docs/get-started/mysql-new - MySQL setup (new project)
   - /docs/get-started/sqlite-new - SQLite setup (new project)
   - /docs/overview - Drizzle ORM overview
   - /docs/gotchas - Common gotchas and solutions
   
   **Database Providers:**
   - /docs/get-started/neon-new - Neon Postgres
   - /docs/get-started/supabase-new - Supabase
   - /docs/get-started/planetscale-new - PlanetScale MySQL
   - /docs/get-started/turso-new - Turso (libSQL)
   - /docs/get-started/d1-new - Cloudflare D1
   - /docs/get-started/vercel-new - Vercel Postgres
   - /docs/get-started/bun-sqlite-new - Bun SQLite
   - /docs/get-started/expo-new - Expo SQLite
   
   **Schema & Column Types:**
   - /docs/sql-schema-declaration - Schema definition
   - /docs/column-types/pg - PostgreSQL column types
   - /docs/column-types/mysql - MySQL column types
   - /docs/column-types/sqlite - SQLite column types
   - /docs/column-types/singlestore - SingleStore column types
   - /docs/column-types/mssql - MSSQL column types
   - /docs/indexes-constraints - Indexes and constraints
   - /docs/sequences - Sequences
   - /docs/views - Views
   - /docs/schemas - Table schemas
   
   **Relations:**
   - /docs/relations-schema-declaration - Relations fundamentals
   - /docs/relations-v2 - Drizzle relations (v2)
   - /docs/relations - Soft relations
   
   **Queries & CRUD:**
   - /docs/data-querying - Query overview
   - /docs/rqb-v2 - Drizzle Queries (relational)
   - /docs/select - SQL Select
   - /docs/insert - SQL Insert
   - /docs/update - SQL Update
   - /docs/delete - SQL Delete
   - /docs/operators - Filter and conditional operators
   - /docs/query-utils - Query utilities
   - /docs/joins - SQL Joins
   - /docs/sql - Magic sql operator
   
   **Migrations (Drizzle Kit):**
   - /docs/kit-overview - Drizzle Kit overview
   - /docs/drizzle-kit-generate - drizzle-kit generate
   - /docs/drizzle-kit-migrate - drizzle-kit migrate
   - /docs/drizzle-kit-push - drizzle-kit push
   - /docs/drizzle-kit-pull - drizzle-kit pull
   - /docs/drizzle-kit-studio - drizzle-kit studio
   - /docs/drizzle-config-file - drizzle.config.ts configuration
   - /docs/kit-custom-migrations - Custom migrations
   - /docs/kit-migrations-for-teams - Migrations for teams
   
   **Seeding:**
   - /docs/seed-overview - Drizzle Seed overview
   - /docs/seed-functions - Generators
   - /docs/seed-versioning - Versioning
   
   **Advanced:**
   - /docs/transactions - Transactions
   - /docs/batch-api - Batch API
   - /docs/cache - Caching
   - /docs/dynamic-query-building - Dynamic query building
   - /docs/read-replicas - Read replicas
   - /docs/rls - Row-Level Security (RLS)
   - /docs/set-operations - Set operations (UNION, INTERSECT, EXCEPT)
   - /docs/generated-columns - Generated columns
   - /docs/custom-types - Custom types
   
   **Performance:**
   - /docs/perf-queries - Query performance
   - /docs/perf-serverless - Serverless performance
   
   **Extensions & Integrations:**
   - /docs/prisma - Drizzle extension for Prisma
   - /docs/eslint-plugin - ESLint plugin
   - /docs/zod - drizzle-zod
   - /docs/typebox - drizzle-typebox
   - /docs/valibot - drizzle-valibot
   - /docs/arktype - drizzle-arktype
   - /docs/graphql - drizzle-graphql
   
   **Guides:**
   - /docs/guides - All guides index
   - /docs/guides/conditional-filters-in-query - Conditional filters
   - /docs/guides/upsert - Upsert queries
   - /docs/guides/limit-offset-pagination - Pagination
   - /docs/guides/cursor-based-pagination - Cursor pagination
   - /docs/guides/vector-similarity-search - pgvector search
   - /docs/guides/postgresql-full-text-search - Full-text search

3. Fetch multiple relevant pages in parallel using WebFetch.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user set up Drizzle with PostgreSQL:

```
Task tool prompt:

You are researching Drizzle ORM documentation to help with a specific task.

## Your Research Goal
Find complete instructions for setting up Drizzle ORM with PostgreSQL (Neon), including schema definition, migrations, and basic CRUD operations.

## Context
A user wants to add Drizzle ORM to their TypeScript project. They need end-to-end setup including schema definition, running migrations with drizzle-kit, and performing queries.

## Specific Questions to Answer
1. How do you install Drizzle ORM and drizzle-kit?
2. How do you configure the database connection for Neon Postgres?
3. How do you define a schema with tables and relations?
4. How do you generate and run migrations with drizzle-kit?
5. How do you perform basic CRUD operations?

## Research Process
[... standard research process ...]

## Required Output
Provide step-by-step setup instructions with all code examples. Include schema definition patterns, drizzle.config.ts setup, and query examples.
```

### Example: Setting Up Relations

```
Task tool prompt:

You are researching Drizzle ORM documentation to help with a specific task.

## Your Research Goal
Understand how to define and query relations between tables in Drizzle ORM, including one-to-many and many-to-many relationships.

## Context
A user is building a blog application and needs to understand how to set up relations between users, posts, and tags tables.

## Specific Questions to Answer
1. How do you define one-to-many relations in Drizzle schema?
2. How do you define many-to-many relations with junction tables?
3. How do you query related data using Drizzle's relational queries?
4. What's the difference between relations() and soft relations?
5. How do you use the `with` clause for nested queries?

## Research Process
[... standard research process ...]

## Required Output
Provide schema examples for relations, query patterns for fetching related data, and best practices for structuring relational schemas.
```

### Example: Migrations Workflow

```
Task tool prompt:

You are researching Drizzle ORM documentation to help with a specific task.

## Your Research Goal
Learn the complete migration workflow with drizzle-kit, including generating migrations, applying them, and handling team collaboration.

## Context
A user needs to set up a proper migration workflow for a production application with multiple developers.

## Specific Questions to Answer
1. How do you configure drizzle.config.ts?
2. What's the difference between `push` and `migrate`?
3. How do you generate SQL migration files?
4. How do you handle migrations in a team environment?
5. How do you use drizzle-kit studio for database inspection?

## Research Process
[... standard research process ...]

## Required Output
Provide complete drizzle-kit setup guide with configuration examples, CLI commands, and team workflow best practices.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: Common Topics

| Topic | Key Docs |
|-------|----------|
| Getting Started | `/docs/get-started`, `/docs/overview` |
| PostgreSQL | `/docs/get-started-postgresql`, `/docs/column-types/pg` |
| MySQL | `/docs/get-started-mysql`, `/docs/column-types/mysql` |
| SQLite | `/docs/get-started-sqlite`, `/docs/column-types/sqlite` |
| Schema Definition | `/docs/sql-schema-declaration`, `/docs/indexes-constraints` |
| Relations | `/docs/relations-v2`, `/docs/relations-schema-declaration` |
| Queries | `/docs/rqb-v2`, `/docs/select`, `/docs/insert`, `/docs/update`, `/docs/delete` |
| Operators | `/docs/operators`, `/docs/sql` |
| Joins | `/docs/joins` |
| Migrations | `/docs/kit-overview`, `/docs/drizzle-kit-generate`, `/docs/drizzle-kit-migrate` |
| Config | `/docs/drizzle-config-file` |
| Transactions | `/docs/transactions` |
| RLS | `/docs/rls` |
| Seeding | `/docs/seed-overview`, `/docs/seed-functions` |
| Zod Integration | `/docs/zod` |
| Performance | `/docs/perf-queries`, `/docs/perf-serverless` |

## Supported Database Providers

| Provider | Get Started Doc |
|----------|-----------------|
| PostgreSQL (node-postgres) | `/docs/get-started/postgresql-new` |
| Neon | `/docs/get-started/neon-new` |
| Supabase | `/docs/get-started/supabase-new` |
| Vercel Postgres | `/docs/get-started/vercel-new` |
| PlanetScale | `/docs/get-started/planetscale-new` |
| MySQL | `/docs/get-started/mysql-new` |
| TiDB | `/docs/get-started/tidb-new` |
| SQLite | `/docs/get-started/sqlite-new` |
| Turso | `/docs/get-started/turso-new` |
| Cloudflare D1 | `/docs/get-started/d1-new` |
| Bun SQLite | `/docs/get-started/bun-sqlite-new` |
| Expo SQLite | `/docs/get-started/expo-new` |
| PGlite | `/docs/get-started/pglite-new` |
| SingleStore | `/docs/get-started/singlestore-new` |
| MSSQL | `/docs/get-started/mssql-new` |
| CockroachDB | `/docs/get-started/cockroach-new` |
