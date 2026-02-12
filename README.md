# Skills

A collection of open-source [Agent Skills](https://agentskills.io) for AI-powered coding assistants like Cursor, Claude Code, GitHub Copilot, and more.

## Installation

Install any skill with a single command using the [skills CLI](https://skills.sh/docs/cli) — no setup required:

```bash
npx skills add mtromba/skills/<skill-name>
```

Or install all skills at once:

```bash
npx skills add mtromba/skills
```

## Available Skills

| Skill | Description |
|-------|-------------|
| [railway-cli](skills/railway-cli/) | Manage Railway cloud deployments via the Railway CLI — deploy, manage services, set variables, view logs, configure domains, add databases, and more. |

## What Are Agent Skills?

[Agent Skills](https://agentskills.io/what-are-skills) are folders of instructions, scripts, and resources that AI coding assistants can discover and use to perform specialized tasks more accurately and efficiently. When you install a skill, your AI assistant gains domain-specific knowledge it can apply automatically when relevant.

For the full specification, see the [Agent Skills docs](https://agentskills.io).

## Contributing

Contributions to improve existing skills are welcome — whether that's fixing inaccuracies, adding missing commands, improving examples, or updating content for newer CLI versions.

1. Fork this repository
2. Make your changes to the relevant skill in `skills/`
3. Open a pull request describing what you changed and why

## License

[MIT](LICENSE) - Michael Tromba
