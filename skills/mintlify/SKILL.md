---
name: mintlify
description: Mintlify documentation platform guidance. Use when working with Mintlify - an AI-native documentation platform for creating, deploying, and optimizing developer docs. Triggers on questions about Mintlify setup, docs.json configuration, MDX components, API playground, OpenAPI integration, navigation, themes, custom domains, deployment, web editor, AI assistant, llms.txt, MCP, analytics, or ANY Mintlify-related documentation tasks.
---

# Mintlify

Mintlify is an AI-native documentation platform that provides beautiful developer docs with an interactive API playground, AI-powered assistant, web editor, analytics, and integrations with Git providers, analytics platforms, and support tools.

## Research Process

To answer questions about Mintlify, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to Mintlify documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research Mintlify docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching Mintlify documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. First, fetch the documentation index to see all available pages:
   URL: https://www.mintlify.com/docs/llms.txt

   This index lists every documentation page with a short description.
   Doc pages use markdown URLs in the format: https://www.mintlify.com/docs/{path}.md

2. Based on the questions above, identify and fetch the most relevant documentation. The docs are organized by topic:

   **Getting Started:**
   - /docs/index.md - Introduction
   - /docs/what-is-mintlify.md - Platform overview
   - /docs/quickstart.md - Deploy and make your first change
   - /docs/installation.md - CLI installation for local preview
   - /docs/migration.md - Migrating from other platforms

   **Global Settings (docs.json):**
   - /docs/organize/settings.md - Global configuration reference
   - /docs/organize/settings-reference.md - Complete docs.json schema
   - /docs/organize/settings-appearance.md - Theme, colors, logo, fonts
   - /docs/organize/settings-structure.md - Navbar, navigation, footer, banner
   - /docs/organize/settings-api.md - API playground and OpenAPI config
   - /docs/organize/settings-seo.md - SEO and search settings
   - /docs/organize/settings-integrations.md - Third-party integrations config

   **Pages & Navigation:**
   - /docs/organize/pages.md - Page metadata and frontmatter
   - /docs/organize/navigation.md - Information architecture
   - /docs/organize/hidden-pages.md - Hidden pages
   - /docs/organize/mintignore.md - Exclude files from publishing

   **Content Creation:**
   - /docs/create/text.md - Text formatting and headers
   - /docs/create/code.md - Code blocks and syntax highlighting
   - /docs/create/image-embeds.md - Images, videos, iframes
   - /docs/create/list-table.md - Lists and tables
   - /docs/create/files.md - Static assets
   - /docs/create/reusable-snippets.md - Reusable content snippets
   - /docs/create/redirects.md - Redirect configuration
   - /docs/create/changelogs.md - Changelogs with RSS
   - /docs/create/personalization.md - Personalized content

   **Components:**
   - /docs/components/index.md - Component library overview
   - /docs/components/accordions.md - Accordions
   - /docs/components/callouts.md - Callouts (Note, Warning, Tip, etc.)
   - /docs/components/cards.md - Cards and card groups
   - /docs/components/code-groups.md - Tabbed code examples
   - /docs/components/steps.md - Step-by-step procedures
   - /docs/components/tabs.md - Tabbed content
   - /docs/components/expandables.md - Expandable sections
   - /docs/components/fields.md - API parameter fields
   - /docs/components/responses.md - API response fields
   - /docs/components/mermaid-diagrams.md - Mermaid diagrams
   - /docs/components/badge.md - Badges
   - /docs/components/banner.md - Site-wide banners
   - /docs/components/columns.md - Grid layouts
   - /docs/components/frames.md - Image frames
   - /docs/components/icons.md - Icons
   - /docs/components/tooltips.md - Tooltips
   - /docs/components/tree.md - File tree display
   - /docs/components/view.md - Multi-view content

   **API Playground & Documentation:**
   - /docs/api-playground/overview.md - Interactive API playground
   - /docs/api-playground/openapi-setup.md - OpenAPI spec integration
   - /docs/api-playground/asyncapi-setup.md - AsyncAPI/WebSocket docs
   - /docs/api-playground/mdx-setup.md - Manual API pages with MDX
   - /docs/api-playground/adding-sdk-examples.md - SDK code samples
   - /docs/api-playground/complex-data-types.md - oneOf, anyOf, allOf schemas
   - /docs/api-playground/multiple-responses.md - Multiple response variations
   - /docs/api-playground/managing-page-visibility.md - Endpoint visibility
   - /docs/api-playground/troubleshooting.md - API page troubleshooting

   **Deployment & Hosting:**
   - /docs/deploy/deployments.md - Deployment management
   - /docs/deploy/github.md - GitHub integration
   - /docs/deploy/gitlab.md - GitLab integration
   - /docs/deploy/ghes.md - GitHub Enterprise Server
   - /docs/deploy/preview-deployments.md - PR preview URLs
   - /docs/deploy/ci.md - CI checks (broken links, linting)
   - /docs/deploy/monorepo.md - Monorepo setup
   - /docs/deploy/authentication-setup.md - Authentication for private docs
   - /docs/deploy/docs-subpath.md - Hosting at /docs subpath
   - /docs/deploy/vercel.md - Vercel integration
   - /docs/deploy/cloudflare.md - Cloudflare Workers
   - /docs/deploy/reverse-proxy.md - Custom reverse proxy
   - /docs/deploy/route53-cloudfront.md - AWS Route 53 + CloudFront
   - /docs/deploy/csp-configuration.md - Content Security Policy

   **Customization:**
   - /docs/customize/custom-domain.md - Custom domain setup
   - /docs/customize/themes.md - Theme configuration
   - /docs/customize/fonts.md - Custom fonts
   - /docs/customize/custom-scripts.md - Custom JS and CSS
   - /docs/customize/react-components.md - Custom React components
   - /docs/customize/custom-404-page.md - Custom 404 page

   **AI Features:**
   - /docs/ai-native.md - AI-native documentation overview
   - /docs/ai/assistant.md - AI-powered chat assistant
   - /docs/ai/llmstxt.md - llms.txt generation
   - /docs/ai/skillmd.md - skill.md generation
   - /docs/ai/model-context-protocol.md - MCP server
   - /docs/ai/contextual-menu.md - AI tool integrations menu
   - /docs/ai/markdown-export.md - Markdown export for AI tools
   - /docs/ai/discord.md - Discord bot
   - /docs/ai/slack-bot.md - Slack bot

   **Agent (automated doc updates):**
   - /docs/agent/index.md - Agent overview
   - /docs/agent/customize.md - Agent behavior configuration
   - /docs/agent/effective-prompts.md - Writing effective prompts
   - /docs/agent/slack.md - Agent in Slack
   - /docs/agent/workflows.md - Automated workflows
   - /docs/agent/use-cases.md - Agent use cases

   **Web Editor:**
   - /docs/editor/index.md - Web editor overview
   - /docs/editor/pages.md - Creating and editing pages
   - /docs/editor/navigation.md - Visual navigation editor
   - /docs/editor/collaborate.md - Collaboration features
   - /docs/editor/comments.md - Comments
   - /docs/editor/suggestions.md - Suggestions
   - /docs/editor/publish.md - Publishing changes
   - /docs/editor/live-preview.md - Live preview
   - /docs/editor/media.md - Media management

   **Analytics & Optimization:**
   - /docs/optimize/analytics.md - Documentation analytics
   - /docs/optimize/feedback.md - User feedback
   - /docs/optimize/seo.md - SEO optimization
   - /docs/optimize/pdf-exports.md - PDF export

   **Integrations:**
   - /docs/integrations/analytics/overview.md - Analytics integrations
   - /docs/integrations/analytics/google-analytics.md - Google Analytics
   - /docs/integrations/analytics/posthog.md - PostHog
   - /docs/integrations/analytics/amplitude.md - Amplitude
   - /docs/integrations/analytics/mixpanel.md - Mixpanel
   - /docs/integrations/analytics/segment.md - Segment
   - /docs/integrations/support/overview.md - Support integrations
   - /docs/integrations/support/intercom.md - Intercom
   - /docs/integrations/support/front.md - Front
   - /docs/integrations/sdks/speakeasy.md - Speakeasy SDK samples
   - /docs/integrations/sdks/stainless.md - Stainless SDK samples
   - /docs/integrations/privacy/overview.md - Privacy integrations

   **Dashboard & Admin:**
   - /docs/dashboard/roles.md - Team roles and permissions
   - /docs/dashboard/permissions.md - Deployment permissions
   - /docs/dashboard/audit-logs.md - Audit logs
   - /docs/dashboard/sso.md - Single sign-on (SAML/OIDC)
   - /docs/dashboard/security-contact.md - Security contact

   **Mintlify API:**
   - /docs/api/introduction.md - API overview
   - /docs/api/update/trigger.md - Trigger deployment
   - /docs/api/update/status.md - Get deployment status
   - /docs/api/agent/v2/create-agent-job.md - Create agent job
   - /docs/api/agent/v2/get-agent-job.md - Get agent job status
   - /docs/api/agent/v2/send-message.md - Send agent follow-up
   - /docs/api/analytics/assistant-conversations.md - Get assistant conversations
   - /docs/api/analytics/feedback.md - Get feedback data
   - /docs/api/assistant/create-assistant-message-v2.md - Create assistant message
   - /docs/api/assistant/search.md - Search documentation

   **Guides:**
   - /docs/guides/index.md - Guides overview
   - /docs/guides/developer-documentation.md - Developer docs best practices
   - /docs/guides/content-types.md - Choosing content types
   - /docs/guides/content-templates.md - Ready-to-use templates
   - /docs/guides/style-and-tone.md - Style and tone guidelines
   - /docs/guides/navigation.md - Navigation design
   - /docs/guides/seo.md - SEO guide
   - /docs/guides/geo.md - AI search optimization (GEO)
   - /docs/guides/internationalization.md - Multi-language docs
   - /docs/guides/cursor.md - Cursor integration
   - /docs/guides/claude-code.md - Claude Code integration
   - /docs/guides/windsurf.md - Windsurf integration
   - /docs/guides/automate-agent.md - Automating agent updates
   - /docs/guides/assistant-embed.md - Embedding AI assistant
   - /docs/guides/custom-frontend.md - Headless docs with custom frontend
   - /docs/guides/maintenance.md - Documentation maintenance

3. Fetch multiple relevant pages in parallel using WebFetch.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user set up Mintlify docs:

```
Task tool prompt:

You are researching Mintlify documentation to help with a specific task.

## Your Research Goal
Find complete instructions for setting up a new Mintlify documentation site with custom branding, navigation, and OpenAPI integration.

## Context
A user wants to create developer documentation for their API using Mintlify, with custom domain, theming, and an interactive API playground powered by their OpenAPI spec.

## Specific Questions to Answer
1. How do you initialize a new Mintlify docs project?
2. How do you configure docs.json for navigation, theming, and branding?
3. How do you set up the API playground with an OpenAPI spec?
4. How do you configure a custom domain?
5. How do you deploy via GitHub integration?

## Research Process
1. First fetch https://www.mintlify.com/docs/llms.txt for the documentation index
2. Then fetch quickstart, settings, and API playground docs
3. Also fetch deployment and custom domain docs

## Required Output
Provide step-by-step setup instructions with all configuration examples. Include docs.json configuration, OpenAPI setup, and deployment steps.
```

### Example: Configuring the AI Assistant

```
Task tool prompt:

You are researching Mintlify documentation to help with a specific task.

## Your Research Goal
Understand how to set up and customize the AI assistant, llms.txt generation, and MCP server for a Mintlify documentation site.

## Context
A user wants to enable AI-powered features on their docs site so users can ask questions and AI tools can consume the documentation.

## Specific Questions to Answer
1. How do you enable and configure the AI assistant?
2. How does llms.txt and llms-full.txt generation work?
3. How do you set up the MCP server for AI tool integrations?
4. How do you configure the contextual AI menu?
5. How do you embed the assistant in an external application?

## Research Process
1. First fetch https://www.mintlify.com/docs/llms.txt for the index
2. Fetch AI feature docs: /docs/ai/assistant.md, /docs/ai/llmstxt.md, /docs/ai/model-context-protocol.md, /docs/ai/contextual-menu.md
3. Fetch /docs/guides/assistant-embed.md for embedding guide

## Required Output
Provide a comprehensive guide to AI features with configuration examples and integration steps.
```

### Example: Using MDX Components

```
Task tool prompt:

You are researching Mintlify documentation to help with a specific task.

## Your Research Goal
Learn how to use Mintlify's MDX component library to create rich, interactive documentation pages.

## Context
A user wants to enhance their docs with interactive elements like tabbed code examples, callouts, step-by-step guides, and expandable API parameter documentation.

## Specific Questions to Answer
1. What components are available and how do you use them?
2. How do you create tabbed code groups for multiple languages?
3. How do you document API parameters with fields and expandables?
4. How do you create step-by-step tutorials?
5. How do you build custom React components?

## Research Process
1. First fetch https://www.mintlify.com/docs/llms.txt for the index
2. Fetch component docs: /docs/components/index.md, /docs/components/code-groups.md, /docs/components/callouts.md, /docs/components/steps.md, /docs/components/fields.md, /docs/components/expandables.md, /docs/components/tabs.md
3. Fetch /docs/customize/react-components.md for custom components

## Required Output
Provide a component usage guide with MDX syntax examples for each component type.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs

## Quick Reference: Common Topics

| Topic | Key Docs |
|-------|----------|
| Getting Started | `/docs/quickstart`, `/docs/installation`, `/docs/what-is-mintlify` |
| Configuration | `/docs/organize/settings`, `/docs/organize/settings-reference` |
| Appearance | `/docs/organize/settings-appearance`, `/docs/customize/themes` |
| Navigation | `/docs/organize/navigation`, `/docs/organize/settings-structure` |
| Pages | `/docs/organize/pages`, `/docs/create/text` |
| Components | `/docs/components/index`, see individual component pages |
| API Playground | `/docs/api-playground/overview`, `/docs/api-playground/openapi-setup` |
| Deployment | `/docs/deploy/deployments`, `/docs/deploy/github` |
| Custom Domain | `/docs/customize/custom-domain` |
| AI Assistant | `/docs/ai/assistant`, `/docs/ai/llmstxt` |
| Agent | `/docs/agent/index`, `/docs/agent/workflows` |
| Web Editor | `/docs/editor/index`, `/docs/editor/pages` |
| Analytics | `/docs/optimize/analytics`, `/docs/optimize/feedback` |
| SEO | `/docs/optimize/seo`, `/docs/organize/settings-seo` |
| Integrations | `/docs/integrations/analytics/overview`, `/docs/integrations/support/overview` |
| Migration | `/docs/migration` |

## Documentation URL

Main documentation index: `https://www.mintlify.com/docs/llms.txt`
