# Project Overview (Token Saver)

Use this file as shared context before requesting code changes.

## Repo Snapshot

- Name: keen-portfolio
- Type: Personal portfolio web app
- Frontend: Next.js 16.2.5 (App Router), React 19, TypeScript
- Styling: Tailwind CSS 4, `clsx`, `tailwind-merge`, `class-variance-authority`
- Animation: Framer Motion
- Icons: Lucide React
- Fonts: Geist Sans & Geist Mono (next/font/google)
- Live chat: Tawk.to (via `TawkToWidget`)
- Analytics: Vercel Analytics + Speed Insights
- Deployment: Vercel (`https://keendavidaguro-portfolio.vercel.app`)
- Package manager: npm
- Path alias: `@/*` -> project root

## Main Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## App Structure

- `app/layout.tsx`: Root layout, SEO metadata, fonts, analytics, Tawk.to
- `app/page.tsx`: Composes all page sections in order
- `app/api/github/route.ts`: GitHub API route — fetches public repos and contribution calendar via GraphQL
- `components/`: UI sections and reusable UI parts
	- **Page sections**: `Navbar`, `HeroSection`, `AboutSection`, `ExperienceSection`, `ProjectsSection`, `OpenSourceSection`, `ContactSection`, `Footer`
	- **Reusable UI**: `Badge`, `Button`, `Modal`, `ProjectCard`, `ProjectModal`, `TawkToWidget`
- `data/projects.ts`: Project definitions and tech stack data
- `data/experience.ts`: Work experience data
- `services/projectService.ts`: Local service layer, prepared for future .NET API
- `lib/utils.ts`: Shared utility helpers (`cn` with clsx + tailwind-merge)
- `public/projects/*`: Project image assets

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
