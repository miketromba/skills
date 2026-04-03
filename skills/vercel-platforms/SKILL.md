---
name: vercel-platforms
description: Vercel for Platforms documentation and guidance for building multi-tenant and multi-project applications. Use when working with Vercel Platforms - building SaaS apps serving multiple tenants with custom domains, AI coding platforms, or any platform deploying multiple projects. Triggers on questions about multi-tenant architecture, multi-project platforms, wildcard domains, custom domains on Vercel, tenant middleware, Vercel SDK for platforms, platform elements, deploy actions, vibe coding platforms, or ANY Vercel Platforms-related development tasks.
---

# Vercel for Platforms

Vercel for Platforms enables building platforms that serve multiple customers. It offers two approaches: Multi-Tenant (single codebase, multiple tenants with custom domains) and Multi-Project (multiple unique codebases, each with its own Vercel project). It includes platform elements like domain management components, deploy actions, and pre-built UI blocks.

## Research Process

To answer questions about Vercel for Platforms, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to Vercel Platforms documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research Vercel Platforms docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching Vercel for Platforms documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. First, fetch the full documentation:
   URL: https://vercel.com/platforms/llms.txt

   This is a comprehensive document containing ALL Vercel for Platforms documentation
   in a single file. It includes full page content organized by product area
   (Multi-Tenant, Multi-Project, Platform Elements).

   Unlike typical llms.txt files that list links, this one contains the full text
   of every doc page. Search through it for the relevant sections.

2. The documentation covers these product areas:

   **Overview:**
   - Platform overview and architecture comparison
   - Multi-Tenant vs Multi-Project decision guide
   - What you can build (website builders, e-commerce, SaaS, AI platforms)

   **Multi-Tenant (single codebase, multiple tenants):**
   - Concepts - Tenants, domains, routing, architecture
   - Quickstart - Getting started with multi-tenant apps
   - Template - Full Next.js multi-tenant starter kit
   - Middleware and Routing - Tenant resolution via middleware
   - Configuring Custom Domains - Wildcard domains, custom domains, DNS, verification
   - Configuring Custom Subpaths - Subpath-based multi-tenancy
   - Multi-tenant Preview URLs - Preview deployments for tenants
   - Serving Static Files - Static assets in multi-tenant apps
   - Reference - API reference and troubleshooting

   **Multi-Project (multiple codebases via Vercel SDK):**
   - Concepts - Projects, deployments, domains, architecture
   - Quickstart - Project creation, deployment, domain aliasing
   - OSS AI Vibe Coding Platform - Building AI coding platforms with sandboxes
   - Platform Template - Full-stack platform with AI Gateway
   - Reference - API reference, custom blocks, troubleshooting

   **Platform Elements (pre-built components and actions):**

   Actions (server-side operations):
   - Add Custom Domain - Programmatic domain management
   - Deploy Files - File-based deployments

   Blocks (React UI components):
   - Claim Deployment - Deployment claiming flow
   - Custom Domain - Domain configuration UI
   - Deploy Popover - Deployment trigger UI
   - DNS Table - DNS record display
   - Report Abuse - Abuse reporting

   **Examples:**
   - Multi-Tenant Template (Platforms Starter Kit)
   - OSS AI Vibe Coding Platform
   - Platform Template with AI Gateway
   - Next.js App Router multi-tenant setup
   - Domain connect component

3. For additional Vercel SDK details referenced in the docs, you may also fetch:
   - https://vercel.com/docs/sdk (Vercel SDK overview)
   - https://vercel.com/docs/rest-api (REST API reference)

4. Since the llms.txt contains full content, search through the fetched document
   for relevant sections rather than fetching individual pages.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user build a multi-tenant SaaS app:

```
Task tool prompt:

You are researching Vercel for Platforms documentation to help with a specific task.

## Your Research Goal
Find complete instructions for building a multi-tenant SaaS application on Vercel with wildcard subdomains and custom domain support.

## Context
A user wants to build a platform where each customer gets their own subdomain (customer.app.com) and can optionally connect a custom domain (customer.com), all served from a single Next.js codebase.

## Specific Questions to Answer
1. How do you set up middleware for tenant resolution by hostname?
2. How do you configure wildcard domains on Vercel?
3. How do you allow tenants to add custom domains programmatically?
4. How do you verify domain ownership?
5. How do you handle routing and data isolation per tenant?

## Research Process
1. Fetch https://vercel.com/platforms/llms.txt for the full documentation
2. Focus on the Multi-Tenant sections: Concepts, Middleware and Routing, Configuring Custom Domains
3. Also review the Multi-Tenant Template for a complete implementation example

## Required Output
Provide step-by-step implementation instructions with all code examples for middleware, domain configuration, and tenant-aware routing.
```

### Example: Building an AI Coding Platform

```
Task tool prompt:

You are researching Vercel for Platforms documentation to help with a specific task.

## Your Research Goal
Understand how to build an AI-powered coding platform using Vercel's Multi-Project architecture with sandboxes, file deployment, and per-user projects.

## Context
A user wants to build a platform where AI generates code and deploys it to isolated Vercel projects for each user, similar to v0 or Replit.

## Specific Questions to Answer
1. How do you create Vercel projects programmatically via the SDK?
2. How do you deploy generated files to a project?
3. How do you set up sandboxes for code execution?
4. How do you manage domains per project?
5. How do you handle authentication and deployment claiming?

## Research Process
1. Fetch https://vercel.com/platforms/llms.txt for the full documentation
2. Focus on Multi-Project sections: Concepts, Quickstart, OSS AI Vibe Coding Platform
3. Also review Platform Elements: Deploy Files action, Claim Deployment block

## Required Output
Provide an architecture guide with code examples for project creation, file deployment, and sandbox integration.
```

### Example: Using Platform Elements

```
Task tool prompt:

You are researching Vercel for Platforms documentation to help with a specific task.

## Your Research Goal
Learn how to use Vercel's pre-built Platform Elements (Actions and Blocks) to add domain management and deployment UI to a platform.

## Context
A user is building a platform and wants to embed Vercel's ready-made UI components for custom domain configuration, deployment, and DNS management.

## Specific Questions to Answer
1. What Platform Element Actions are available and how do you use them?
2. How do you use the Custom Domain block for domain configuration UI?
3. How do you use the Deploy Files action for programmatic deployments?
4. How do you use the Deploy Popover for one-click deployment?
5. How do you integrate the DNS Table and domain verification?

## Research Process
1. Fetch https://vercel.com/platforms/llms.txt for the full documentation
2. Focus on Platform Elements sections: Add Custom Domain, Deploy Files, Custom Domain block, Deploy Popover, DNS Table

## Required Output
Provide integration guide with code examples for each Platform Element.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: Common Topics

| Topic | Section in llms.txt |
|-------|---------------------|
| Architecture Overview | Overview (Multi-Tenant vs Multi-Project comparison) |
| Multi-Tenant Concepts | Multi-Tenant > Concepts |
| Multi-Tenant Quickstart | Multi-Tenant > Quickstart |
| Middleware & Routing | Multi-Tenant > Middleware and Routing |
| Custom Domains | Multi-Tenant > Configuring Custom Domains |
| Custom Subpaths | Multi-Tenant > Configuring Custom Subpaths |
| Preview URLs | Multi-Tenant > Multi-tenant Preview URLs |
| Multi-Project Concepts | Multi-Project > Concepts |
| Multi-Project Quickstart | Multi-Project > Quickstart |
| AI Coding Platform | Multi-Project > OSS AI Vibe Coding Platform |
| Platform Template | Multi-Project > Platform Template |
| Add Domain Action | Platform Elements > Actions > Add Custom Domain |
| Deploy Files Action | Platform Elements > Actions > Deploy Files |
| Domain Config UI | Platform Elements > Blocks > Custom Domain |
| Deploy Popover UI | Platform Elements > Blocks > Deploy Popover |
| DNS Table UI | Platform Elements > Blocks > DNS Table |
| Multi-Tenant Starter | Examples > Multi-Tenant Template |

## Choosing an Approach

| Criteria | Multi-Tenant | Multi-Project |
|----------|-------------|---------------|
| Architecture | Single codebase, one deployment | Multiple codebases, multiple projects |
| Code sharing | All tenants share code | Each tenant has unique code |
| Deployment | Deploy once, all tenants update | Deploy per tenant independently |
| Isolation | Application-level | Complete (separate projects) |
| Best for | Docs platforms, SaaS dashboards, CMS | AI coding platforms, per-customer environments |

## Documentation URL

Full documentation: `https://vercel.com/platforms/llms.txt`
