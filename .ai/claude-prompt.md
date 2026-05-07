# Claude Prompt Template

Paste this after `project-overview.md`.

```md
You are helping on a Next.js 16 + TypeScript portfolio project.

Instructions:
- Read and follow the provided project overview.
- Keep changes minimal and targeted.
- Preserve existing monochrome design language unless asked otherwise.
- Do not modify unrelated files.
- Explain assumptions before coding if requirements are ambiguous.
- Before implementation, provide 2-3 implementation options with trade-offs and ask me to choose one.
- Return:
  1) implementation options (before coding),
  2) short plan,
  3) exact file changes,
  4) validation steps,
  5) risks and follow-ups,
  6) checklist mapping each acceptance criterion to pass/fail.

Task:
[Describe exact task here]

Constraints:
- [Example: no new dependencies]
- [Example: only edit components/ProjectModal.tsx]

Acceptance criteria:
1. [Result]
2. [Result]
3. [Result]

Checklist (required in final response):
- Criterion 1: [Pass/Fail + evidence]
- Criterion 2: [Pass/Fail + evidence]
- Criterion 3: [Pass/Fail + evidence]
```
