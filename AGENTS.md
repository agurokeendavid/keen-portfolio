<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project overview — Keen David Aguro portfolio

Personal portfolio site. Next.js 16 (App Router, Turbopack), React 19, TypeScript,
Tailwind CSS v4, Framer Motion. Single page (`app/page.tsx`) composed of section
components rendered in order: Navbar, HeroSection, SkillsStrip, ExperienceSection,
ProjectsSection, OpenSourceSection, BlogTeaserSection, ConsultingSection,
ContactSection, Footer.

## Structure

- `app/layout.tsx` — fonts, metadata/SEO, theme-init script, Vercel Analytics +
  Speed Insights. No third-party chat widget — Tawk.to was removed deliberately (a
  portfolio routes contact through the Contact section); don't re-add one.
- `app/page.tsx` — async Server Component. Loads projects via `projectService` and the
  latest posts via `getAllPosts()`, then passes them as props to the client sections,
  so all content is in the initial HTML.
- `app/globals.css` — design tokens (see below).
- `app/opengraph-image.tsx`, `app/sitemap.ts`, `app/robots.ts` — generated OG image,
  sitemap (home, `/blog`, every published post), and robots.txt.
- `lib/site.ts` — `SITE_URL`, the canonical production URL. Use it instead of
  hardcoding the domain.
- `app/api/github/route.ts` — GitHub stats + contribution calendar (needs `GITHUB_PAT`
  env var for the calendar; without it, returns `contributions: null`).
- `components/` — one file per page section, plus shared `Button`, `Badge`, `Modal`.
- `data/projects.ts` — `Project[]` and `TechItem[]` (techStack). Single source of truth
  for project and skills content.
- `data/experience.ts` — work history for `ExperienceSection`, plus `careerStart` and
  `getYearsOfExperience()`, derived from the earliest `period` start ("Mon YYYY – …").
  **Never hardcode "7+ years"** anywhere — the hero, experience intro, layout metadata
  and OG image all read this. It's computed server-side and passed as a prop to client
  components (avoids hydration mismatches); the root layout sets `revalidate = 86400`
  so static pages roll the number over without a redeploy. Keep `period` strings in
  `Mon YYYY` form (3-letter month) so parsing stays reliable.
- `data/services.ts` — `Service[]` (offerings + PHP pricing) plus `formatPeso()`, for
  `ConsultingSection`.
- `services/projectService.ts` — thin async wrapper around `data/projects.ts`, written
  to be swapped for a real API later. Call it from `app/page.tsx` (server) and pass the
  result down; don't import `data/projects.ts` project lists directly in components,
  and don't move the fetch back into a client `useEffect`.

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
- Motion is deliberately restrained: only the hero has an entrance animation, and
  `ProjectModal` animates open/close. Don't add scroll-triggered fade-ups, staggered
  reveals, hover lifts, or glow/blur effects to sections — they read as template
  output. Hover feedback is colour/border only (`hover:border-signal`, `hover:text-signal`).
- Experience is a single-column timeline (mono meta column + content with a `border-l`
  rule), not an alternating zig-zag of cards. The hero photo is a square with a mono
  caption, not a circle. The caption shows location plus the live Manila time
  (`ManilaClock` in `HeroSection.tsx`, via `useSyncExternalStore`: renders `--:--` on the
  server and the real time after hydration — keep it that way to avoid hydration
  mismatches). Don't add availability/"open to work" taglines there or in the OG image.
- Theme default is **always light** regardless of OS preference. `layout.tsx`'s
  `theme-init` script and `Navbar.tsx`'s `getPreferredDarkMode` only enable dark mode
  if `localStorage.theme === 'dark'` (i.e. the visitor toggled it themselves) — do not
  reintroduce a `prefers-color-scheme` check for the initial value.

## Content conventions

- No About section — it was removed as redundant with Hero/Experience. Any new
  "who I am" copy belongs in `HeroSection.tsx`, kept short.
- Copy must be backed by something on the site: sectors are government, energy, and
  real estate (no "fintech" — nothing listed supports it); the "systems live in
  production" readout is intentionally 2 (BI eServices, Enerlytic). Other client work
  lives in the resume, which `ProjectsSection` links to. Avoid generic lines ("systems
  worth trusting", "let's collaborate on interesting problems") and avoid repeating the
  same sector list in multiple section intros.
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
  fed by `getAllPosts()` called in `app/page.tsx` and passed down as props. It's a
  Server Component (as are `SkillsStrip`, `ExperienceSection`, `ContactSection`) —
  only add `"use client"` to a section when it genuinely needs state or handlers.
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
above, update the relevant section in this file as part of that same change.

