# Keen David Aguro — Portfolio

Personal portfolio and blog of Keen David Aguro, a full-stack software developer
(.NET, Angular, Laravel) based in Manila, Philippines.

**Live:** [keendavidaguro-portfolio.vercel.app](https://keendavidaguro-portfolio.vercel.app/)

![Hero section of the portfolio in the light theme](public/portfolio-preview.png)

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS 4** with a custom token-based design system
- **Framer Motion** for the hero entrance and the project modal, **Lucide** icons
- **Markdown blog** — `gray-matter`, `react-markdown`, `remark-gfm`, `rehype-highlight`
- **Vercel** hosting, Analytics, and Speed Insights

## How it's built

- **Content is server-rendered.** `app/page.tsx` is an async Server Component that
  loads projects, experience, and the latest posts, then passes them to the sections as
  props. Everything is in the initial HTML, so search engines and link previews see it.
- **Nothing is hardcoded that can be computed.** Years of experience are derived from
  the earliest start date in `data/experience.ts`, and the project counts come from
  `data/projects.ts`. Static pages revalidate daily, so the numbers stay current
  without a redeploy.
- **The GitHub section only shows real data.** `app/api/github/route.ts` fetches repos,
  stars, and the contribution calendar (cached for an hour). If the calendar can't be
  loaded, the page links to GitHub instead of drawing placeholder cells.
- **SEO is generated, not hand-written.** The Open Graph image, `sitemap.xml`, and
  `robots.txt` are built from the same data as the page (`app/opengraph-image.tsx`,
  `app/sitemap.ts`, `app/robots.ts`).
- **Accessible by default.** Project cards are keyboard-operable, icon buttons are
  labelled, and motion is limited to the hero and modal.

## Design

A light, "systems status" look: paper-white surfaces, one blue accent, and green used
only for real status (current roles, live systems). Dark mode is opt-in from the
navbar toggle and remembered per visitor.

Colours are CSS variables in `app/globals.css`, exposed as Tailwind utilities:

| Token | Use |
| --- | --- |
| `paper`, `paper-raised` | Page and card backgrounds |
| `ink`, `slate` | Primary and secondary text |
| `line` | Borders and rules |
| `signal`, `signal-dim` | Links, buttons, focus, accents |
| `live`, `live-dim` | Literal status only ("Current", "Live in production") |

Type is **Space Grotesk** for headlines, **Geist Sans** for body text, and
**Geist Mono** in uppercase for metadata labels (dates, tech lists, eyebrows).

## Project structure

```
app/
  layout.tsx              Fonts, SEO metadata, theme-init script, analytics
  page.tsx                Home page: loads data and composes all sections
  globals.css             Design tokens + hand-written .blog-prose styles
  opengraph-image.tsx     Generated link-preview image
  sitemap.ts, robots.ts   Generated sitemap.xml / robots.txt
  api/github/route.ts     GitHub stats + contribution calendar
  blog/                   Blog index and [slug] post pages (static)
components/               One file per section + shared Button, Badge, Modal
content/blog/             Blog posts (Markdown, filename = slug)
data/                     projects.ts, experience.ts, services.ts
lib/                      blog.ts (post loading), site.ts (SITE_URL), utils.ts (cn)
services/projectService.ts  Async wrapper over data/projects.ts
public/                   Profile photo, resume.pdf, project screenshots
```

## Running locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server at http://localhost:3000 |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `GITHUB_PAT` | Optional | GitHub token for the contribution calendar (GitHub's GraphQL API needs auth). A read-only token is enough. Without it, the graph shows a "View on GitHub" link instead. |

Put it in `.env.local` locally and in the Vercel project settings for production.

## Updating content

| What | Where | Notes |
| --- | --- | --- |
| Projects | `data/projects.ts` | `featured: true` puts a project in the main grid; the rest go under "Other builds". Screenshots go in `public/projects/<project>/`. |
| Experience | `data/experience.ts` | Write periods as `Mon YYYY – Mon YYYY` or `Mon YYYY – Present`; the years-of-experience count is parsed from them. |
| Services and rates | `data/services.ts` | PHP ranges shown in the Consulting section. |
| Resume | `public/resume.pdf` | Linked from the navbar, hero, and Projects section. |
| README preview | `public/portfolio-preview.png` | Screenshot of the hero at 1440×900. |

## Writing a blog post

Add `content/blog/<slug>.md`:

```md
---
title: "Post title"
description: "One-sentence summary for the index and SEO."
date: "2026-11-17"
tags: ["dotnet", "career"]
published: true
---

Post body in Markdown…
```

Set `published: false` to keep a draft out of the index, its URL, and the sitemap.

## Deployment

Pushes to `main` deploy to production on Vercel; other branches get preview
deployments. Set `GITHUB_PAT` in the Vercel project's environment variables.

## Notes for AI coding agents

Design-system rules and content conventions live in [`AGENTS.md`](AGENTS.md)
(mirrored in `.github/copilot-instructions.md`).

## License

[MIT](LICENSE)
