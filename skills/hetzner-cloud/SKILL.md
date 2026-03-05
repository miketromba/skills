---
name: hetzner-cloud
description: Hetzner Cloud API documentation and guidance. Use when working with Hetzner Cloud infrastructure - provisioning servers, managing networks, volumes, firewalls, load balancers, DNS zones, and other cloud resources. Triggers on Hetzner API, cloud servers, VPS provisioning, Hetzner CLI (hcloud), server deployment, cloud infrastructure, virtual machines, Hetzner networking.
---

# Hetzner Cloud API

## Quick Reference

| Resource | Base Endpoint |
|----------|---------------|
| Servers | `/v1/servers` |
| Server Types | `/v1/server_types` |
| Images | `/v1/images` |
| Volumes | `/v1/volumes` |
| Networks | `/v1/networks` |
| Firewalls | `/v1/firewalls` |
| Load Balancers | `/v1/load_balancers` |
| Floating IPs | `/v1/floating_ips` |
| Primary IPs | `/v1/primary_ips` |
| SSH Keys | `/v1/ssh_keys` |
| DNS Zones | `/v1/zones` |
| Certificates | `/v1/certificates` |
| Locations | `/v1/locations` |
| Pricing | `/v1/pricing` |

**Base URL:** `https://api.hetzner.cloud`

---

## Getting Started

### Alternative Tools
- **CLI:** `hcloud` - Official command-line tool
- **Go Library:** Official Hetzner Go SDK
- **Python Library:** Official Hetzner Python SDK
- See [Awesome Hetzner](https://github.com/hetznercloud/awesome-hcloud) for more integrations

### Open Source Credits
If you're developing an open-source project that supports Hetzner APIs, you may be eligible for a free one-time credit of up to €50/$50. Contact support via Hetzner Console with:
- Project name and description
- Link to project website/repo
- Your role in the project
- Links to other open-source work

> **Note:** Only Hetzner-specific projects are eligible. Generic S3 clients/SDKs (since Object Storage uses standard S3 API) are not eligible.

### Creating an API Token
1. Sign into [Hetzner Console](https://console.hetzner.cloud)
2. Select a Project
3. Go to **Security → API Tokens**
4. Generate a new token (copy immediately - won't be shown again)

> Tokens are bound to a Project. Create separate tokens for different Projects.

### First Request

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
  https://api.hetzner.cloud/v1/servers
```

**Example Response:**

```json
{
  "servers": [],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 25,
      "previous_page": null,
      "next_page": null,
      "last_page": 1,
      "total_entries": 0
    }
  }
}
```

---

## Authentication

All requests require an API token in the `Authorization` header:

```
Authorization: Bearer YOUR_API_TOKEN
```

---

## Error Handling

Errors return an `error` object with `code`, `message`, and optional `details`. The schema of `details` depends on the error code:

**invalid_input:**

```json
{
  "error": {
    "code": "invalid_input",
    "message": "invalid input in field 'broken_field': is too long",
    "details": {
      "fields": [{ "name": "broken_field", "messages": ["is too long"] }]
    }
  }
}
```

**uniqueness_error:**

```json
{
  "error": {
    "code": "uniqueness_error",
    "message": "SSH key with the same fingerprint already exists",
    "details": { "fields": [{ "name": "public_key" }] }
  }
}
```

**resource_limit_exceeded:**

```json
{
  "error": {
    "code": "resource_limit_exceeded",
    "message": "project limit exceeded",
    "details": { "limits": [{ "name": "project_limit" }] }
  }
}
```

**deprecated_api_endpoint:**

```json
{
  "error": {
    "code": "deprecated_api_endpoint",
    "message": "API functionality was removed",
    "details": { "announcement": "https://docs.hetzner.cloud/changelog#2023-07-20-foo-endpoint-is-deprecated" }
  }
}
```

### Error Codes

| Status | Code | Description |
|--------|------|-------------|
| 400 | `json_error` | Invalid JSON input |
| 401 | `unauthorized` | Invalid or unknown token |
| 401 | `token_readonly` | Token only allows GET requests |
| 403 | `forbidden` | Insufficient permissions |
| 403 | `maintenance` | Operation blocked due to maintenance |
| 403 | `resource_limit_exceeded` | Account resource limit exceeded |
| 404 | `not_found` | Entity not found |
| 405 | `method_not_allowed` | Request method not allowed |
| 409 | `uniqueness_error` | Field must be unique |
| 409 | `conflict` | Resource changed during request, retry |
| 410 | `deprecated_api_endpoint` | Endpoint functionality removed |
| 412 | `resource_unavailable` | Resource not available for order |
| 422 | `invalid_input` | Error parsing/processing input |
| 422 | `service_error` | Error within a service |
| 422 | `unsupported_error` | Resource doesn't support this Action |
| 423 | `locked` | Resource locked (Action running) |
| 423 | `protected` | Action is protected for this resource |
| 429 | `rate_limit_exceeded` | Too many requests |
| 500 | `server_error` | API backend error |
| 503 | `unavailable` | Service/product not available |
| 504 | `timeout` | Request timeout, retry |

---

## Labels

Key/value pairs attached to resources for organization and filtering.

### Label Format

**Keys:** `[prefix/]name`
- **prefix** (optional): DNS subdomain, max 253 chars, ends with `/`
- **name** (required): 1-63 chars, alphanumeric with `-`, `_`, `.`

**Values:** 0-63 chars, alphanumeric with `-`, `_`, `.`

> The `hetzner.cloud/` prefix is reserved.

```json
{
  "labels": {
    "environment": "development",
    "service": "backend",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

### Label Selectors

Filter resources using label selector query language:

| Expression | Meaning |
|------------|---------|
| `k==v` or `k=v` | Key k equals value v |
| `k!=v` | Key k does not equal v |
| `k` | Key k is present |
| `!k` | Key k is not present |
| `k in (v1,v2,v3)` | Key k is one of v1, v2, or v3 |
| `k notin (v1,v2,v3)` | Key k is not v1, v2, or v3 |
| `k1==v,!k2` | Key k1 equals v AND key k2 not present |

**Examples:**

```
env=production,type!=database    # production, not database
env in (testing,staging)         # testing or staging
!type                            # no type label
```

---

## Pagination

Paginated endpoints support:

| Parameter | Description | Default |
|-----------|-------------|---------|
| `page` | Page number (starts at 1) | 1 |
| `per_page` | Items per page (max 50) | 25 |

**Response includes:**

```json
{
  "meta": {
    "pagination": {
      "page": 2,
      "per_page": 25,
      "previous_page": 1,
      "next_page": 3,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

**Link Header:**

Responses also include a `Link` header with pagination URLs:

```
Link: <https://api.hetzner.cloud/v1/actions?page=2&per_page=5>; rel="prev",
      <https://api.hetzner.cloud/v1/actions?page=4&per_page=5>; rel="next",
      <https://api.hetzner.cloud/v1/actions?page=6&per_page=5>; rel="last"
```

> Line breaks above are for display only. Responses may only contain some `rel` values.

> The keys `previous_page`, `next_page`, `last_page`, and `total_entries` may be null when on the first page, last page, or when total entries are unknown.

---

## Rate Limiting

- **Default limit:** 3600 requests/hour per Project
- **Burst requests are allowed**
- Remaining requests increase gradually (1 per second)

**Response Headers:**
- `RateLimit-Limit` - Total requests allowed per hour
- `RateLimit-Remaining` - Requests remaining
- `RateLimit-Reset` - UNIX timestamp when limit resets

---

## Sorting

Sort with `sort` query parameter. Append `:asc` or `:desc` for direction (default: ascending).

```
?sort=status
?sort=status:asc
?sort=status:desc
?sort=status:asc&sort=command:desc
```

---

## Deprecation Notices

You can find all announced deprecations in the [Hetzner Changelog](https://docs.hetzner.cloud/changelog).

---

## Server Metadata

Servers can discover their own metadata via HTTP:

**Base URL:** `http://169.254.169.254/hetzner/v1/metadata`

| Endpoint | Format | Description |
|----------|--------|-------------|
| `/` | YAML | All metadata |
| `/hostname` | text | Server name |
| `/instance-id` | number | Server ID |
| `/public-ipv4` | text | Primary public IPv4 |
| `/private-networks` | YAML | Private network details |
| `/availability-zone` | text | e.g., `hel1-dc2` |
| `/region` | text | e.g., `eu-central` |

```bash
# Get all metadata
curl http://169.254.169.254/hetzner/v1/metadata

# Get hostname only
curl http://169.254.169.254/hetzner/v1/metadata/hostname
```

**Private Networks Example Response:**

```yaml
- ip: 10.0.0.2
  alias_ips: [10.0.0.3, 10.0.0.4]
  interface_num: 1
  mac_address: 86:00:00:2a:7d:e0
  network_id: 1234
  network_name: nw-test1
  network: 10.0.0.0/8
  subnet: 10.0.0.0/24
  gateway: 10.0.0.1
- ip: 192.168.0.2
  alias_ips: []
  interface_num: 2
  mac_address: 86:00:00:2a:7d:e1
  network_id: 4321
  network_name: nw-test2
  network: 192.168.0.0/16
  subnet: 192.168.0.0/24
  gateway: 192.168.0.1
```

---

## Servers

Virtual machines that can be provisioned.

### List Servers

```bash
curl 'https://api.hetzner.cloud/v1/servers' \
  -H 'Authorization: Bearer YOUR_TOKEN'
```

**Query Parameters:**
- `name` - Filter by exact name
- `label_selector` - Filter by labels
- `status` - Filter by status: `running`, `initializing`, `starting`, `stopping`, `off`, `deleting`, `migrating`, `rebuilding`, `unknown`
- `sort` - Sort by: `id`, `name`, `created` (with `:asc`/`:desc`)
- `page`, `per_page` - Pagination

### Create a Server

```bash
curl https://api.hetzner.cloud/v1/servers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_TOKEN' \
  -d '{
    "name": "my-server",
    "location": "nbg1",
    "server_type": "cpx22",
    "image": "ubuntu-24.04",
    "start_after_create": true,
    "ssh_keys": ["my-ssh-key"],
    "labels": {
      "environment": "prod"
    }
  }'
```

**Operation-Specific Errors:**

| Code | Description |
|------|-------------|
| `placement_error` | Error during server placement |
| `primary_ip_assigned` | Specified Primary IP is already assigned |
| `primary_ip_datacenter_mismatch` | Specified Primary IP is in a different datacenter |
| `primary_ip_version_mismatch` | Specified Primary IP has wrong IP version |

**Required Fields:**
- `name` - Unique per Project, valid hostname (RFC 1123)
- `server_type` - ID or name (e.g., `cpx22`)
- `image` - ID or name (e.g., `ubuntu-24.04`)

**Optional Fields:**
- `location` - ID or name (e.g., `nbg1`, `fsn1`, `hel1`)
- `datacenter` - **DEPRECATED** (will be removed after July 1, 2026). Use `location` instead.
- `ssh_keys` - Array of SSH key IDs or names
- `networks` - Network IDs for private networking
- `firewalls` - Firewall configurations applied to public network interface at creation
- `volumes` - Volume IDs to attach
- `placement_group` - Placement group ID
- `user_data` - Cloud-init user data (⚠️ stored in Hetzner systems - don't use for passwords/sensitive info)
  ```yaml
  # Example user_data (cloud-init):
  #cloud-config
  runcmd:
    - [touch, /root/cloud-init-worked]
  ```
- `labels` - Key/value labels
- `automount` - Auto-mount volumes after attach (default: false)
- `start_after_create` - Start server after creation (default: true, set to false to create powered-off)
- `public_net` - Public network configuration:
  - `enable_ipv4` - Enable public IPv4
  - `enable_ipv6` - Enable public IPv6
  - `ipv4` - Specific Primary IP ID
  - `ipv6` - Specific Primary IP ID

> If no `ssh_keys` provided, a root password is generated and returned in the response.

> Properties like `start_after_create` or `automount` trigger follow-up Actions. These are listed in the `next_actions` field of the response.

### Get a Server

```bash
curl https://api.hetzner.cloud/v1/servers/42 \
  -H 'Authorization: Bearer YOUR_TOKEN'
```

### Update a Server

```bash
curl https://api.hetzner.cloud/v1/servers/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_TOKEN' \
  -d '{
    "name": "new-server-name",
    "labels": { "environment": "staging" }
  }'
```

### Delete a Server

```bash
curl https://api.hetzner.cloud/v1/servers/42 \
  -X DELETE \
  -H 'Authorization: Bearer YOUR_TOKEN'
```

> Attached resources (Volumes, Primary IPs, Floating IPs, Firewalls, Placement Groups) are detached automatically.

### Server Response Fields

The server object in responses includes:

| Field | Description |
|-------|-------------|
| `status` | `running`, `initializing`, `starting`, `stopping`, `off`, `deleting`, `migrating`, `rebuilding`, `unknown` |
| `rescue_enabled` | Whether rescue mode is active |
| `locked` | Whether server is locked (Action running) |
| `backup_window` | Time window for backups (e.g., "22-02") |
| `outgoing_traffic` | Outgoing traffic for current billing period (bytes) |
| `ingoing_traffic` | Incoming traffic for current billing period (bytes) |
| `included_traffic` | Free traffic per billing period (bytes) |
| `primary_disk_size` | Size of the primary disk in GB |
| `public_net` | Public network configuration (IPv4, IPv6, Floating IPs, Firewalls) |
| `private_net` | Private network attachments with IPs and alias IPs |
| `volumes` | IDs of attached volumes |
| `load_balancers` | IDs of Load Balancers targeting this server |

### Get Server Metrics

```bash
curl 'https://api.hetzner.cloud/v1/servers/42/metrics?type=cpu&start=2024-01-01T00:00:00Z&end=2024-01-02T00:00:00Z' \
  -H 'Authorization: Bearer YOUR_TOKEN'
```

**Metric Types and Timeseries:**

| Type | Timeseries | Unit | Description |
|------|------------|------|-------------|
| `cpu` | `cpu` | percent | Percent CPU usage |
| `disk` | `disk.0.iops.read` | iop/s | Read IO operations per second |
| `disk` | `disk.0.iops.write` | iop/s | Write IO operations per second |
| `disk` | `disk.0.bandwidth.read` | bytes/s | Bytes read per second |
| `disk` | `disk.0.bandwidth.write` | bytes/s | Bytes written per second |
| `network` | `network.0.pps.in` | packets/s | Public interface packets/s received |
| `network` | `network.0.pps.out` | packets/s | Public interface packets/s sent |
| `network` | `network.0.bandwidth.in` | bytes/s | Public interface bytes/s received |
| `network` | `network.0.bandwidth.out` | bytes/s | Public interface bytes/s sent |

You can specify multiple types with comma separation, e.g. `?type=cpu,disk`.

> Metrics available for last 30 days. Max 500 samples returned. If no `step` parameter provided, it auto-adjusts for max 200 samples.

### Server Actions

| Action | Endpoint |
|--------|----------|
| Power On | `POST /servers/{id}/actions/poweron` |
| Power Off | `POST /servers/{id}/actions/poweroff` |
| Shutdown | `POST /servers/{id}/actions/shutdown` |
| Reboot | `POST /servers/{id}/actions/reboot` |
| Reset | `POST /servers/{id}/actions/reset` |
| Rebuild | `POST /servers/{id}/actions/rebuild` |
| Change Type | `POST /servers/{id}/actions/change_type` |
| Enable Backup | `POST /servers/{id}/actions/enable_backup` |
| Disable Backup | `POST /servers/{id}/actions/disable_backup` |
| Enable Rescue | `POST /servers/{id}/actions/enable_rescue` |
| Disable Rescue | `POST /servers/{id}/actions/disable_rescue` |
| Create Image | `POST /servers/{id}/actions/create_image` |
| Attach ISO | `POST /servers/{id}/actions/attach_iso` |
| Detach ISO | `POST /servers/{id}/actions/detach_iso` |
| Attach to Network | `POST /servers/{id}/actions/attach_to_network` |
| Detach from Network | `POST /servers/{id}/actions/detach_from_network` |
| Change Alias IPs | `POST /servers/{id}/actions/change_alias_ips` |
| Change DNS PTR | `POST /servers/{id}/actions/change_dns_ptr` |
| Change Protection | `POST /servers/{id}/actions/change_protection` |
| Request Console | `POST /servers/{id}/actions/request_console` |
| Reset Password | `POST /servers/{id}/actions/reset_password` |
| Add to Placement Group | `POST /servers/{id}/actions/add_to_placement_group` |
| Remove from Placement Group | `POST /servers/{id}/actions/remove_from_placement_group` |

---

## Server Types

Define kinds of servers with different specs and pricing.

### List Server Types

```bash
curl https://api.hetzner.cloud/v1/server_types \
  -H 'Authorization: Bearer YOUR_TOKEN'
```

### Get Server Type

```bash
curl https://api.hetzner.cloud/v1/server_types/42 \
  -H 'Authorization: Bearer YOUR_TOKEN'
```

**Response includes:**
- `cores` - Number of CPU cores
- `memory` - RAM in GB
- `disk` - Disk size in GB
- `storage_type` - `local` or `network`
- `cpu_type` - `shared` or `dedicated`
- `architecture` - `x86` or `arm`
- `category` - Human-readable category (e.g., "Shared vCPU")
- `deprecated` - Whether this type is deprecated
- `prices` - Pricing per location, each containing:
  - `price_hourly` - Hourly cost (net/gross)
  - `price_monthly` - Monthly cost (net/gross)
  - `included_traffic` - Traffic included in price (bytes)
  - `price_per_tb_traffic` - Cost for additional traffic
- `locations` - Available locations with optional `deprecation` info:
  - `announced` - When deprecation was announced
  - `unavailable_after` - When location becomes unavailable

> **Billing:** You pay whichever is lower: hourly or monthly cost based on your usage.

---

## Images

Blueprints for VM disks.

**Image Types:**
- **System Images** - Distribution images maintained by Hetzner (e.g., "Ubuntu 24.04")
- **Snapshot Images** - Custom snapshots maintained by you (billed per GB/month)
- **Backup Images** - Daily backups of your Server (20% of server price for 7 backup slots)
  - Bound to exactly one Server - if you delete the Server, all backups bound to it are also deleted
  - You can convert backup Images to snapshot Images to keep them after Server deletion
- **App Images** - Prebuilt images with specific software configurations (e.g., "Wordpress"), created by Hetzner

**Image Response Fields:**
- `os_flavor` - OS flavor (e.g., `ubuntu`, `debian`, `centos`)
- `os_version` - OS version (e.g., `24.04`)
- `image_size` - Actual size of the image in GB
- `disk_size` - Size of disk the image creates in GB
- `rapid_deploy` - Whether the image supports rapid deploy (faster provisioning)
- `created_from` - For snapshots: source server info (`id`, `name`)
- `bound_to` - For backups: ID of the server this backup is bound to
- `deprecated` - Deprecation timestamp if the image is deprecated
- `deleted` - Deletion timestamp if the image was deleted

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/images` | List images |
| GET | `/images/{id}` | Get image |
| PUT | `/images/{id}` | Update image |
| DELETE | `/images/{id}` | Delete image |

### Image Actions

| Action | Endpoint |
|--------|----------|
| Change Protection | `POST /images/{id}/actions/change_protection` |

---

## Volumes

Highly-available, scalable SSD block storage for Servers.

Pricing depends on Volume size and Location, not actual used storage. See [Hetzner Docs](https://docs.hetzner.com/cloud/volumes/overview/) for more details.

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/volumes` | List volumes |
| POST | `/volumes` | Create volume |
| GET | `/volumes/{id}` | Get volume |
| PUT | `/volumes/{id}` | Update volume |
| DELETE | `/volumes/{id}` | Delete volume |

### Volume Actions

| Action | Endpoint |
|--------|----------|
| Attach | `POST /volumes/{id}/actions/attach` |
| Detach | `POST /volumes/{id}/actions/detach` |
| Resize | `POST /volumes/{id}/actions/resize` |
| Change Protection | `POST /volumes/{id}/actions/change_protection` |

---

## Networks

Private networking for servers. Networks are optional and coexist with the public network every Server has by default. They allow Servers to communicate over a dedicated interface using private IPs (RFC1918).

> **Note:** Private networks do not provide public internet connectivity. Use the server's public network interface for internet access.

### Concepts

- **Networks** - Define IP range (RFC1918). Currently IPv4 only.
- **Subnets** - Divide network into smaller ranges within the parent Network's `ip_range`
  - `cloud` - Connect cloud resources (recommended)
  - `server` - **DEPRECATED** (replaced by `cloud`)
  - `vswitch` - Connect dedicated server vSwitch (requires `vswitch_id`)
  - **Important:** Subnets cannot have overlapping IP ranges within the same network
- **Routes** - Custom routing rules automatically applied to private traffic. A route ensures all packets for a given destination IP prefix are sent to the address specified in its gateway.

### IP Address Management

When a Server attaches to a network without specifying an IP, it automatically gets an IP from a subnet of type `server` in the same network zone (note: `server` type is deprecated and replaced by `cloud`). Servers can have multiple IPs in a Network using alias IPs.

> **IP Specification:** If you specify an IP when attaching to a network, the Server's location must be covered by the Subnet's Network Zone. At minimum, one Subnet with a zone covering the Server's location must exist.

**Reserved IPs (cannot be used):**
- First IP of the network `ip_range` (default gateway for private interface)
- `172.31.1.1` (default gateway for public interface)

### Coupling Dedicated Servers

Using `vswitch` subnets, you can couple Cloud Networks with existing Dedicated Server vSwitches. Dedicated servers must only use IPs from the subnet and require special network configuration. See [Hetzner FAQ](https://docs.hetzner.com/cloud/networks/faq/) for details. vSwitch Layer 2 features are not supported.

### Network Zones

| Zone | Locations |
|------|-----------|
| `eu-central` | nbg1, fsn1, hel1 |
| `us-east` | ash |
| `us-west` | hil |
| `ap-southeast` | sin |

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/networks` | List networks |
| POST | `/networks` | Create network |
| GET | `/networks/{id}` | Get network |
| PUT | `/networks/{id}` | Update network |
| DELETE | `/networks/{id}` | Delete network |

### Network Actions

| Action | Endpoint |
|--------|----------|
| Add Subnet | `POST /networks/{id}/actions/add_subnet` |
| Delete Subnet | `POST /networks/{id}/actions/delete_subnet` |
| Add Route | `POST /networks/{id}/actions/add_route` |
| Delete Route | `POST /networks/{id}/actions/delete_route` |
| Change IP Range | `POST /networks/{id}/actions/change_ip_range` |
| Change Protection | `POST /networks/{id}/actions/change_protection` |

### Reserved IPs

- First IP of network range (default gateway)
- `172.31.1.1` (public network gateway)

---

## Firewalls

Control network access to resources.

- No `in` rules = DROP all inbound (default for in: DROP)
- No `out` rules = ACCEPT all outbound (default for out: ACCEPT)

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/firewalls` | List firewalls |
| POST | `/firewalls` | Create firewall |
| GET | `/firewalls/{id}` | Get firewall |
| PUT | `/firewalls/{id}` | Update firewall |
| DELETE | `/firewalls/{id}` | Delete firewall |

### Firewall Actions

| Action | Endpoint |
|--------|----------|
| Set Rules | `POST /firewalls/{id}/actions/set_rules` |
| Apply to Resources | `POST /firewalls/{id}/actions/apply_to_resources` |
| Remove from Resources | `POST /firewalls/{id}/actions/remove_from_resources` |

---

## Load Balancers

Load Balancer types define kinds of Load Balancers offered. Each type has an hourly and monthly cost - you pay whichever is lower for your usage. Costs may differ between Locations.

All prices are displayed in the currency of the project owner's account.

**Pricing includes:**
- `included_traffic` - Traffic included in the price
- `price_per_tb_traffic` - Cost for additional traffic beyond included amount

### Load Balancer Types

| Method | Endpoint |
|--------|----------|
| GET | `/load_balancer_types` |
| GET | `/load_balancer_types/{id}` |

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/load_balancers` | List load balancers |
| POST | `/load_balancers` | Create load balancer |
| GET | `/load_balancers/{id}` | Get load balancer |
| PUT | `/load_balancers/{id}` | Update load balancer |
| DELETE | `/load_balancers/{id}` | Delete load balancer |
| GET | `/load_balancers/{id}/metrics` | Get metrics |

### Load Balancer Actions

| Action | Endpoint |
|--------|----------|
| Add Service | `POST /load_balancers/{id}/actions/add_service` |
| Delete Service | `POST /load_balancers/{id}/actions/delete_service` |
| Update Service | `POST /load_balancers/{id}/actions/update_service` |
| Add Target | `POST /load_balancers/{id}/actions/add_target` |
| Remove Target | `POST /load_balancers/{id}/actions/remove_target` |
| Change Algorithm | `POST /load_balancers/{id}/actions/change_algorithm` |
| Change Type | `POST /load_balancers/{id}/actions/change_type` |
| Attach to Network | `POST /load_balancers/{id}/actions/attach_to_network` |
| Detach from Network | `POST /load_balancers/{id}/actions/detach_from_network` |
| Enable Public Interface | `POST /load_balancers/{id}/actions/enable_public_interface` |
| Disable Public Interface | `POST /load_balancers/{id}/actions/disable_public_interface` |
| Change DNS PTR | `POST /load_balancers/{id}/actions/change_dns_ptr` |
| Change Protection | `POST /load_balancers/{id}/actions/change_protection` |

---

## Floating IPs

IPs that can be reassigned between servers globally for high availability setups.

- Can reassign to servers in any location (globally routable)
- **For optimal routing and latency**, use Floating IPs in the location where they were created
- **Must configure within your operating system** - Floating IPs require manual OS network configuration to work
- IPv4: single address
- IPv6: `/64` network (any IP within the network can be used)
- Billed monthly (regardless of assignment status)

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/floating_ips` | List floating IPs |
| POST | `/floating_ips` | Create floating IP |
| GET | `/floating_ips/{id}` | Get floating IP |
| PUT | `/floating_ips/{id}` | Update floating IP |
| DELETE | `/floating_ips/{id}` | Delete floating IP |

### Floating IP Actions

| Action | Endpoint |
|--------|----------|
| Assign | `POST /floating_ips/{id}/actions/assign` |
| Unassign | `POST /floating_ips/{id}/actions/unassign` |
| Change DNS PTR | `POST /floating_ips/{id}/actions/change_dns_ptr` |
| Change Protection | `POST /floating_ips/{id}/actions/change_protection` |

---

## Primary IPs

IPs bound to a datacenter for flexible networking setups.

- One IPv4 and one IPv6 per server max
- Can only assign/unassign when server is **powered off**
- Bound to specific datacenter (cannot assign across datacenters - use Floating IPs for that)
- Works automatically with cloud-init
- IPv4: single address; IPv6: `/64` network (any IP within can be used)
- Billed hourly

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/primary_ips` | List primary IPs |
| POST | `/primary_ips` | Create primary IP |
| GET | `/primary_ips/{id}` | Get primary IP |
| PUT | `/primary_ips/{id}` | Update primary IP |
| DELETE | `/primary_ips/{id}` | Delete primary IP |

### Primary IP Actions

| Action | Endpoint |
|--------|----------|
| Assign | `POST /primary_ips/{id}/actions/assign` |
| Unassign | `POST /primary_ips/{id}/actions/unassign` |
| Change DNS PTR | `POST /primary_ips/{id}/actions/change_dns_ptr` |
| Change Protection | `POST /primary_ips/{id}/actions/change_protection` |

---

## DNS Zones

Manage DNS zones and records. Supports all zone names with well-known public suffixes (e.g., `.de`, `.com`, `.co.uk`). Subdomains are not supported.

### Zone Modes

- **Primary** - Manage RRSets via API/Console. Hetzner automatically increases SOA record serial (YYYYMMDDnn format).
- **Secondary** - Hetzner nameservers query RRSets from given primary nameservers via AXFR.

> **Note:** Zone mode cannot be changed after creation. Delete and recreate the zone to change modes.

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/zones` | List zones |
| POST | `/zones` | Create zone |
| GET | `/zones/{id_or_name}` | Get zone |
| PUT | `/zones/{id_or_name}` | Update zone |
| DELETE | `/zones/{id_or_name}` | Delete zone |
| GET | `/zones/{id_or_name}/zonefile` | Export zone file |

### Zone Actions

| Action | Endpoint |
|--------|----------|
| Import Zone File | `POST /zones/{id}/actions/import_zonefile` |
| Change TTL | `POST /zones/{id}/actions/change_ttl` |
| Change Protection | `POST /zones/{id}/actions/change_protection` |
| Change Primary Nameservers | `POST /zones/{id}/actions/change_primary_nameservers` |

### RRSets (Resource Record Sets)

The API operates on resource record sets (RRSets) instead of individual resource records (RRs). An RRSet is identified by a **name** and **type**. For example, these two RRs:
- `(name: @, type: MX, value: 10 smtp.example.com.)`
- `(name: @, type: MX, value: 20 smtp-backup.example.com.)`

...are part of the RRSet identified by `(name: @, type: MX)`.

See [Hetzner Docs](https://docs.hetzner.com/dns-console/dns/general/record-types/) for more information on record types.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/zones/{id}/rrsets` | List RRSets |
| POST | `/zones/{id}/rrsets` | Create RRSet |
| GET | `/zones/{id}/rrsets/{name}/{type}` | Get RRSet |
| PUT | `/zones/{id}/rrsets/{name}/{type}` | Update RRSet |
| DELETE | `/zones/{id}/rrsets/{name}/{type}` | Delete RRSet |

### RRSet Actions

| Action | Endpoint |
|--------|----------|
| Set Records | `POST /zones/{id}/rrsets/{name}/{type}/actions/set_records` |
| Add Records | `POST /zones/{id}/rrsets/{name}/{type}/actions/add_records` |
| Remove Records | `POST /zones/{id}/rrsets/{name}/{type}/actions/remove_records` |
| Update Records | `POST /zones/{id}/rrsets/{name}/{type}/actions/update_records` |
| Change TTL | `POST /zones/{id}/rrsets/{name}/{type}/actions/change_ttl` |
| Change Protection | `POST /zones/{id}/rrsets/{name}/{type}/actions/change_protection` |

### Zone File Import

Zone file import (BIND RFC 1034/1035 format) is only for zones in **primary mode**.

**Import Rules:**
- `$ORIGIN` directive is optional but must match Zone name with ending dot
- `$TTL` directive is optional and sets default Zone TTL
- Only `IN` (internet) class records allowed
- Assigned Hetzner nameservers must be present as NS records
- SOA record must be present
- Comments for individual records are imported; standalone comments are discarded

**Example Zone File:**

```
$ORIGIN example.com.
$TTL    3600

@   IN  SOA   hydrogen.ns.hetzner.com. dns.hetzner.com. 2024010100 86400 10800 3600000 3600

@   IN  10800  NS    hydrogen.ns.hetzner.com. ; Comment preserved
@   IN  10800  NS    oxygen.ns.hetzner.com.
@   IN  10800  NS    helium.ns.hetzner.de.
```

---

## SSH Keys

Public keys for server authentication. SSH keys are injected into Servers at creation time.

> **Strongly recommended:** Use SSH keys instead of passwords to manage your Servers.

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/ssh_keys` | List SSH keys |
| POST | `/ssh_keys` | Create SSH key |
| GET | `/ssh_keys/{id}` | Get SSH key |
| PUT | `/ssh_keys/{id}` | Update SSH key |
| DELETE | `/ssh_keys/{id}` | Delete SSH key |

---

## Certificates

TLS/SSL Certificates prove the identity of a Server and are used to encrypt client traffic.

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/certificates` | List certificates |
| POST | `/certificates` | Create certificate |
| GET | `/certificates/{id}` | Get certificate |
| PUT | `/certificates/{id}` | Update certificate |
| DELETE | `/certificates/{id}` | Delete certificate |

### Certificate Actions

| Action | Endpoint |
|--------|----------|
| Retry | `POST /certificates/{id}/actions/retry` |

---

## Locations & Datacenters

### Locations

Physical locations where servers are hosted.

| Method | Endpoint |
|--------|----------|
| GET | `/locations` |
| GET | `/locations/{id}` |

### Datacenters

Virtual datacenters within locations. Each Datacenter represents a virtual Datacenter which is made up of possibly many physical Datacenters where Servers are hosted.

See [Hetzner Locations Docs](https://docs.hetzner.com/cloud/general/locations/) for more details.

| Method | Endpoint |
|--------|----------|
| GET | `/datacenters` |
| GET | `/datacenters/{id}` |

---

## Placement Groups

Influence server placement for availability. By enforcing rules on where servers are placed, you can improve availability to fit your needs.

- **Spread** - All servers run on different physical hosts, decreasing the probability that multiple servers fail together

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/placement_groups` | List groups |
| POST | `/placement_groups` | Create group |
| GET | `/placement_groups/{id}` | Get group |
| PUT | `/placement_groups/{id}` | Update group |
| DELETE | `/placement_groups/{id}` | Delete group |

---

## ISOs

Read-only DVD images for custom OS installation. While Hetzner recommends using their Image functionality, stock ISOs are provided for exotic OS installations.

On request, Hetzner support can upload a **private ISO** just for you. These are marked with `type: private` and only visible in your Project.

To attach an ISO to your Server, use `POST /servers/{id}/actions/attach_iso`.

**ISO Types:** `public` (standard) or `private` (uploaded by support for you)

**ISO Response includes:**
- `architecture` - `x86` or `arm`
- `deprecation` - Optional object with `announced` and `unavailable_after` timestamps

| Method | Endpoint |
|--------|----------|
| GET | `/isos` |
| GET | `/isos/{id}` |

---

## Pricing

Get resource prices. VAT and currency are based on the Project owner's account.

```bash
curl https://api.hetzner.cloud/v1/pricing \
  -H 'Authorization: Bearer YOUR_TOKEN'
```

**Response includes:**
- `currency` - Currency code (e.g., "EUR")
- `vat_rate` - VAT rate percentage (e.g., "19.00")

**Price categories:**
- Server types (hourly/monthly per location, plus traffic pricing)
- Load balancer types (hourly/monthly per location, plus traffic pricing)
- Primary IPs (hourly/monthly per location)
- Floating IPs (monthly per location)
- Images (per GB/month for snapshots)
- Volumes (per GB/month)
- Server backups (percentage of server cost, e.g., "20.00")

> Both `net` and `gross` prices are included in all pricing responses.

---

## Actions

All asynchronous operations return an Action object showing results and progress.

> **Note:** The `/actions` list endpoint was deprecated in July 2023 and removed in January 2025. Use resource-specific action endpoints (e.g., `/servers/{id}/actions`) instead.

```json
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2024-01-30T23:55:00Z",
    "finished": null,
    "progress": 50,
    "resources": [{ "id": 42, "type": "server" }],
    "error": null
  }
}
```

**Action Fields:**
- `id` - Unique Action ID
- `command` - Command name (e.g., `start_resource`, `create_server`)
- `status` - Current status (e.g., `running`)
- `progress` - Progress percentage (0-100)
- `started` - Start timestamp
- `finished` - Completion timestamp (null while running)
- `resources` - Array of affected resources (id + type)
- `error` - Error object on failure with `code` and `message`

### Get Actions by ID

```bash
# Get multiple actions by ID (the only remaining way to query /actions)
curl 'https://api.hetzner.cloud/v1/actions?id=42&id=43' \
  -H 'Authorization: Bearer YOUR_TOKEN'
```

### Get Action Status

```bash
curl https://api.hetzner.cloud/v1/actions/42 \
  -H 'Authorization: Bearer YOUR_TOKEN'
```

