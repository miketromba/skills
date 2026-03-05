---
name: qa-testing
description: Autonomously QA and verify the application using browser automation. Use when verifying code changes, testing features, validating bug fixes, or confirming any work done on the application. Triggers on requests to "test this", "verify this works", "QA this change", "make sure it works", or after implementing features that need validation.
---

# QA Testing

Autonomously test and verify the application using browser automation with the QA auth bypass system.

## Before You Begin

**REQUIRED**: Read the agent-browser skill first to learn browser automation commands:

```
./agent-browser/SKILL.md
```

Do not proceed until you have read and understood the agent-browser skill. It contains essential commands for navigating pages, taking snapshots, interacting with elements, and capturing screenshots.

> **Warning: Subagent type: Use `generalPurpose`, NOT `browser-use`.** The QA workflow uses the `agent-browser` CLI via Shell commands. The `browser-use` subagent has its own built-in browser that is completely separate from `agent-browser` and does NOT follow this skill's patterns. Always delegate QA tasks to a `generalPurpose` subagent, which has Shell access to run `agent-browser` commands.

## Prerequisites

1. You have read the agent-browser skill (see above)
2. Dev server is running

## Authentication

The app uses a QA bypass system that allows automated testing without email verification.

### QA Test Emails

The QA email whitelist is defined in the project's config package. Look for the QA config at:

```
packages/config/src/qa.ts
```

Read that file to find the whitelisted emails and the `isQaEmail()` helper.

Each email creates a distinct auth user with its own session and data. Use different emails when testing multi-user flows (invitations, member management, role changes, etc.).

### How QA Auth Works

1. Enter a whitelisted QA email in the email field on the login page
2. Click the submit button
3. The frontend detects this is a QA email (via `isQaEmail()` from the config package) and calls the QA bypass API endpoint
4. The server validates the email is whitelisted and generates a session without sending email
5. You're logged in immediately

### No env vars needed

The QA email whitelist is hardcoded in the config package. No QA-specific env vars are required.

## CRITICAL: Never Skip Steps Due to Missing State

> **Never assume QA accounts have pre-existing data.** QA accounts are ephemeral — they may have no prior data or state. **Never skip a verification step because the required data doesn't exist.** Create the state you need.

**Create state through the UI.** Use browser automation to perform the actions a real user would — fill out forms, click buttons, and let the app create the data naturally. This tests the full stack (UI -> API -> DB -> side effects) and catches more bugs than testing views in isolation.

**Last resort: Seed via database** only when no UI or API path exists at all. Write a temporary seed script, run it before browser tests, then clean up after and delete the script.

## QA Workflow

### Step 1: Start dev server (if not running)

Check if the server is already running by listing the terminals folder. If not running, start the app's dev server (e.g., `bun run dev` in the appropriate app directory).

### Step 2: Navigate to the app

```bash
agent-browser open http://localhost:<PORT>
```

### Step 3: Authenticate

```bash
agent-browser snapshot -i
# Find the email input
agent-browser fill @e1 "qa@test.local"
# Find and click the submit button
agent-browser click @e2
# Wait for auth to complete and redirect
agent-browser wait 2000
agent-browser snapshot -i
```

After login, you should see the authenticated view (dashboard, home page, etc.).

### Step 4: Verify the feature/change

Navigate to the relevant part of the app and verify the expected behavior. Take screenshots and **read them** to document the verification:

```bash
agent-browser screenshot --full
# The command prints the saved file path — you MUST read that file
# using the Read tool to actually see the screenshot contents.
# A screenshot you don't read tells you nothing.
```

### Step 5: Clean up

```bash
agent-browser close
```

## Multi-User Testing

For flows that require multiple authenticated users, use separate browser sessions with `--session`:

```bash
# Session 1: Primary user
agent-browser --session user1 open http://localhost:<PORT>
agent-browser --session user1 snapshot -i
agent-browser --session user1 fill @e1 "qa@test.local"
agent-browser --session user1 click @e2
agent-browser --session user1 wait 3000

# Session 2: Secondary user (separate browser, separate auth)
agent-browser --session user2 open http://localhost:<PORT>
agent-browser --session user2 snapshot -i
agent-browser --session user2 fill @e1 "qa2@test.local"
agent-browser --session user2 click @e2
agent-browser --session user2 wait 3000

# Now you have two authenticated users to test multi-user flows

# Clean up both sessions
agent-browser --session user1 close
agent-browser --session user2 close
```

Each `--session` name creates an isolated browser context with its own cookies, localStorage, and auth state.

## Common Verification Patterns

> **Reminder:** Every `agent-browser screenshot` call saves a file and prints its path. You MUST read that file with the Read tool to see the image. If you skip the read, the screenshot is wasted.

### Verify login works

```bash
agent-browser open http://localhost:<PORT>
agent-browser snapshot -i
agent-browser fill @e1 "qa@test.local"
agent-browser click @e2
agent-browser wait 3000
agent-browser snapshot -i
# Should show the authenticated view
agent-browser screenshot
# Now READ the screenshot file to verify what's on screen
agent-browser close
```

### Verify a specific page/route

```bash
agent-browser open http://localhost:<PORT>
# Authenticate first...
agent-browser fill @e1 "qa@test.local"
agent-browser click @e2
agent-browser wait 3000
# Navigate to the specific route
agent-browser open http://localhost:<PORT>/some-route
agent-browser snapshot -i
agent-browser screenshot
```

### Verify UI component changes

```bash
agent-browser open http://localhost:<PORT>
agent-browser snapshot -i
# Look for the specific element
agent-browser get text @eN  # Get text content
agent-browser get styles @eN  # Check styling
agent-browser screenshot
```

### Verify form behavior

```bash
agent-browser snapshot -i
agent-browser fill @input1 "test value"
agent-browser fill @input2 "another value"
agent-browser click @submit
agent-browser wait --load networkidle
agent-browser snapshot -i
# Check for success/error states
```

## Troubleshooting

### Auth fails with "QA bypass not allowed"

- Ensure `NODE_ENV` is not set to "production"
- Make sure you're using one of the whitelisted emails from `packages/config/src/qa.ts`

### Server not responding

- Check if dev server is running: list the terminals folder
- Start the dev server from the appropriate app directory
- Check the app's `package.json` for the correct dev command and port

### Element refs invalidate

- Re-run `agent-browser snapshot -i` after any navigation or DOM changes
- Refs like `@e1` are only valid until the page changes

## Environment Variables Required

In `apps/app/.env`:

```
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

No QA-specific env vars are needed — the email whitelist is hardcoded in `packages/config/src/qa.ts`.

