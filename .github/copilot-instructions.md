<!--
  Canonical copy of this project's AI-agent overview lives in AGENTS.md at the repo
  root (also read by Codex, and by Claude Code via CLAUDE.md's `@AGENTS.md` import).
  Copilot doesn't resolve that import, so this file mirrors the content directly.
  Keep the two in sync — when AGENTS.md's "Project overview" section changes, update
  this file to match.
-->

# Project overview — Keen David Aguro portfolio

Personal portfolio site. Next.js 16 (App Router, Turbopack), React 19, TypeScript,
Tailwind CSS v4, Framer Motion. Single page (`app/page.tsx`) composed of section
components rendered in order: Navbar, HeroSection, SkillsStrip, ExperienceSection,
ProjectsSection, OpenSourceSection, BlogTeaserSection, ConsultingSection,
ContactSection, Footer.

## Structure

- `app/layout.tsx` — fonts, metadata/SEO, theme-init script.
- `app/globals.css` — design tokens (see below).
- `app/api/github/route.ts` — GitHub stats + contribution calendar (needs `GITHUB_PAT`
  env var for the calendar; without it, returns `contributions: null`).
- `components/` — one file per page section, plus shared `Button`, `Badge`, `Modal`.
- `data/projects.ts` — `Project[]` and `TechItem[]` (techStack). Single source of truth
  for project and skills content.
- `data/experience.ts` — work history for `ExperienceSection`.
- `data/services.ts` — `Service[]` (offerings + PHP pricing) plus `formatPeso()`, for
  `ConsultingSection`.
- `services/projectService.ts` — thin async wrapper around `data/projects.ts`, written
  to be swapped for a real API later; don't bypass it from components.

## Design system ("systems status" aesthetic)

White/paper-first by deliberate choice — not a default light theme, a specific
identity: precision/engineering-status look (the subject is a developer who builds
monitoring dashboards for government/energy clients).

- Tokens live in `app/globals.css` under `:root` / `.dark` and are exposed as Tailwind
  utilities via `@theme inline`: `paper`, `paper-raised`, `ink`, `slate`, `line`,
  `signal` (blue accent — links, CTAs, focus), `signal-dim`, `live` (green — reserved
  for literal status: "available now", "production/live" badges), `live-dim`.
  Always use these tokens (`bg-paper`, `text-ink`, `border-line`, etc.) instead of raw
  Tailwind grays or `black`/`white`, and never reintroduce hardcoded
  `dark:bg-*`/`dark:text-*` pairs — the token system already handles dark mode via the
  `.dark` class.
- Fonts (`app/layout.tsx`, via `next/font/google`): **Space Grotesk** (`font-display`)
  for headlines, **Geist Sans** (default body), **Geist Mono** (`font-mono`) for
  status/metadata labels (dates, tech tags, eyebrows like "LIVE IN PRODUCTION"). This
  mono-label motif is the site's signature — reuse it for new metadata-like copy
  rather than inventing a new treatment.
- Theme default is **always light** regardless of OS preference. `layout.tsx`'s
  `theme-init` script and `Navbar.tsx`'s `getPreferredDarkMode` only enable dark mode
  if `localStorage.theme === 'dark'` (i.e. the visitor toggled it themselves) — do not
  reintroduce a `prefers-color-scheme` check for the initial value.

## Content conventions

- No About section — it was removed as redundant with Hero/Experience. Any new
  "who I am" copy belongs in `HeroSection.tsx`, kept short.
- `Project.featured` in `data/projects.ts` drives the Featured vs. "Other builds" split
  in `ProjectsSection.tsx`/`ProjectCard.tsx`. Featured = live/production enterprise
  systems; Other = smaller or lower-stakes builds. Keep `features` arrays to 3-5
  outcome-oriented bullets, not exhaustive feature inventories.
- `OpenSourceSection.tsx` must never fabricate contribution-graph data. When
  `stats.contributions` is `null` (no `GITHUB_PAT` configured), render the honest
  empty/CTA state — don't synthesize placeholder cells.
- Contact channels are tiered: Email/LinkedIn/GitHub are primary (large cards);
  WhatsApp/Viber/Facebook are secondary (small pill row). Keep that hierarchy if
  adding new channels.
- `ConsultingSection.tsx` renders the three offerings from `data/services.ts` (IT
  Consulting, Business Software Development, Thesis & Capstone). Pricing is shown
  openly as PHP ranges — keep the numbers realistic for a 7+-year .NET/Laravel/Angular
  developer in the Philippine market, and keep the student tier deliberately
  discounted. Don't inflate the ranges or turn this into marketing copy.

## Blog

Personal blog (single author — not a forum/comments system), Markdown files in the
repo, no database or admin login.

- `content/blog/*.md` — one file per post; filename is the slug (`/blog/<filename>`).
  Frontmatter: `title`, `description`, `date` (ISO string), `tags` (string[]),
  `published` (boolean — `false` hides the post from both the index and its own URL;
  omit or set `true` to publish).
- `lib/blog.ts` — `getAllPosts()` (published only, sorted newest first, no body),
  `getPostBySlug(slug)` (full post incl. body, `null` if missing/unpublished),
  `getAllSlugs()` (for `generateStaticParams`). All file reads are server-only
  (`node:fs`) — only call these from Server Components.
- `app/blog/page.tsx` and `app/blog/[slug]/page.tsx` — statically generated at build
  time. Post bodies render via `react-markdown` + `remark-gfm` (GFM tables/strikethrough)
  + `rehype-highlight` (code syntax highlighting), styled with the hand-written
  `.blog-prose` rules in `app/globals.css` (mapped to the design tokens) — not a
  Tailwind Typography plugin, to keep the "systems status" aesthetic consistent with
  the rest of the site.
- `components/BlogTeaserSection.tsx` — homepage section showing the latest 3 posts,
  fed by `getAllPosts()` called in `app/page.tsx` (Server Component) and passed down as
  props, since the teaser itself needs `"use client"` for the scroll animations.
- `Navbar.tsx` now mixes same-page anchors (`/#section`) and real routes (`/blog`).
  `handleNavClick` intercepts and smooth-scrolls only when already on `/`; otherwise
  it lets `next/link` navigate normally. Keep this pattern if more non-anchor routes
  are added.
- Content convention: this is the user's own first-person career writing (e.g.
  balancing a government senior-developer role with freelance work) — never draft or
  expand actual post content on their behalf beyond a clearly-labeled structural
  template (see `content/blog/example-post.md`, `published: false`). Don't invent
  specifics about their employer or work history.

## Dependencies

Keep patch/minor versions current with `npm update` + `npm audit fix`. Treat major
version bumps (ESLint, TypeScript, `framer-motion`, `lucide-react` are currently
behind on majors) as a deliberate, separately-tested change — don't blindly bump them
alongside unrelated work, since `framer-motion`/`lucide-react` touch nearly every
component.

## Keeping this file current

When a change alters the structure, design system, or content conventions described
above, update the relevant section in both this file and `AGENTS.md` as part of that
same change.
