# Railway CLI Reference

> Full reference for every Railway CLI command. Source of truth: [Railway CLI Docs](https://docs.railway.com/cli.md)

## Authentication Commands

### `railway login`

Authenticate with Railway. Opens browser by default.

```bash
railway login                   # Browser-based
railway login --browserless     # Prints a code; paste token back (for SSH, CI)
```

### `railway logout`

End the current CLI session.

### `railway whoami`

Print the currently authenticated user and workspace.

---

## Project Management

### `railway init`

Create a new Railway project in the current directory. Interactive — prompts for project name and options.

### `railway link`

Link the current directory to an existing Railway project. Interactive — shows project picker.

### `railway unlink`

Remove the link between the current directory and a Railway project.

### `railway list`

List all projects in the current workspace.

### `railway status`

Show the linked project, service, and environment for the current directory.

### `railway open`

Open the linked project in the Railway dashboard (browser).

### `railway project`

Manage project-level settings.

---

## Deployment

### `railway up`

Deploy the current directory to Railway.

```bash
railway up                      # Deploy and stream logs
railway up --detach             # Deploy without log streaming
railway up -s my-service        # Target a specific service
railway up -e staging           # Target a specific environment
```

### `railway deploy`

Deploy a template or predefined service.

```bash
railway deploy --template postgres
```

### `railway redeploy`

Trigger a new deployment using the latest deployment's config (re-runs the build).

### `railway restart`

Restart the running service without building. Useful for picking up new env vars.

### `railway down`

Remove the most recent deployment (rollback to previous or stop the service).

---

## Services

### `railway add`

Add a new service to the project.

```bash
railway add                     # Interactive service picker
railway add --database postgres # Add PostgreSQL
railway add --database mysql    # Add MySQL
railway add --database redis    # Add Redis
railway add --database mongo    # Add MongoDB
railway add --repo user/repo    # Add a GitHub-connected service
```

### `railway service`

Switch which service the CLI targets in the current directory. Interactive picker.

### `railway scale`

Scale a service (adjust replica count or resources).

### `railway delete`

Delete the linked project. Destructive — requires confirmation (skip with `-y`).

---

## Variables

### `railway variable list`

Print all environment variables for the linked service and environment.

### `railway variable set`

Set one or more variables.

```bash
railway variable set KEY=value
railway variable set KEY1=val1 KEY2=val2
railway variable set -s api -e production DATABASE_URL=postgres://...
```

### `railway variable delete`

Remove a variable by key.

```bash
railway variable delete KEY
```

---

## Environments

### `railway environment`

Switch the active environment. Interactive picker when run without arguments.

```bash
railway environment                     # Interactive
railway environment new staging         # Create new environment
railway environment delete dev          # Delete an environment
```

---

## Local Development

### `railway run`

Execute a command with Railway environment variables injected into the process.

```bash
railway run npm start
railway run -- npx prisma migrate deploy
railway run -e production -- python manage.py migrate
```

### `railway shell`

Open an interactive shell with Railway environment variables loaded.

### `railway dev`

Run project services locally using Docker Compose (reads railway.toml or project config).

---

## Logs & Debugging

### `railway logs`

Stream or view logs from a deployed service.

```bash
railway logs                    # Stream live logs
railway logs --build            # View build-phase logs
railway logs -n 100             # Show last 100 lines
railway logs -s api             # Logs for a specific service
railway logs -e production      # Logs for a specific environment
```

### `railway ssh`

Open an SSH session into a running service container.

```bash
railway ssh
railway ssh -s my-service
```

### `railway connect`

Open an interactive database shell (auto-detects database type).

```bash
railway connect                 # Connects using linked database service
```

Supported shells: `psql` (Postgres), `mysql`, `redis-cli`, `mongosh`.

---

## Networking

### `railway domain`

Manage domains for the linked service.

```bash
railway domain                  # Generate a *.railway.app subdomain
railway domain example.com      # Attach a custom domain
```

---

## Volumes

### `railway volume list`

List all volumes attached to the project.

### `railway volume add`

Create and attach a new persistent volume.

### `railway volume delete`

Remove a volume. Destructive — data is lost.

---

## Functions

### `railway functions list`

List all functions in the project.

### `railway functions new`

Create a new function.

### `railway functions push`

Push local function changes to Railway.

---

## Utilities

### `railway completion`

Generate shell completion scripts.

```bash
railway completion bash >> ~/.bashrc
railway completion zsh >> ~/.zshrc
railway completion fish > ~/.config/fish/completions/railway.fish
```

### `railway docs`

Open the Railway documentation in a browser.

### `railway upgrade`

Upgrade the Railway CLI to the latest version.

### `railway starship`

Integration with Starship prompt — shows Railway context in your terminal prompt.

---

## Global Flags

Available on most commands:

| Flag | Short | Description |
|------|-------|-------------|
| `--service` | `-s` | Target service by name or ID |
| `--environment` | `-e` | Target environment by name or ID |
| `--json` | | Output as JSON |
| `--yes` | `-y` | Skip confirmation prompts |
| `--help` | `-h` | Show help for a command |
| `--version` | `-V` | Print CLI version |

---

## Token-Based Authentication (CI/CD)

For non-interactive environments, set one of these environment variables:

| Variable | Scope | Use case |
|----------|-------|----------|
| `RAILWAY_TOKEN` | Single project | Deployments, logs, variables for one project |
| `RAILWAY_API_TOKEN` | Account/workspace | Cross-project operations, workspace management |

```bash
# GitHub Actions example
env:
  RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
run: railway up --detach
```

---

## Further Reading

- [Railway CLI Docs](https://docs.railway.com/cli.md)
- [Railway CLI GitHub](https://github.com/railwayapp/cli)
- [Railway Dashboard](https://railway.com/dashboard)
