# Roadmap

What is deliberately unfinished, why, and roughly what each item costs. Ordered by value to the
business rather than by technical interest.

---

## High value, modest effort

### 1. Replace the `mailto:` contact form

**Today.** `src/pages/ContactPage.tsx` validates the form client-side and then sets
`window.location.href = "mailto:…"`. The visitor's mail client opens with a pre-filled message.

**Problem.** Anyone without a configured mail client — webmail-only users, most phones prompted
awkwardly, anyone on a work laptop — hits a dead end. For a business whose entire conversion path
is an enquiry, this is the most consequential gap in the project.

**Options.**

| Option | Effort | Cost | Notes |
|---|---|---|---|
| Formspree / Basin / Web3Forms | ~1 h | Free tier | Keeps the static hosting; adds a third-party processor |
| Cloudflare Pages Function or Vercel Edge Function | ~3 h | Free tier | Requires moving hosts; email sent server-side |
| Google Form behind a styled wrapper | ~1 h | Free | Weakest UX and weakest branding |

Whichever is chosen, keep the existing validation and the accessible error handling — it is already
good, including moving focus to the first invalid field.

### 2. Route-level code splitting

**Today.** One 434 kB bundle (113 kB gzipped) containing all seven pages.

**Fix.** Lazy-load the page components:

```tsx
const WeddingPage = lazy(() => import('./pages/WeddingPage'));
```

wrapped in a `<Suspense>` fallback. Realistically this halves the initial payload, since any one
visitor needs one page.

**Caveat.** Lazy loading defers the code that renders a page's `<SEO />`, so metadata lands later
for crawlers. Pair this with prerendering (below) or accept the trade-off.

### 3. Prerender the seven routes

**Today.** Metadata is correct after hydration and in the static `index.dev.html` snapshot, but
body content is not in the initial HTML.

**Fix.** Static prerendering at build time — `vite-plugin-prerender`, or migrating to a framework
with SSG. The route list is fixed and tiny, which makes this unusually cheap.

**Benefit.** Removes the only real SEO caveat in the architecture, improves first paint, and makes
the site work fully without JavaScript.

---

## Medium value

### 4. Framer Motion page transitions

The library is installed (`framer-motion@^12.35.0`) but **imported nowhere** in `src/`. Either use
it or remove it — an unused dependency is a maintenance liability and a misleading signal to a
reader.

If used: a subtle fade-and-rise on route change, gated behind `prefers-reduced-motion`.

### 5. `prefers-reduced-motion` for the venue marquee

The one remaining ungated animation. `venue-scroll` (42 s infinite horizontal scroll on the
homepage) has no reduced-motion override, unlike `seal-spin` which does.

```css
@media (prefers-reduced-motion: reduce) {
  .venue-track { animation: none; }
}
```

A two-line fix. It should probably just be done rather than tracked.

### 6. Automated tests

There are none today. The highest-value first tests, in order:

1. **`ContactPage` validation** — pure logic, easy to test, and it guards the conversion path.
2. **`<SEO />` reconciliation** — render two pages in sequence and assert `<head>` has exactly one
   description and the right number of JSON-LD blocks. This is the component most likely to
   silently regress.
3. **`publicAsset` / `routerBasename`** — trivial pure functions on which every image URL depends.
4. **Playwright smoke tests** — load each of the 7 routes, assert one `<h1>` and a non-empty title.

Suggested stack: Vitest + React Testing Library for units, Playwright for the smoke tests, both in
CI.

### 7. Lighthouse CI budget

Add `lhci autorun` to CI with assertions on performance, accessibility, best practices and SEO.
Fail the build on regression rather than reporting a number nobody reads.

---

## Nice to have

### 8. Per-route Open Graph images

One image (`kit-rashid-mountains-1200.webp`) is used everywhere except `/about`. Generating a
branded card per route would improve social click-through. Could be produced at build time from a
template.

### 9. `FAQPage` on `/events`

The other three service pages have it; Events does not.

### 10. Generated `sitemap.xml`

`public/sitemap.xml` is hand-maintained and its `lastmod` values are uniform (`2026-05-01`).
Deriving it from the route table at build time would remove the "did you remember to add a URL"
failure mode documented in `CONTRIBUTING.md`.

### 11. Remove dead files

- `src/App.css` — empty, not imported anywhere.
- `framer-motion` — if item 4 is not pursued.
- `src/pages/HomePage.tsx` and others use inline `style` for repeated `clamp()` values that belong
  in `src/index.css`.

### 12. Move to Actions-based Pages deployment

Would remove the committed build output (`index.html`, `404.html`, `assets/`, `images/`) from the
repository entirely, at the cost of changing the hosting model and the base path. Documented in
[DEPLOYMENT.md](DEPLOYMENT.md#the-constraint). Not urgent — the current pipeline works and guards
itself.

---

## Explicitly not planned

These are deliberate, not oversights:

- **No analytics.** No first-party data on which pages convert, accepted in exchange for zero
  third-party tracking on a site visited by people planning funerals as well as weddings.
- **No CMS.** Content changes rarely and is marketing copy that benefits from being in the
  repository alongside the code that renders it.
- **No dark mode.** The dark forest palette *is* the brand; a light theme would dilute it.
- **No i18n.** The service area is Western North Carolina.
