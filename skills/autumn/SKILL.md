---
name: autumn
description: Autumn billing and monetization platform documentation and guidance. Use when working with Autumn - an open-source billing control layer for AI and SaaS monetization. Triggers on questions about Autumn pricing, usage-based billing, feature gating, plan management, credit systems, metered billing, subscription lifecycle, Stripe integration via Autumn, check/track API, customer balances, entities, React billing hooks, CLI config, or ANY Autumn-related development tasks.
---

# Autumn

Autumn is a drop-in, open-source control layer for AI and SaaS monetization. It provides feature gating (check), usage tracking (track), plan management, subscription lifecycle handling, credit systems, usage-based pricing, and integrates with Stripe under the hood. It includes a REST API, CLI, React hooks, and a dashboard.

## Research Process

To answer questions about Autumn, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to Autumn documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research Autumn docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching Autumn billing platform documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. First, fetch the documentation index to see all available pages:
   URL: https://docs.useautumn.com/llms.txt

   This index lists every documentation page with a short description.
   Doc pages use markdown URLs in the format: https://docs.useautumn.com/{path}.md

2. Based on the questions above, identify and fetch the most relevant documentation. The docs are organized by topic:

   **Getting Started:**
   - /welcome.md - Introduction to Autumn
   - /documentation/getting-started/setup.md - Setup and payments
   - /documentation/getting-started/gating.md - Checking and tracking usage
   - /documentation/getting-started/display-billing.md - Build your billing page
   - /documentation/getting-started/deploy.md - Deploy to production checklist
   - /documentation/getting-started/migration.md - Migrating existing Stripe customers

   **Core Concepts:**
   - /documentation/concepts/overview.md - How features, plans, subscriptions, and balances fit together
   - /documentation/concepts/features.md - Features
   - /documentation/concepts/plans.md - Plans
   - /documentation/concepts/plan-items.md - Plan items (what customers get access to)
   - /documentation/concepts/balances.md - Feature balances
   - /documentation/concepts/subscriptions.md - Subscriptions
   - /documentation/concepts/stripe.md - How Autumn syncs with Stripe

   **Customer Management:**
   - /documentation/customers/creating-customers.md - Creating customers
   - /documentation/customers/managing-customers.md - Managing customers
   - /documentation/customers/check.md - Checking feature access
   - /documentation/customers/tracking-usage.md - Tracking usage
   - /documentation/customers/managing-balances.md - Managing balances
   - /documentation/customers/balance-locking.md - Balance locking (reserve/confirm/release)
   - /documentation/customers/billing-controls.md - Overage behavior, spend limits, alerts, auto top-ups
   - /documentation/customers/subscription-lifecycle.md - Upgrades, downgrades, cancellations
   - /documentation/customers/updating-subscriptions.md - Modifying subscriptions
   - /documentation/customers/payment-flow.md - Hosted checkout vs custom payment flow
   - /documentation/customers/custom-plans.md - One-off plan variations
   - /documentation/customers/feature-entities.md - Per-entity balance tracking
   - /documentation/customers/versioning.md - Plan versioning and migrations
   - /documentation/customers/edge-cases.md - 3DS, payment failures, reliability

   **Pricing Models:**
   - /documentation/modelling-pricing/recurring.md - Recurring plans with allowances
   - /documentation/modelling-pricing/usage-based-pricing.md - Usage-based billing
   - /documentation/modelling-pricing/credit-systems.md - Credit systems
   - /documentation/modelling-pricing/prepaid-pricing.md - Prepaid pricing
   - /documentation/modelling-pricing/per-unit-pricing.md - Per-unit (seats, workspaces)
   - /documentation/modelling-pricing/graduated-pricing.md - Tiered pricing
   - /documentation/modelling-pricing/volume-based-tiers.md - Volume-based tiers
   - /documentation/modelling-pricing/free-plans.md - Free tiers
   - /documentation/modelling-pricing/trials.md - Trial periods
   - /documentation/modelling-pricing/add-ons.md - Add-on plans
   - /documentation/modelling-pricing/one-off-purchases.md - One-time purchases
   - /documentation/modelling-pricing/rollovers.md - Balance rollovers
   - /documentation/modelling-pricing/auto-top-ups.md - Auto top-ups
   - /documentation/modelling-pricing/spend-limits.md - Spend limits and usage alerts
   - /documentation/modelling-pricing/proration.md - Proration
   - /documentation/modelling-pricing/rewards.md - Rewards and referrals
   - /documentation/modelling-pricing/sub-entity-balances.md - Sub-entity balances
   - /documentation/modelling-pricing/sub-entity-plans.md - Sub-entity plans

   **API Reference:**

   Core:
   - /api-reference/core/check.md - Check permissions (feature access)
   - /api-reference/core/track.md - Track usage

   Billing:
   - /api-reference/billing/attach.md - Attach plan to customer
   - /api-reference/billing/billingUpdate.md - Update subscription
   - /api-reference/billing/multiAttach.md - Attach multiple plans
   - /api-reference/billing/previewAttach.md - Preview attach changes
   - /api-reference/billing/previewMultiAttach.md - Preview multi-attach
   - /api-reference/billing/previewUpdate.md - Preview subscription update
   - /api-reference/billing/createSchedule.md - Multi-phase subscription schedule
   - /api-reference/billing/openCustomerPortal.md - Customer billing portal
   - /api-reference/billing/setupPayment.md - Payment setup session

   Customers:
   - /api-reference/customers/getOrCreateCustomer.md - Get or create customer
   - /api-reference/customers/getCustomer.md - Get customer
   - /api-reference/customers/listCustomers.md - List customers
   - /api-reference/customers/updateCustomer.md - Update customer
   - /api-reference/customers/deleteCustomer.md - Delete customer

   Balances:
   - /api-reference/balances/createBalance.md - Create balance
   - /api-reference/balances/updateBalance.md - Update balance
   - /api-reference/balances/deleteBalance.md - Delete balance
   - /api-reference/balances/finalizeLock.md - Finalize lock (confirm/release)

   Entities:
   - /api-reference/entities/createEntity.md - Create entity
   - /api-reference/entities/getEntity.md - Get entity
   - /api-reference/entities/listEntities.md - List entities
   - /api-reference/entities/updateEntity.md - Update entity
   - /api-reference/entities/deleteEntity.md - Delete entity

   Events:
   - /api-reference/events/listEvents.md - List usage events
   - /api-reference/events/aggregateEvents.md - Aggregate events by time period

   Features & Plans:
   - /api-reference/features/createFeature.md - Create feature
   - /api-reference/features/listFeatures.md - List features
   - /api-reference/features/getFeature.md - Get feature
   - /api-reference/features/updateFeature.md - Update feature
   - /api-reference/features/deleteFeature.md - Delete feature
   - /api-reference/plans/createPlan.md - Create plan
   - /api-reference/plans/listPlans.md - List plans
   - /api-reference/plans/getPlan.md - Get plan
   - /api-reference/plans/updatePlan.md - Update plan
   - /api-reference/plans/deletePlan.md - Delete plan

   Referrals & Rewards:
   - /api-reference/referrals/createReferralCode.md - Create referral code
   - /api-reference/referrals/redeemReferralCode.md - Redeem referral code
   - /api-reference/rewards/redeemRewardCode.md - Redeem reward code

   Platform (multi-tenant):
   - /api-reference/platform/overview.md - Platform overview
   - /api-reference/platform/create-organization.md - Create organization
   - /api-reference/platform/list-orgs.md - List organizations
   - /api-reference/platform/list-users.md - List users
   - /api-reference/platform/oauth-url.md - Stripe OAuth URL
   - /api-reference/platform/update-stripe.md - Update connected Stripe account

   Webhooks:
   - /api-reference/webhooks/balancesLimitReached.md - Limit reached
   - /api-reference/webhooks/balancesUsageAlertTriggered.md - Usage alert triggered
   - /api-reference/webhooks/billingAutoTopupSucceeded.md - Auto top-up succeeded
   - /api-reference/webhooks/billingUpdated.md - Plans updated

   **React Hooks:**
   - /react/hooks/introduction.md - How React hooks work
   - /react/hooks/autumn-provider.md - AutumnProvider component
   - /react/hooks/autumn-handler.md - Server-side handler
   - /react/hooks/useCustomer.md - Access customer state
   - /react/hooks/useEntity.md - Access entity state
   - /react/hooks/useListPlans.md - Fetch available plans
   - /react/hooks/useAggregateEvents.md - Usage timeseries charts
   - /react/hooks/useListEvents.md - List/paginate events
   - /react/hooks/useReferrals.md - Referral codes

   **CLI:**
   - /cli/getting-started.md - Install, authenticate, sync config
   - /cli/commands.md - Command reference
   - /cli/config.md - autumn.config.ts reference

   **Examples:**
   - /examples/entity-balances.md - Entity-level balances
   - /examples/monetary-credits.md - Monetary credits
   - /examples/pay-as-you-go-overages.md - Pay-as-you-go overages
   - /examples/per-seat.md - Per-seat pricing
   - /examples/prepaid.md - One-time top-ups
   - /examples/trial-card-not-required.md - Trial without card
   - /examples/trial-card-required.md - Trial with card required

   **Other:**
   - /documentation/webhooks.md - Webhooks overview
   - /documentation/fail-open.md - Fail-open defaults
   - /documentation/rate-limits.md - API rate limits
   - /documentation/slack-discord-notifications.md - Slack/Discord notifications
   - /documentation/external-providers/convex.md - Convex integration
   - /documentation/external-providers/revenuecat.md - RevenueCat integration
   - /documentation/external-providers/vercel-marketplace.md - Vercel Marketplace

3. Fetch multiple relevant pages in parallel using WebFetch.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user set up usage-based billing:

```
Task tool prompt:

You are researching Autumn billing platform documentation to help with a specific task.

## Your Research Goal
Find complete instructions for implementing usage-based billing with Autumn, including feature setup, usage tracking, and pricing configuration.

## Context
A user wants to charge customers based on API call usage with a free tier allowance and per-unit overage pricing.

## Specific Questions to Answer
1. How do you create a feature for tracking API calls?
2. How do you set up a plan with included allowance and overage pricing?
3. How do you track usage with the track API?
4. How do you check if a customer has remaining balance?
5. How do you handle the billing page and customer portal?

## Research Process
1. First fetch https://docs.useautumn.com/llms.txt for the documentation index
2. Fetch /documentation/getting-started/setup.md and /documentation/getting-started/gating.md
3. Fetch /documentation/modelling-pricing/usage-based-pricing.md and /documentation/modelling-pricing/recurring.md
4. Fetch /api-reference/core/check.md and /api-reference/core/track.md

## Required Output
Provide step-by-step implementation instructions with code examples for feature creation, plan setup, usage tracking, and access checking.
```

### Example: Credit System Implementation

```
Task tool prompt:

You are researching Autumn billing platform documentation to help with a specific task.

## Your Research Goal
Understand how to implement a credit-based billing system where customers purchase credits and different features consume different amounts.

## Context
A user is building an AI platform where customers buy credits and each API call (image generation, text generation, etc.) costs a different number of credits.

## Specific Questions to Answer
1. How do you set up a credit system in Autumn?
2. How do you configure different features to consume different credit amounts?
3. How do you handle prepaid credit purchases and top-ups?
4. How do you check and track credit usage?
5. How do you display remaining credits to users?

## Research Process
1. First fetch https://docs.useautumn.com/llms.txt for the index
2. Fetch /documentation/modelling-pricing/credit-systems.md
3. Fetch /documentation/modelling-pricing/prepaid-pricing.md and /documentation/modelling-pricing/auto-top-ups.md
4. Fetch /examples/monetary-credits.md and /examples/prepaid.md

## Required Output
Provide a complete credit system implementation guide with configuration and code examples.
```

### Example: React Integration

```
Task tool prompt:

You are researching Autumn billing platform documentation to help with a specific task.

## Your Research Goal
Learn how to integrate Autumn's React hooks to display billing information, usage data, and plan selection in a Next.js application.

## Context
A user wants to build a billing page showing current plan, usage, and upgrade options using Autumn's React SDK.

## Specific Questions to Answer
1. How do you set up AutumnProvider and the server handler?
2. How do you use useCustomer to show current plan and balance?
3. How do you use useListPlans for plan selection UI?
4. How do you use useAggregateEvents for usage charts?
5. How do you trigger plan changes from the frontend?

## Research Process
1. First fetch https://docs.useautumn.com/llms.txt for the index
2. Fetch /react/hooks/introduction.md, /react/hooks/autumn-provider.md, /react/hooks/autumn-handler.md
3. Fetch /react/hooks/useCustomer.md, /react/hooks/useListPlans.md, /react/hooks/useAggregateEvents.md

## Required Output
Provide a React integration guide with component examples for billing UI.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: Common Topics

| Topic | Key Docs |
|-------|----------|
| Getting Started | `/welcome`, `/documentation/getting-started/setup` |
| Core Concepts | `/documentation/concepts/overview`, `/documentation/concepts/features` |
| Check Access | `/api-reference/core/check`, `/documentation/customers/check` |
| Track Usage | `/api-reference/core/track`, `/documentation/customers/tracking-usage` |
| Attach Plan | `/api-reference/billing/attach` |
| Subscriptions | `/documentation/customers/subscription-lifecycle` |
| Usage-Based Pricing | `/documentation/modelling-pricing/usage-based-pricing` |
| Credit Systems | `/documentation/modelling-pricing/credit-systems` |
| Per-Seat Pricing | `/documentation/modelling-pricing/per-unit-pricing` |
| Trials | `/documentation/modelling-pricing/trials` |
| Entities | `/documentation/customers/feature-entities` |
| Balance Locking | `/documentation/customers/balance-locking` |
| React Hooks | `/react/hooks/introduction` |
| CLI | `/cli/getting-started`, `/cli/config` |
| Webhooks | `/documentation/webhooks` |
| Stripe Sync | `/documentation/concepts/stripe` |
| Migration | `/documentation/getting-started/migration` |

## Core API Endpoints

| Endpoint | Description |
|----------|-------------|
| `POST /check` | Check if customer has access to a feature |
| `POST /track` | Record usage for a customer feature |
| `POST /attach` | Attach a plan to a customer |
| `POST /billing/update` | Update an existing subscription |
| `GET /customers/:id` | Get customer with balances and subscriptions |
| `POST /customers` | Get or create a customer |
| `POST /balances` | Create a balance |
| `POST /balances/finalize-lock` | Confirm or release a locked balance |

## Documentation URL

Main documentation index: `https://docs.useautumn.com/llms.txt`
