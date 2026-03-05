---
name: openclaw
description: OpenClaw AI agent platform documentation and guidance. Use when working with OpenClaw - an open-source platform for deploying AI agents across messaging channels (Slack, Discord, Telegram, WhatsApp, iMessage, etc.). Triggers on questions about OpenClaw setup, configuration, hosting, channels, gateways, tools, plugins, multi-agent routing, sandboxing, CLI commands, deployment (Fly.io, Railway, Render, Docker), or ANY OpenClaw-related development tasks.
---

# OpenClaw

OpenClaw is an open-source platform for deploying AI agents across multiple messaging channels.

## Research Process

To answer questions about OpenClaw, spawn a sub-agent to conduct thorough documentation research.

### Launch a Research Sub-Agent

Use the **Task tool** to spawn a sub-agent dedicated to OpenClaw documentation research. Do NOT specify a model (use the default model for comprehensive research quality).

**Critical**: Provide the sub-agent with a highly detailed prompt that includes:

1. **Goal** - What you are ultimately trying to accomplish
2. **Context** - Why you need this information and how it fits into the larger task
3. **Specific Questions** - Exactly what information you need answered
4. **Output Requirements** - The format and level of detail needed in the response

### Task Tool Configuration

```
Task tool parameters:
- description: "Research OpenClaw docs"
- subagent_type: "generalPurpose"
- model: (DO NOT SPECIFY - use default for thorough research)
- readonly: true
- prompt: (see template below)
```

### Prompt Template for Sub-Agent

Structure your prompt to the research sub-agent as follows:

```
You are researching OpenClaw documentation to help with a specific task.

## Your Research Goal
[Describe exactly what you need to accomplish with this information]

## Context
[Explain why you need this information and how it will be used]

## Specific Questions to Answer
[List the specific questions that need to be answered]

## Research Process

1. First, fetch the documentation index to see all available pages:
   URL: https://docs.openclaw.ai/llms.txt

2. Based on the questions above, identify and fetch the most relevant documentation pages. The docs are organized by topic:
   - automation/ - Cron jobs, webhooks, polling, auth monitoring
   - channels/ - Messaging platform integrations (Slack, Discord, Telegram, WhatsApp, etc.)
   - cli/ - Command-line interface commands
   - concepts/ - Core concepts (agents, sessions, memory, context, models)
   - gateway/ - Gateway configuration, sandboxing, authentication
   - install/ - Installation guides (Docker, Bun, Nix, Ansible)
   - platforms/ - Platform-specific guides (macOS, Linux, Windows, iOS, Android)
   - providers/ - LLM provider integrations (Anthropic, OpenAI, OpenRouter)
   - tools/ - Built-in tools (browser, exec, skills, subagents)
   - start/ - Getting started guides
   - reference/ - Templates and reference materials

3. Fetch multiple relevant pages in parallel using WebFetch.

## Required Output
[Specify exactly what format and content you need returned]

Provide a comprehensive response with all findings, including relevant code examples, configuration snippets, and step-by-step instructions where applicable.
```

### Example Usage

If you need to help a user set up Slack integration:

```
Task tool prompt:

You are researching OpenClaw documentation to help with a specific task.

## Your Research Goal
Find complete instructions for integrating OpenClaw with Slack, including all required configuration, environment variables, and setup steps.

## Context
A user wants to deploy an OpenClaw agent that responds to messages in their Slack workspace. They need end-to-end setup instructions.

## Specific Questions to Answer
1. What are the prerequisites for Slack integration?
2. How do you create and configure the Slack app?
3. What environment variables are required?
4. How do you configure the channel in OpenClaw?
5. Are there any gotchas or troubleshooting tips?

## Research Process
[... standard research process ...]

## Required Output
Provide step-by-step setup instructions with all configuration examples and environment variables. Include any troubleshooting guidance found in the docs.
```

### After Receiving Sub-Agent Results

The sub-agent will return comprehensive documentation findings. Use this information to:
- Answer the user's question accurately
- Implement the required functionality
- Provide code examples and configuration directly from official docs
