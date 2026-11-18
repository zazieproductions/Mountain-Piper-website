<!--
  Thank you! Please keep this PR focused on one concern.
  Read CONTRIBUTING.md first if you have not already.
-->

## What does this change?

<!-- One or two sentences. What problem does this solve, and for whom? -->

## Why is this approach right?

<!-- Alternatives considered, or why this is the simplest thing that works. -->

## Type of change

- [ ] `feat` — new functionality
- [ ] `fix` — bug fix
- [ ] `content` — copy, photography or business details only
- [ ] `docs` — documentation only
- [ ] `refactor` — no behaviour change
- [ ] `chore` — dependencies, tooling, CI

## Verification

- [ ] `npm run lint` reports zero errors
- [ ] `npm run typecheck` passes
- [ ] `npm run build` succeeds
- [ ] I viewed the change at a desktop **and** a ≤ 820 px viewport
- [ ] I did **not** hand-edit generated files (`index.html`, `404.html`, `assets/`, `images/`)

## Checklist

- [ ] Routes: if I added or renamed a route, I updated all five places
      (`App.tsx`, the page component, `Layout.tsx` nav ×3, `sitemap.xml`, `_redirects`)
- [ ] SEO: any new or changed page has exactly one `<h1>`, a unique title and
      description, and a `BreadcrumbList`
- [ ] Accessibility: new interactive controls have accessible names; new
      animations honour `prefers-reduced-motion`
- [ ] Images: `alt` text present (or `alt=""` when decorative), explicit
      `width`/`height`, WebP + JPEG variants where applicable

## Screenshots

<!-- For any visual change, paste before/after at both desktop and mobile widths. -->

## Notes for reviewers

<!-- Anything subtle, anything you were unsure about, anything deliberately left out. -->
