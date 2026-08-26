---
name: partitioned-review-fix-loop
description: Partition a very large branch, PR, or working-tree change set into non-overlapping ownership lanes and orchestrate parallel, iterative review-fix loops with Codex subagents. Use when asked to review a large change set all at once, run multiple review agents without overlapping edits, focus only on critical P0/P1 defects, keep a durable findings ledger, and finish with a whole-diff integration review and repository quality gate.
---

# Partitioned Review Fix Loop

Act as the root orchestrator for several independent `$review-fix-loop` workflows. Maximize useful parallelism without allowing reviewers to overwrite or duplicate one another's work.

## Establish the contract

1. Read all repository instructions and the available `$review-fix-loop`, `$code-review`, `$git-diff`, and testing skills before acting. Use equivalent capabilities when a named dependency is unavailable.
2. Resolve the exact review target and base. Include committed, staged, unstaged, and untracked changes in scope unless the user says otherwise.
3. Default to P0/P1 findings only. Treat the invocation as authorization to create one review ledger at `.notes/PARTITIONED_REVIEW_FIX_LOOP_LOG.md`; if the user provides another path, use it instead.
4. Preserve unrelated user changes. Never reset, discard, commit, or publish changes unless separately authorized.

## Design exclusive partitions

Inventory every changed path before spawning reviewers. Partition by cohesive ownership and runtime coupling, not equal file counts. Typical seams include:

- domain logic and persistence;
- billing, authorization, or another bounded service;
- agent/runtime adapters;
- client state and reusable UI;
- application routing and composition;
- API, generated contracts, and clients;
- migrations, deployment, and repository policy;
- documentation and repository hygiene.

Apply these rules:

- Assign every changed path to exactly one writable lane. Record explicit allowed paths or globs for each lane.
- Put tests with the production code they verify.
- Keep tightly coupled producer/consumer contracts in one lane when practical.
- Reserve shared generated files, lockfiles, migration journals, root configuration, and other high-contention files for one named lane or the root integration pass.
- Allow every agent to read the entire repository, but allow writes only inside its lane.
- Merge tiny lanes that cannot usefully progress alone. Split a lane when it contains several independent risk surfaces.
- Record cross-lane dependencies and an escalation owner before work begins.
- Leave one concurrency slot for the root orchestrator. Schedule excess lanes in waves rather than exceeding the available agent limit.

Before launching work, verify that the lane map covers the complete change manifest with no overlapping write ownership.

## Create the ledger

The root orchestrator alone writes the ledger. Initialize it before review work with:

- review target, base, starting HEAD, date, and severity policy;
- the partition table with owned paths, status, review passes, and P0/P1 found/fixed counts;
- findings and fixes grouped by partition;
- verification commands and outcomes;
- cross-partition escalations and ownership transfers;
- formatter, generator, migration, or other material side effects;
- residual risks and blockers.

Update it after every review and fix pass so interrupted work remains auditable. Distinguish distinct defects from duplicated lane/integration records when reporting totals.

## Run each lane loop

Run as many lanes concurrently as capacity safely allows. Prefer one lane lead per partition when subagents can themselves delegate; otherwise flatten orchestration and have the root schedule each lane's reviewers directly.

For every lane:

1. Spawn a review-only subagent with `reasoning_effort: "xhigh"` and no model override.
2. Give it the review base, complete target, exact writable paths, read-only allowance for the rest of the repository, and any known cross-lane contracts.
3. Require the available `$code-review` skill and its exact JSON output. Instruct it to return only P0/P1 findings and no fixes.
4. Reject bikeshedding, style, naming, cleanup, documentation polish, speculative hardening, P2/P3 issues, and pre-existing defects outside the target.
5. If it reports findings, send those findings back to the same reviewer. The finding author owns the fix pass.
6. Require the smallest complete fix, a regression reproduction when practical, narrow lane-safe verification, and a concise report of files changed.
7. Spawn a fresh review-only subagent for the next pass. Never use the fixing reviewer as the independent follow-up reviewer.
8. Continue until a fresh reviewer reports no P0/P1 findings.

Use this severity boundary:

- **P0:** universal release stop, active critical vulnerability, irreversible widespread corruption, or comparable emergency.
- **P1:** concrete urgent correctness, authorization, tenant-isolation, data-integrity, availability, production-reliability, or release-blocking defect introduced by the target change.

A required build, typecheck, lint, migration, or test failure caused by the target is P1 when it blocks release. Record unrelated or pre-existing failures separately; do not expand the fix scope silently.

## Enforce lane safety

Include these constraints in every lane prompt:

- Modify only the assigned paths. Do not opportunistically fix adjacent code.
- Do not run repository-wide autoformatters, generators, migration tools, or quality gates while other lanes are writing.
- Use exact-file or package-scoped checks during parallel work.
- Stop and report any required out-of-lane change to the root orchestrator. Do not make it.
- Preserve all unrelated edits visible in the shared workspace.

When a finding spans lanes, assign one integration owner. Pause conflicting writers, update the ledger and ownership map, then make the cross-lane fix once. Never let two agents independently edit the same contract.

## Reviewer prompt skeleton

Adapt this compact contract for each review pass:

```text
Review only the target diff against <base> for partition <name>.
Writable scope for later fixes: <paths>. You may read the full repository.
Use $code-review and return its exact JSON only. Do not edit files.
Report only P0/P1 defects introduced by this change. Ignore P2/P3, style,
cleanup, speculative hardening, and unrelated pre-existing issues.
If a necessary fix crosses the writable scope, report it as a blocker.
```

For the fix pass, explicitly restate the allowed paths and provide only that reviewer's findings.

## Integrate after lanes are clean

Wait until no lane is writing, then serialize integration work:

1. Inspect the complete diff and ledger for uncovered paths, overlapping edits, generated-file drift, and cross-lane contract mismatches.
2. Spawn a fresh xhigh reviewer over the entire change set with the same P0/P1-only policy.
3. Route a contained finding back to its lane owner. Handle a truly cross-partition finding through the named integration owner with all conflicting lane work paused.
4. Repeat fresh whole-diff review passes until clean.
5. Run the repository's canonical root integrity gate exactly as its instructions require. Record any files mutated by formatters or generators, review those mutations, and rerun affected checks.
6. Run a final whitespace/diff integrity check and inspect workspace status. Do not remove unrelated artifacts.

Never run the final whole-repository gate concurrently with active fix agents.

## Communicate and stop

Give the user concise progress updates when partitions start, a lane finds P0/P1 issues, a cross-lane escalation occurs, a lane becomes clean, and the final gate begins or ends.

Stop and request direction when:

- the review target or base cannot be determined safely;
- the same defect survives two fix attempts;
- a necessary fix materially exceeds the authorized change set;
- shared-file ownership cannot be made exclusive;
- verification is blocked by an external dependency or unrelated failure after safe checks are exhausted.

Finish with the clean/blocked status, distinct P0/P1 counts, verification result, residual risks, and a link to the ledger. The final response must be self-contained.
