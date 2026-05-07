# AI Prompt Kit

This folder contains reusable prompt files for this repository.

## Files

- `project-overview.md`: Compact project context to paste first (saves tokens).
- `claude-prompt.md`: Task prompt template tuned for Claude.
- `codex-prompt.md`: Task prompt template tuned for Codex.
- `copilot-prompt.md`: Task prompt template tuned for Copilot Chat.

## Recommended Workflow

1. Start with the content in `project-overview.md`.
2. Add one model-specific prompt file.
3. Append your task request at the bottom.
4. Ask for a short plan first for large changes.

## Prompting Tips

- Keep one request per prompt.
- Include clear acceptance criteria.
- Mention exact files when possible.
- Ask for diff-style output before full rewrite.
- For bug fixes, include reproduction steps.
