---
name: loops
description: Loops email platform for SaaS documentation and guidance. Use when working with Loops - an email platform for sending transactional, marketing, and lifecycle emails. Triggers on questions about Loops API, contacts, transactional email, campaigns, loop builder, events, mailing lists, webhooks, SDKs, SMTP, forms, integrations, deliverability, or ANY Loops-related development tasks.
---

# Loops

Loops is an email platform for SaaS, providing transactional email, automated email sequences (Loops), campaigns, contact management, events, forms, and integrations with platforms like Stripe, Clerk, Supabase, and Zapier.

## Research Process

To answer questions about Loops, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to Loops documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research Loops docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching Loops email platform documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. First, fetch the documentation index to see all available pages:
   URL: https://loops.so/docs/llms.txt

   This index lists every documentation page with a short description.
   Doc pages use markdown URLs in the format: https://loops.so/docs/{path}.md

2. Based on the questions above, identify and fetch the most relevant documentation. The docs are organized by topic:

   **Getting Started:**
   - /docs/quickstart - Quickstart guide
   - /docs/sending-domain - Setting up your sending domain
   - /docs/sending-first-email - Sending your first email
   - /docs/types-of-emails - Campaigns, Loops, and Transactional emails

   **API Reference:**
   - /docs/api-reference/intro - API introduction and authentication
   - /docs/api-reference/api-key - API key validation
   - /docs/api-reference/create-contact - Create a contact
   - /docs/api-reference/update-contact - Update or create a contact
   - /docs/api-reference/find-contact - Find a contact by email or user ID
   - /docs/api-reference/delete-contact - Delete a contact
   - /docs/api-reference/create-contact-property - Create a contact property
   - /docs/api-reference/list-contact-properties - List contact properties
   - /docs/api-reference/list-mailing-lists - List mailing lists
   - /docs/api-reference/send-event - Send an event to trigger emails
   - /docs/api-reference/send-transactional-email - Send a transactional email
   - /docs/api-reference/list-transactional-emails - List transactional emails
   - /docs/api-reference/examples - API code examples
   - /docs/api-reference/changelog - API changelog

   **SDKs:**
   - /docs/sdks - SDK overview
   - /docs/sdks/javascript - JavaScript/TypeScript SDK
   - /docs/sdks/javascript/nextjs - Next.js integration
   - /docs/sdks/nuxt - Nuxt module
   - /docs/sdks/php - PHP SDK
   - /docs/sdks/ruby - Ruby SDK

   **SMTP:**
   - /docs/smtp - Sending email over SMTP
   - /docs/smtp/django - Django SMTP setup
   - /docs/smtp/laravel - Laravel SMTP setup
   - /docs/smtp/rails - Ruby on Rails SMTP setup
   - /docs/smtp/supabase - Supabase SMTP configuration

   **Contacts:**
   - /docs/contacts/properties - Contact properties
   - /docs/contacts/mailing-lists - Mailing list management
   - /docs/contacts/filters-segments - Filters and segments
   - /docs/contacts/double-opt-in - Double opt-in
   - /docs/contacts/email-blocklist - Email blocklist
   - /docs/contacts/delete-contacts - Deleting contacts
   - /docs/contacts/export-contacts - Exporting contacts

   **Transactional Email:**
   - /docs/transactional - Transactional email overview
   - /docs/transactional/attachments - Sending attachments

   **Events:**
   - /docs/events - Events overview
   - /docs/events/properties - Event properties

   **Loop Builder:**
   - /docs/loop-builder - Loop builder overview
   - /docs/loop-builder/loop-triggers - Triggering Loops
   - /docs/loop-builder/branching-loops - Branching logic
   - /docs/loop-builder/experiments - A/B testing experiments
   - /docs/loop-builder/pausing-loops - Pausing Loops

   **Creating Emails:**
   - /docs/creating-emails/editor - Email editor
   - /docs/creating-emails/personalizing-emails - Personalization
   - /docs/creating-emails/components - Reusable components
   - /docs/creating-emails/styles - Styling emails
   - /docs/creating-emails/sending-settings - Sender settings

   **Forms:**
   - /docs/forms/simple-form - Simple embeddable form
   - /docs/forms/custom-form - Custom form endpoint

   **Webhooks:**
   - /docs/webhooks - Outgoing webhook notifications

   **Integrations:**
   - /docs/integrations - Integrations overview
   - /docs/integrations/stripe - Stripe
   - /docs/integrations/clerk - Clerk
   - /docs/integrations/supabase - Supabase
   - /docs/integrations/segment - Segment
   - /docs/integrations/zapier - Zapier
   - /docs/integrations/make - Make
   - /docs/integrations/posthog - PostHog
   - /docs/integrations/auth0 - Auth0
   - /docs/integrations/authjs - Auth.js
   - /docs/integrations/bubble - Bubble
   - /docs/integrations/webflow - Webflow
   - /docs/integrations/framer - Framer
   - /docs/integrations/incoming-webhooks - Incoming webhooks

   **Deliverability:**
   - /docs/deliverability/optimization - Deliverability optimization
   - /docs/deliverability/sending-reputation - Sender reputation
   - /docs/deliverability/improving-inbox-placement - Inbox placement tips
   - /docs/deliverability/maintaining-a-clean-list - List hygiene

   **Guides:**
   - /docs/guides/intro - Guides overview
   - /docs/guides/lifecycle-emails - Customer lifecycle emails
   - /docs/guides/onboarding-emails - Onboarding email best practices
   - /docs/guides/scheduled-digest-email - Scheduled digest emails
   - /docs/guides/bolt-emails - Sending from Bolt.new

3. For SDK-specific questions, fetch the appropriate SDK page.

4. For API code examples, fetch /docs/api-reference/examples.md and the sub-pages:
   - /docs/api-reference/examples/contacts.md - Contact management examples
   - /docs/api-reference/examples/events.md - Event sending examples
   - /docs/api-reference/examples/transactional-emails.md - Transactional email examples

5. Fetch multiple relevant pages in parallel using WebFetch.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user send transactional email:

```
Task tool prompt:

You are researching Loops email platform documentation to help with a specific task.

## Your Research Goal
Find complete instructions for sending transactional emails with the Loops API and JavaScript SDK, including template setup and dynamic data.

## Context
A user wants to send transactional emails (e.g. password reset, order confirmation) from their Next.js application using Loops.

## Specific Questions to Answer
1. How do you create a transactional email template in Loops?
2. How do you send a transactional email via the API?
3. How do you pass dynamic data variables to the template?
4. How do you send attachments with transactional emails?
5. How do you set up the JavaScript SDK in Next.js?

## Research Process
1. First fetch https://loops.so/docs/llms.txt for the documentation index
2. Then fetch the transactional email docs and SDK docs
3. Also fetch /docs/api-reference/examples/transactional-emails.md for code examples

## Required Output
Provide step-by-step integration instructions with all code examples. Include SDK setup, API usage, and error handling guidance.
```

### Example: Managing Contacts via API

```
Task tool prompt:

You are researching Loops email platform documentation to help with a specific task.

## Your Research Goal
Understand how to manage contacts programmatically with the Loops API, including creating, updating, finding, and deleting contacts, and managing mailing list subscriptions.

## Context
A user wants to sync their application's user data with Loops contacts, including adding custom properties and subscribing users to mailing lists.

## Specific Questions to Answer
1. How do you create and update contacts via the API?
2. How do you add custom contact properties?
3. How do you subscribe/unsubscribe contacts to mailing lists?
4. How do you find and delete contacts?
5. What are the rate limits and best practices?

## Research Process
1. First fetch https://loops.so/docs/llms.txt for the index
2. Fetch API reference pages for contacts: create-contact, update-contact, find-contact, delete-contact
3. Fetch /docs/contacts/properties.md and /docs/contacts/mailing-lists.md
4. Fetch /docs/api-reference/examples/contacts.md for code examples

## Required Output
Provide a comprehensive guide to contact management with code examples for each operation.
```

### Example: Setting Up Event-Triggered Emails

```
Task tool prompt:

You are researching Loops email platform documentation to help with a specific task.

## Your Research Goal
Learn how to use Loops events to trigger automated email sequences when users perform actions in an application.

## Context
A user wants to trigger onboarding emails when users sign up and send re-engagement emails when users become inactive.

## Specific Questions to Answer
1. How do events work in Loops?
2. How do you send events via the API or SDK?
3. How do you use event properties to personalize emails?
4. How do you build a Loop that triggers from an event?
5. How do you set up branching logic based on contact properties?

## Research Process
1. First fetch https://loops.so/docs/llms.txt for the index
2. Fetch /docs/events.md and /docs/events/properties.md
3. Fetch /docs/loop-builder.md, /docs/loop-builder/loop-triggers.md, /docs/loop-builder/branching-loops.md
4. Fetch /docs/api-reference/send-event.md and /docs/api-reference/examples/events.md

## Required Output
Provide an end-to-end guide for event-driven email automation with code examples and Loop builder configuration steps.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: Common Topics

| Topic | Key Docs |
|-------|----------|
| Getting Started | `/docs/quickstart`, `/docs/sending-domain`, `/docs/sending-first-email` |
| API Introduction | `/docs/api-reference/intro`, `/docs/api-reference/api-key` |
| Contacts | `/docs/api-reference/create-contact`, `/docs/contacts/properties` |
| Transactional Email | `/docs/transactional`, `/docs/api-reference/send-transactional-email` |
| Events | `/docs/events`, `/docs/api-reference/send-event` |
| Loop Builder | `/docs/loop-builder`, `/docs/loop-builder/loop-triggers` |
| Mailing Lists | `/docs/contacts/mailing-lists`, `/docs/api-reference/list-mailing-lists` |
| JavaScript SDK | `/docs/sdks/javascript`, `/docs/sdks/javascript/nextjs` |
| SMTP | `/docs/smtp`, framework-specific guides |
| Forms | `/docs/forms/simple-form`, `/docs/forms/custom-form` |
| Webhooks | `/docs/webhooks` |
| Integrations | `/docs/integrations` (Stripe, Clerk, Supabase, Zapier, etc.) |
| Deliverability | `/docs/deliverability/optimization`, `/docs/deliverability/sending-reputation` |
| Email Editor | `/docs/creating-emails/editor`, `/docs/creating-emails/personalizing-emails` |

## SDK & Integration Options

| SDK / Method | Docs |
|--------------|------|
| JavaScript/TypeScript | `/docs/sdks/javascript` |
| Next.js | `/docs/sdks/javascript/nextjs` |
| Nuxt | `/docs/sdks/nuxt` |
| PHP | `/docs/sdks/php` |
| Ruby | `/docs/sdks/ruby` |
| SMTP (Django) | `/docs/smtp/django` |
| SMTP (Laravel) | `/docs/smtp/laravel` |
| SMTP (Rails) | `/docs/smtp/rails` |
| SMTP (Supabase) | `/docs/smtp/supabase` |
| REST API | `/docs/api-reference/intro` |

## Documentation URL

Main documentation index: `https://loops.so/docs/llms.txt`
