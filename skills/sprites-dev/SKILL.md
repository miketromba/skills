---
name: sprites-dev
description: Look up and use Sprites (sprites.dev) documentation for persistent, hardware-isolated execution environments by Fly.io. Use when the user mentions sprites, sprites.dev, Sprites CLI, sprite commands, sandboxed code execution with Sprites, or microVM environments.
---

# Sprites.dev

Sprites are persistent, hardware-isolated Linux execution environments (Firecracker microVMs) by Fly.io. They maintain filesystem and state between runs, auto-hibernate when idle, and wake instantly on demand. Common use cases: AI code execution, untrusted code sandboxing, persistent dev environments, long-lived services.

## Fetching Current Documentation

Sprites docs and APIs evolve. **Always fetch live documentation before answering questions or writing integration code.**

### Documentation Endpoints

| Endpoint | Use when |
|----------|----------|
| `https://docs.sprites.dev/llms.txt` | Quick overview, doc structure, and page index |
| `https://docs.sprites.dev/llms-full.txt` | Full documentation dump — complete API details, SDK examples, all CLI commands |

Use the WebFetch tool on these URLs to get current information. Start with `llms.txt` for orientation; escalate to `llms-full.txt` when you need SDK signatures, detailed CLI flags, or complete API reference.

### Key Documentation Pages

If you need a specific topic, fetch the relevant page directly:

| Topic | URL |
|-------|-----|
| Overview & concepts | `https://docs.sprites.dev/index.md` |
| Quickstart | `https://docs.sprites.dev/quickstart.md` |
| CLI installation | `https://docs.sprites.dev/cli/installation.md` |
| CLI authentication | `https://docs.sprites.dev/cli/authentication.md` |
| CLI commands reference | `https://docs.sprites.dev/cli/commands.md` |

### Discovering New Pages

The `llms.txt` endpoint lists all available documentation sections and their URLs. If a user asks about a topic not listed above, fetch `llms.txt` first to find the relevant page URL, then fetch that page.

## Quick Reference (Stable Concepts)

These high-level concepts are unlikely to change and help orient responses without fetching docs:

- **Persistence**: ext4 filesystem survives hibernation via NVMe + durable object storage
- **Isolation**: Hardware-level via Firecracker microVMs (not container-level)
- **States**: running, warm (idle, fast resume), cold (idle, slower resume)
- **Billing**: Per-second compute; no charges when idle
- **HTTP access**: Each sprite gets a unique URL (`https://<name>-<org>.sprites.dev/`)
- **SDKs**: JavaScript (`@fly/sprites`), Go (`github.com/superfly/sprites-go`), Elixir
- **CLI**: `sprite` command — create, exec, console, checkpoint, proxy, url
- **Auth**: Via Fly.io account; tokens stored in keyring; env var `SPRITE_TOKEN`
- **Local context**: `.sprite` file in project directory pins org + sprite name

## Workflow

1. User asks about sprites.dev
2. Determine which docs are relevant to the question
3. Fetch live docs using WebFetch (prefer the narrowest useful endpoint)
4. Answer using the fetched content — cite specifics from the current docs, not from memory
