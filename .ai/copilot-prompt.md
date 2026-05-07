# Copilot Prompt Template

Paste this after `project-overview.md`.

```md
Use the repository context and implement the task directly.

Requirements:
- Keep edits scoped to requested files.
- Follow existing Next.js App Router patterns.
- Keep UI consistent with current monochrome theme.
- Reuse existing utilities/components where possible.
- Run relevant checks after editing.

Return:
- What changed and why
- File-by-file summary
- Commands run and key output
- Any open issues

Task:
[Describe exact task here]

Allowed files:
- [file path]
- [file path]

Acceptance criteria:
1. [Result]
2. [Result]
3. [Result]
```

## Optional Add-on

```md
If there are multiple implementation options, choose the least risky one and explain why.
```
