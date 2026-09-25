# Architecture

How the site is put together, and why.

- [Entry point](#entry-point)
- [Component tree](#component-tree)
- [Routing](#routing)
- [The SEO runtime](#the-seo-runtime)
- [Base paths](#base-paths)
- [Styling](#styling)
- [Assets](#assets)
- [State](#state)
- [Data flow for a booking enquiry](#data-flow-for-a-booking-enquiry)
- [The optional dev plugin](#the-optional-dev-plugin)

---

## Entry point

`index.dev.html` is the **only** HTML file Vite reads. `vite.config.ts` pins it explicitly:

```ts
build: {
  rollupOptions: { input: path.resolve(rootDir, 'index.dev.html') }
}
```

The reason is that `index.html` at the repository root is a *build artefact* — GitHub Pages serves
the repository root, so the compiled bundle has to live there. Keeping the source entry under a
different name means the two can never be confused.

During development a small middleware (`serveDevIndex` in `vite.config.ts`) rewrites `/` and
`/index.html` to `/index.dev.html`, so `npm run dev` still works on the root URL.

`index.dev.html` is not just a shell. It carries:

- the full static `<head>` — title, description, canonical, Open Graph, Twitter card;
- the base `ProfessionalService` JSON-LD block;
- a `<noscript>` block with real headings, contact details and a full site nav.

That static snapshot is what crawlers and no-JS visitors get before React hydrates.

### Bootstrap

`src/main.tsx` does three things before rendering:

1. **Normalises the URL.** GitHub Pages serves `/Mountain-Piper-website/index.html` without
   rewriting the address bar. Left alone, React Router would try to match `/index.html` and fall
   through to the 404 route. The bootstrap strips the suffix with `history.replaceState`.
2. **Seeds a CSS variable** — `--contact-photo` — with a base-path-aware image URL.
3. **Mounts** `<App />` inside `<StrictMode>`.

## Component tree

```
<App>
├── <ScrollToTop />              side-effect only; renders null
└── <Layout>                     header · mobile nav dialog · footer · floating CTA
    └── <Routes>
        ├── /                     <HomePage />
        ├── /weddings             <WeddingPage />
        ├── /funerals-memorials   <FuneralPage />
        ├── /events               <EventsPage />
        ├── /lessons              <LessonsPage />
        ├── /about                <AboutPage />
        ├── /contact              <ContactPage />
        └── *                     <NotFoundPage />   (defined inline in App.tsx)
```

`<ScrollToTop />` reads `useLocation()` and, on every pathname change, scrolls to the top and moves
focus to `#main-content` (which carries `tabIndex={-1}`). This is what makes keyboard navigation
between pages behave the way a server-rendered site does.

`<Layout />` owns four pieces of chrome:

| Piece | Notes |
|---|---|
| Sticky header | `BrandMark`, desktop nav, "Check availability" CTA, hamburger. |
| Mobile nav dialog | `role="dialog"`, `aria-modal`, focus moved to the first link on open, `Escape` closes and returns focus to the toggle, `body` scroll locked. |
| Footer | Brand blurb, an SEO-labelled footer nav, and contact details. |
| Floating CTA | Visibility is computed in a `requestAnimationFrame`-throttled scroll listener: on `/` it appears only between the hero and the contact section; elsewhere after 400 px of scroll. |

The mobile menu closes on route change via React's
[render-time state adjustment](https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes)
rather than an effect — comparing a stored pathname against the current one during render avoids a
paint where the menu is still open over the new page.

## Routing

`BrowserRouter` with a basename derived from the build:

```ts
// src/publicAsset.ts
export function routerBasename(): string | undefined {
  const base = import.meta.env.BASE_URL;
  if (!base || base === '/') return undefined;
  return base.endsWith('/') ? base.slice(0, -1) : base;
}
```

In development `BASE_URL` is `/`, so the basename is `undefined` and routes are bare (`/weddings`).
In `pages` mode `BASE_URL` is `/Mountain-Piper-website/`, so the basename becomes
`/Mountain-Piper-website` and every route is prefixed automatically. **No route string in the app
hardcodes the deployment path.**

Because this is client-side routing, a hard refresh on `/weddings` only works if the host rewrites
unknown paths to the index. On GitHub Pages, `404.html` is a byte-identical copy of `index.html`,
which is what makes deep links resolve. On Netlify, `public/_redirects` does the same job.

## The SEO runtime

`src/components/SEO.tsx` is the load-bearing abstraction. Because nothing else in a client-rendered
SPA can set the document title or canonical URL, every page component renders:

```tsx
<SEO
  title="Asheville Wedding Bagpiper | Bagpiper for Weddings in Western North Carolina"
  description="…"
  canonicalPath="/weddings"
  structuredData={structuredData}
/>
```

The component renders `null` and does all of its work in an effect, reconciling `<head>`:

| Concern | How |
|---|---|
| `document.title` | Assigned directly; a suffix of `| Mountain Piper - Kit Rashid` is appended unless the title already contains "Mountain Piper". |
| Meta description, robots, canonical, OG, Twitter | Found-or-created by selector, then `setAttribute`. Reusing nodes avoids accumulating duplicates across navigations. |
| JSON-LD | Every previous block tagged `data-seo-jsonld` is removed, then one `<script type="application/ld+json">` is appended per entry. Accepts a single object or an array. |

Constants come from `src/siteConfig.ts` (`siteUrl`, `defaultOgImage`, `siteName`) so that no
component module exports a non-component — which `react-refresh/only-export-components` requires
for Fast Refresh to work.

**Consequence to remember:** JSON-LD only appears after hydration. That is why `index.dev.html`
carries a static `ProfessionalService` block — the pre-hydration snapshot and the runtime block are
deliberately redundant.

Full SEO strategy: [SEO.md](SEO.md).

## Base paths

Every URL that must work under a sub-path goes through `src/publicAsset.ts`:

```ts
publicAsset('images/kit-rashid-mountains-800.webp')
// dev   → /images/kit-rashid-mountains-800.webp
// pages → /Mountain-Piper-website/images/kit-rashid-mountains-800.webp

publicSrcSet([['images/a-400.webp', '400w'], ['images/a-800.webp', '800w']])
// → "<base>images/a-400.webp 400w, <base>images/a-800.webp 800w"
```

Three functions, one rule: **never write a literal `/images/...` in a component.**

## Styling

Tailwind CSS v4 is wired up through `@tailwindcss/vite`, but it supplies **only the preflight
(reset) layer**. No component in `src/` uses a Tailwind utility class — every class name is a
hand-authored BEM-ish name defined in `src/index.css`.

Source detection is therefore disabled explicitly:

```css
@import "tailwindcss" source(none);
```

This matters. Tailwind v4's automatic content detection scans the **whole repository**, so without
`source(none)` it reads the Markdown documentation and generates real utilities out of ordinary
English words — `.flex`, `.grid`, `.container`, `.table`, `.fixed`, `.absolute` all appeared in the
bundle purely because those words occur in the docs. Disabling detection took the stylesheet from
41.12 kB (9.52 kB gzip) down to **35.35 kB (8.34 kB gzip)**, which is also below the 39.31 kB the
template README alone produced.

If utility classes are ever introduced, re-enable detection scoped to the source tree:

```css
@import "tailwindcss" source(none);
@source "../src";
```

`src/App.css` is an empty leftover from the Vite template and is not imported anywhere.

Details: [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md).

## Assets

Photography lives in `public/images/` and is copied verbatim into the build, then by
`scripts/publish-github-pages.mjs` into `images/` at the repository root.

Every photo exists at multiple widths, WebP with a JPEG fallback:

```
kit-rashid-mountains-400.webp
kit-rashid-mountains-800.webp
kit-rashid-mountains-1200.webp
kit-rashid-mountains-1200.jpg      ← fallback for <img src>
```

Components reference them through `<picture>` + `publicSrcSet()` + `sizes`. Of the seven `<img>`
elements in the app, six are `loading="lazy"`; the seventh is the hero, which is
`fetchPriority="high"` because it is the LCP element.

## State

There is no store. The entire application state is:

| State | Where | Lifetime |
|---|---|---|
| `menuOpen`, `menuPathname` | `Layout` | Mobile nav |
| `showBookButton` | `Layout` | Floating CTA visibility |
| `errors`, `submitted` | `ContactPage` | Form validation |

Everything else is module-level constant data — services, repertoire, FAQs, credentials, venue
lists — declared at the top of each page component. That is a deliberate choice: the content is
static, so treating it as configuration keeps the components small and the copy easy to find.

## Data flow for a booking enquiry

There is no server, so the "submission" is entirely client-side:

```
Visitor fills form
      │
      ▼
handleSubmit(e)            e.preventDefault()
      │
      ▼
validate(formData)         name ≥ 2 chars · email matches /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      │                    eventType required · location ≥ 3 chars
      ├── errors ──► setErrors(...) + focus the first invalid field
      │
      └── valid ──► compose a plain-text body
                        │
                        ▼
                    window.location.href = "mailto:mountainpiper1@gmail.com?subject=…&body=…"
                        │
                        ▼
                    setSubmitted(true)
```

The trade-off is explicit: no server means nothing to maintain and no data to protect, but visitors
without a configured mail client cannot send the form. Replacing this with a serverless endpoint or
a form service is on the [roadmap](ROADMAP.md).

## The optional dev plugin

`.vite-source-tags.js` is tracked in the repository but listed in `.gitignore` (tracked files win).
It is a Vite plugin that stamps `data-source-loc="file:line:col"` onto every JSX element so an
element-picker tool can map rendered DOM back to source.

`vite.config.ts` imports it inside a `try`/`catch`:

```ts
try {
  // @ts-expect-error Optional preview-only plugin is injected at runtime.
  const m = await import('./.vite-source-tags.js');
  plugins.push(m.sourceTags());
} catch {
  // The production build does not require source-tag instrumentation.
}
```

If the file is missing, the build proceeds without it. **It is developer tooling, not product code —
do not depend on its attributes in application logic or CSS.**
