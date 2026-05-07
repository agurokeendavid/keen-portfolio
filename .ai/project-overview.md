# Project Overview (Token Saver)

Use this file as shared context before requesting code changes.

## Repo Snapshot

- Name: keen-portfolio
- Type: Personal portfolio web app
- Frontend: Next.js 16 (App Router), React 19, TypeScript
- Styling: Tailwind CSS 4
- Animation: Framer Motion
- Icons: Lucide React
- Package manager: npm
- Path alias: `@/*` -> project root

## Main Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## App Structure

- `app/layout.tsx`: Root layout + metadata
- `app/page.tsx`: Composes page sections
- `components/*`: UI sections and reusable UI parts
- `data/projects.ts`: Project and tech stack data source
- `services/projectService.ts`: Local service layer, prepared for future .NET API
- `lib/utils.ts`: Shared utility helpers
- `public/projects/*`: Project assets

## Current UI Direction

- Premium monochrome look (black, white, grayscale)
- Responsive mobile-first layout
- Motion-based interactions and modals

## Coding Conventions

- Strict TypeScript enabled
- Functional React components
- Use `"use client"` only where needed
- Prefer small, composable components
- Keep existing visual style unless explicitly asked to redesign

## Non-Goals (Unless Requested)

- Do not add backend implementation yet
- Do not introduce unrelated dependencies
- Do not refactor unrelated files

## Change Request Template

Copy and fill:

```md
Task:

Why:

Scope:
- In scope:
- Out of scope:

Files allowed to change:

Acceptance criteria:
1.
2.
3.

Validation:
- Commands to run:
- Expected result:
```
