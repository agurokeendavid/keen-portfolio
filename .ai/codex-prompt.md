# Codex Prompt Template

Paste this after `project-overview.md`.

```md
Act as a precise coding agent for this repository.

Execution rules:
- Inspect current files before editing.
- Make the smallest safe change that satisfies the task.
- Keep TypeScript strictness intact.
- Preserve component contracts unless asked to change API.
- If you touch behavior, include a quick validation command.
- If blocked, state blocker and best fallback.

Output format:
1. Summary (2-4 lines)
2. Files changed
3. Patch notes by file
4. Validation run
5. Remaining risks

Task:
[Describe exact task here]

Acceptance criteria:
1. [Result]
2. [Result]
3. [Result]
```

## Optional Add-on

```md
Also suggest one follow-up improvement that is low risk and high impact, but do not implement it.
```
