# Skills

A collection of open-source [Agent Skills](https://agentskills.io) for AI-powered coding assistants like Cursor, Claude Code, GitHub Copilot, and more.

## Installation

Install skills with a single command using the [skills CLI](https://skills.sh/docs/cli) — no setup required:

```bash
# Install a specific skill
npx skills add miketromba/skills --skill railway-cli

# Install all skills
npx skills add miketromba/skills
```

## Available Skills

| Skill | Description |
|-------|-------------|
| [railway-cli](skills/railway-cli/) | Manage Railway cloud deployments via the Railway CLI — deploy, manage services, set variables, view logs, configure domains, add databases, and more. |
| [bootstrap-ts-oss](skills/bootstrap-ts-oss/) | Scaffold a production-ready TypeScript npm package with Bun, tsup, Biome, Husky, GitHub Actions CI/CD, and dual ESM/CJS publishing. |
| [legal-tos-privacy](skills/legal-tos-privacy/) | Create bulletproof Terms of Service and Privacy Policy documents for SaaS apps — audits your codebase, infers company info, and drafts ready-to-publish legal docs with minimal interaction. |
| [calculator](skills/calculator/) | Perform precise mathematical calculations (add, subtract, multiply, divide) via a bundled CLI script — supports batch operations so the agent never does mental math. |

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
