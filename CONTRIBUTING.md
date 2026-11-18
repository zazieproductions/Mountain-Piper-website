# Contributing to the Mountain Piper website

Thank you for taking the time to help. This repository powers a live business website that people
use to book weddings, funerals and lessons, so the bar is "do not break the live site" — everything
below is in service of that one goal.

- [Ground rules](#ground-rules)
- [Development setup](#development-setup)
- [Making a change](#making-a-change)
- [Pre-flight checklist](#pre-flight-checklist)
- [Commit and branch conventions](#commit-and-branch-conventions)
- [Content changes](#content-changes)
- [Reviewing](#reviewing)
- [Reporting a problem](#reporting-a-problem)

---

## Ground rules

**1. Never hand-edit generated files.**

These paths at the repository root are build output, committed only because GitHub Pages serves
this repository directly from `main`:

```
index.html      404.html      .nojekyll      favicon.svg
robots.txt      sitemap.xml   assets/**      images/**
```

They are overwritten on every deploy. To change them, edit the **source** instead:

| To change… | Edit… |
|---|---|
| The static `<head>`, base JSON-LD or the no-JS fallback | `index.dev.html` |
| Page copy, structure or per-route SEO | `src/pages/*.tsx` |
| Shared chrome (header, nav, footer) | `src/components/Layout.tsx`, `src/components/SiteNavigation.tsx` |
| Colours, type scale, spacing, breakpoints | `src/index.css` |
| `robots.txt` / `sitemap.xml` | `public/robots.txt` / `public/sitemap.xml` |
| `favicon.svg` | `public/favicon.svg` |
| The publish pipeline itself | `scripts/publish-github-pages.mjs` |

**2. Every route change touches five places.** See [Adding or renaming a route](#adding-or-renaming-a-route).

**3. Copy is marketing copy, not placeholder text.** It is written deliberately for local search.
Read [docs/CONTENT.md](docs/CONTENT.md) before rewording a heading. Make the service and area
easy to find without repeating a search phrase throughout the copy.

**4. Small, reviewable diffs.** One concern per pull request.

## Development setup

```bash
git clone https://github.com/zazieproductions/Mountain-Piper-website.git
cd Mountain-Piper-website
npm ci            # Node 22 — see .nvmrc
npm run dev       # http://localhost:5173
```

Available commands:

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server with HMR |
| `npm run lint` / `npm run lint:fix` | ESLint (flat config) |
| `npm run typecheck` | `tsc -b` |
| `npm run build` | Typecheck + production build |
| `npm run build:pages` | Full Pages build **and** write the artefacts to the repo root |

> Run `npm run build:pages` **only** when you intend to commit the regenerated artefacts. It
> rewrites `index.html`, `404.html`, `assets/` and `images/` in your working tree.

## Making a change

1. **Branch from `main`.**
2. **Make the change** in `src/`, `public/` or `index.dev.html`.
3. **Verify locally:**

   ```bash
   npm run lint && npm run typecheck && npm run build
   ```

4. **Open a pull request** against `main` and fill in the template.

Continuous integration runs lint, typecheck, keyboard and accessibility tests, and both builds on every
pull request. See [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

### Checking navigation with a keyboard

- Above 900 px, tab through the header: each destination should occur once. Activate **Back to
  navigation** in the footer and Tab should take you straight to the first menu link.
- At 900 px or below, Tab should skip the closed menu’s links. Open it with Enter, tab forward
  and backward, and check that no background links receive focus. Escape should return focus to
  the opener; following a link to another page should move focus to the new main content.
- Widen the viewport with the dialog open: only the desktop menu should remain, and the page
  should scroll again.

### Adding or renaming a route

A route is not finished until all five of these are updated:

1. `src/App.tsx` — add the `<Route>`.
2. `src/pages/NewPage.tsx` — the component, including a `<SEO />` with a unique `title`,
   `description`, `canonicalPath` and `structuredData`.
3. `src/components/SiteNavigation.tsx` — the shared `navLinks` array. Update the no-JavaScript
   navigation in `index.dev.html` to match.
4. `public/sitemap.xml` — a new `<url>` entry.
5. `public/_redirects` — a new SPA redirect line (used if the site is ever hosted on Netlify).

Then run `npm run build:pages` so the generated `index.html` noscript nav and the published
artefacts stay in sync.

### Changing the base path or domain

Two constants must move together:

- `pagesBase` in **both** `vite.config.ts` and `scripts/publish-github-pages.mjs`.
- `siteUrl` in `src/siteConfig.ts`, plus the hardcoded origin in `sitemap.xml`, `robots.txt` and
  the static head in `index.dev.html`.

Getting these out of sync produces a blank page in production. The publish script guards against
the base-path half of this; nothing guards the domain half.

## Pre-flight checklist

Before requesting review, confirm:

- [ ] `npm run lint` reports zero errors.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` succeeds.
- [ ] I checked the change in a mobile viewport (≤ 820 px) as well as desktop.
- [ ] I did not hand-edit generated files at the repository root.
- [ ] The heading and title identify the service in plain language.
- [ ] Any new interactive control has an accessible name, and any new animation honours
      `prefers-reduced-motion`.
- [ ] Images have `alt` text (or `alt=""` when purely decorative), explicit `width`/`height`, and
      WebP + JPEG variants where applicable.
- [ ] If routes, base paths or the domain changed, I followed the sections above.

## Commit and branch conventions

Branches: `feature/<short-slug>`, `fix/<short-slug>`, `content/<short-slug>`.

Commits follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(lessons): add group lesson pricing table
fix(seo): correct canonical path on the funerals route
content(home): update repertoire list for 2026
docs: document the Pages publish pipeline
chore(deps): bump vite to 7.3.6
```

`feat` and `fix` produce the clearest history; `content` is reserved for copy-only changes that
carry no code risk.

## Content changes

Photography, repertoire lists, FAQs, credentials and pricing are all plain data arrays at the top
of each page component. [**docs/CONTENT.md**](docs/CONTENT.md) explains where each one lives and
how to change it safely — it is written for non-developers.

## Reviewing

Reviewers, please check:

- **Does it build?** CI covers this, but read the diff for logic that types cleanly and behaves
  badly.
- **Is the SEO intact?** Every page must still render exactly one `<h1>`, a unique title and
  description, and a `BreadcrumbList`.
- **Is it accessible?** Keyboard-only navigation, visible focus, and correct `aria` on anything new.
- **Is it responsive at 820 px and below?**
- **Does it touch generated files?** If so, ask why.

## Reporting a problem

Use the issue templates — they ask for the information actually needed to diagnose the problem:

- [**Bug report**](../../issues/new?template=bug_report.yml) — something is broken.
- [**Feature request**](../../issues/new?template=feature_request.yml) — something should exist.
- [**Content update**](../../issues/new?template=content_update.yml) — copy, photos or details need
  to change.

If a page renders completely blank, read
[docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md#blank-page-on-github-pages) first — that failure
mode is almost always a base-path mismatch, and the fix is mechanical.

Security-sensitive reports should be sent privately. See [SECURITY.md](SECURITY.md).
