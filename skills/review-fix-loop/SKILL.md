---
name: review-fix-loop
description: Orchestrate an iterative code review and fix loop with Codex subagents. Use when asked to repeatedly review a local change set, staged changes, branch, or PR, delegate review to xhigh subagents using the code-review skill, have the same reviewer fix discovered issues, and repeat with fresh reviewers until no actionable findings remain.
---

# Review Fix Loop

Act as the parent orchestrator for a review-and-fix loop. Keep the user informed in simple, clear language while subagents do the review and fix work.

## Workflow

1. Identify the target change set: local uncommitted changes, staged changes, a branch diff, or a PR. If the target is ambiguous, ask one concise clarifying question.
2. Spawn one reviewer subagent with `reasoning_effort: "xhigh"` and no model override. Use the default agent unless the current tool surface requires another general coding agent type.
3. Give the reviewer the target change set and the available `$code-review` skill. Tell it to review only and return the `code-review` JSON output, with no fixes.
4. Wait for the review result. If there are no findings, stop the loop and report that no actionable findings remain.
5. If findings exist, summarize them to the user before triggering fixes. Use plain language, grouped by finding, with file path, priority, risk, and the intended fix direction.
6. Send the findings back to the same reviewer subagent and instruct it to fix only those issues. The same agent that found the issues owns the fix pass.
7. Review and integrate the fix agent's changed files into the parent workspace when the subagent works in a forked workspace. Do not overwrite unrelated user or agent changes.
8. Run the relevant verification after fixes. Use project instructions for commands and choose the narrowest relevant checks.
9. Spawn a fresh xhigh reviewer subagent for the next review pass. Do not reuse the fixing reviewer for the next independent review.
10. Repeat until a fresh reviewer reports no actionable findings.

## Subagent Instructions

For each review subagent, include:

- Use the available `$code-review` skill.
- Review the target change set only.
- Do not fix anything during the review pass.
- Return the required JSON review output and no extra prose.
- Focus on bugs the original author would likely fix.

For each fix pass sent to the same subagent, include:

- Fix only the findings from your own review.
- Make the smallest correct changes.
- Follow repo instructions and preserve unrelated changes.
- Run the narrowest relevant verification you can; report commands and results.
- Return a concise summary of changed files, fixes made, and verification.

## User Updates

After every review result and before any fix pass, tell the user:

- Whether the reviewer found issues.
- The issue count and priorities.
- What each issue means in one short sentence.
- What the fix pass will attempt next.

Keep user-facing updates concise and concrete. Avoid raw JSON unless the user asks for it.

## Stop Conditions

Stop and ask the user before continuing if:

- The same finding survives two fix attempts.
- A fix requires scope beyond the reviewed change set.
- Verification fails for reasons unrelated to the findings.
- A subagent cannot access the target change set or required skill.

When the loop completes, provide a final summary with the number of review passes, issues found, issues fixed, verification run, and any residual risk.
