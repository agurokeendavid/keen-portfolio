# AI Prompt Examples

Use these examples when asking Claude, Codex, or Copilot to help with this portfolio project. Start by pasting `.ai/project-overview.md`, then add one of the prompts below.

## Quick Choice

- Use Claude when you want options, architecture, review, or trade-offs before coding.
- Use Codex when you want a scoped change implemented and validated.
- Use Copilot when you are editing inside one file and want a focused local change.

## Shared Context To Include

```md
Project context:
- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Premium monochrome portfolio UI
- Keep changes scoped and avoid unrelated refactors
- Do not add backend work unless requested
- Do not add dependencies unless clearly justified

Relevant files:
- app/layout.tsx
- app/page.tsx
- components/HeroSection.tsx
- components/ContactSection.tsx
- components/Modal.tsx
```

## Claude Example

Use this when the task is still ambiguous and you want Claude to reason before implementation.

```md
Use `.ai/project-overview.md` as the base project context.

You are helping plan a change for my Next.js portfolio project.

Goal:
Improve the first impression of the portfolio homepage while preserving the premium monochrome design.

Relevant files:
- app/layout.tsx
- app/page.tsx
- components/HeroSection.tsx
- components/ContactSection.tsx

Constraints:
- Do not add new dependencies.
- Keep the current design direction: black, white, grayscale, polished, minimal.
- Keep changes mobile-first and responsive.
- Do not implement code yet.

Please provide:
1. 2-3 implementation options with trade-offs.
2. The files likely affected by each option.
3. Risks or edge cases.
4. Your recommended option and why.

Acceptance criteria:
1. Homepage feels more polished above the fold.
2. Existing sections and navigation remain intact.
3. The approach is small enough to implement safely.
```

## Codex Example

Use this when you want Codex to directly edit files and run validation.

```md
Use `.ai/project-overview.md` as repo context.

Task:
Update the hero section so the homepage has a stronger above-the-fold presentation while preserving the current monochrome portfolio style.

Allowed files:
- components/HeroSection.tsx
- app/page.tsx only if section composition needs to change

Out of scope:
- Do not change backend/service files.
- Do not add dependencies.
- Do not redesign unrelated sections.

Acceptance criteria:
1. Hero remains responsive on mobile and desktop.
2. Visual style stays premium monochrome.
3. Existing buttons, links, and motion behavior still work.
4. TypeScript remains valid.

Validation:
- Run `npm run lint`.
- Run `npm run build` if layout or app behavior changes.

Return:
1. Summary.
2. Files changed.
3. Patch notes by file.
4. Validation run.
5. Remaining risks.
```

## Copilot Example

Use this inside the file you are actively editing, especially for small local changes.

```md
In this file, make a focused improvement to the component.

Task:
Polish the spacing, responsive layout, and Tailwind classes without changing the component API.

Requirements:
- Preserve the current monochrome visual style.
- Keep TypeScript strictness intact.
- Do not add dependencies.
- Reuse existing patterns in this file.
- Avoid editing unrelated components.

Acceptance criteria:
1. The component looks better on mobile and desktop.
2. No prop names or exported component names change.
3. The change is small and easy to review.
```

## Bug Fix Prompt

Use this for any AI tool when something is broken.

```md
Use `.ai/project-overview.md` as context.

Bug:
[Describe what is broken.]

Expected behavior:
[Describe what should happen.]

Actual behavior:
[Describe what happens now.]

Relevant files:
- [file path]
- [file path]

Constraints:
- Fix the root cause with the smallest safe change.
- Do not refactor unrelated code.
- Do not add dependencies unless necessary.

Acceptance criteria:
1. The bug no longer happens.
2. Existing behavior still works.
3. Relevant validation passes.

Validation:
- Run `npm run lint`.
- Run `npm run build` if the fix affects rendering or app behavior.
```

## UI Change Prompt

Use this for visual changes.

```md
Use `.ai/project-overview.md` as context.

Task:
[Describe the UI change.]

Design direction:
- Premium monochrome portfolio design.
- Clean spacing, strong hierarchy, subtle motion.
- Mobile-first responsive layout.
- Avoid decorative clutter.

Relevant files:
- components/[ComponentName].tsx
- app/page.tsx if section order changes

Acceptance criteria:
1. The UI works at mobile, tablet, and desktop sizes.
2. Text does not overlap or overflow.
3. Interactive elements remain accessible.
4. Existing content and links still work.
```

## Review Prompt

Use this when you want a code review instead of implementation.

```md
Use `.ai/project-overview.md` as context.

Review these files for bugs, regressions, accessibility issues, and missing validation:
- [file path]
- [file path]

Please return:
1. Findings first, ordered by severity.
2. File and line references where possible.
3. Open questions or assumptions.
4. Suggested fixes, but do not implement them yet.
```
