# Project Overview (Token Saver)

Use this file as shared context before requesting code changes.

## Repo Snapshot

- Name: keen-portfolio
- Type: Personal portfolio web app
- Frontend: Next.js 16 (App Router), React 19, TypeScript
- Styling: Tailwind CSS 4, `clsx`, `tailwind-merge`, `class-variance-authority`
- Animation: Framer Motion
- Icons: Lucide React
- Fonts: Space Grotesk (headlines), Geist Sans (body), Geist Mono (labels) via next/font/google
- Blog: Markdown in `content/blog/` (gray-matter, react-markdown, remark-gfm, rehype-highlight)
- No third-party chat widget (Tawk.to was removed on purpose)
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

- `app/layout.tsx`: Root layout, SEO metadata, fonts, theme-init script, analytics
- `app/page.tsx`: Server Component; loads projects + latest posts and composes all page sections in order
- `app/opengraph-image.tsx`, `app/sitemap.ts`, `app/robots.ts`: generated OG image, sitemap, robots
- `app/blog/`: blog index and `[slug]` post pages (statically generated)
- `app/api/github/route.ts`: GitHub API route — fetches public repos and contribution calendar via GraphQL
- `components/`: UI sections and reusable UI parts
	- **Page sections**: `Navbar`, `HeroSection`, `SkillsStrip`, `ExperienceSection`, `ProjectsSection`, `OpenSourceSection`, `BlogTeaserSection`, `ConsultingSection`, `ContactSection`, `Footer`
	- **Reusable UI**: `Badge`, `Button`, `Modal`, `ProjectCard`, `ProjectModal`
- `data/projects.ts`: Project definitions and tech stack data
- `data/experience.ts`: Work experience data
- `data/services.ts`: Consulting offerings + PHP rate ranges
- `content/blog/*.md`: Blog posts (filename = slug); `lib/blog.ts` loads them (server-only)
- `services/projectService.ts`: Local service layer, prepared for future .NET API
- `lib/utils.ts`: Shared utility helpers (`cn` with clsx + tailwind-merge)
- `lib/site.ts`: `SITE_URL` canonical production URL
- `public/projects/*`: Project image assets

## Current UI Direction

- "Systems status" look: paper-white first, blue `signal` accent, green `live` only for real status; tokens in `app/globals.css` (see AGENTS.md)
- Mono uppercase labels (Geist Mono) for metadata/eyebrows
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
