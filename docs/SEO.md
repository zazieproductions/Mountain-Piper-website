# Search engine optimisation

This site exists to be found. Every technical decision below serves one question: *when someone in
Western North Carolina searches for a bagpiper, does this page answer them?*

- [Strategy](#strategy)
- [Route map](#route-map)
- [How the head is managed](#how-the-head-is-managed)
- [Structured data inventory](#structured-data-inventory)
- [Crawl support files](#crawl-support-files)
- [On-page conventions](#on-page-conventions)
- [Verification checklist](#verification-checklist)
- [Known gaps](#known-gaps)

---

## Strategy

Three constraints shaped the approach:

1. **Local intent dominates.** People search "bagpiper Asheville" or "wedding bagpiper Western NC",
   not "highland bagpipes". Copy leads with place.
2. **Service pages are separate landing surfaces.** A wedding planner and a funeral director need
   completely different answers, so weddings, funerals, events and lessons each get their own
   route rather than a section on the homepage.
3. **It is a client-rendered SPA.** Nothing is server-rendered, so metadata has to be managed
   explicitly at runtime *and* snapshotted statically.

## Route map

| Route | `<title>` | Primary schema |
|---|---|---|
| `/` | Asheville Bagpiper \| Highland Bagpipes for Weddings, Funerals & Events | `ProfessionalService`, `BreadcrumbList`, `FAQPage` |
| `/weddings` | Asheville Wedding Bagpiper \| Bagpiper for Weddings in Western North Carolina | `Service`, `BreadcrumbList`, `FAQPage` |
| `/funerals-memorials` | Funeral Bagpiper Asheville \| Memorial Bagpiper Western North Carolina | `Service`, `BreadcrumbList`, `FAQPage` |
| `/events` | Bagpiper for Events Asheville \| Ceremonies, Festivals & Private Events | `Service`, `BreadcrumbList` |
| `/lessons` | Bagpipe Lessons Asheville \| Highland Bagpipe Lessons Western North Carolina | `Service`, `BreadcrumbList`, `FAQPage` |
| `/about` | About Kit Rashid \| Scottish Bagpiper & Highland Bagpiper Asheville | `Person`, `BreadcrumbList` |
| `/contact` | Contact Asheville Bagpiper \| Check Availability for Weddings, Funerals & Events | `ContactPage`, `BreadcrumbList` |

Titles are set in each page's `<SEO title=…>` prop. `SEO.tsx` appends
`| Mountain Piper - Kit Rashid` only when the title does not already contain "Mountain Piper" —
every title above already carries enough, so none are suffixed.

## How the head is managed

`src/components/SEO.tsx` is a `null`-rendering component that reconciles `<head>` in an effect.
It is invoked once per page:

```tsx
<SEO
  title="Asheville Wedding Bagpiper | Bagpiper for Weddings in Western North Carolina"
  description="Hire a professional wedding bagpiper in Asheville and Western North Carolina…"
  canonicalPath="/weddings"
  structuredData={structuredData}
/>
```

| Prop | Effect |
|---|---|
| `title` | `document.title`, `og:title`, `twitter:title` |
| `description` | `<meta name="description">`, `og:description`, `twitter:description` |
| `canonicalPath` | `<link rel="canonical">` and `og:url`, resolved against `siteUrl` |
| `ogImage` | `og:image` and `twitter:image`; defaults to `defaultOgImage` |
| `ogType` | `og:type`; defaults to `website` |
| `structuredData` | One `<script type="application/ld+json">` per entry |
| `noIndex` | Switches robots to `noindex, nofollow` |

Mechanics worth knowing when you change it:

- Nodes are **found-or-created** by selector rather than appended blindly, so navigating between
  routes does not accumulate duplicate meta tags.
- Previous JSON-LD is removed by the `data-seo-jsonld` marker before new blocks are injected.
  **Keep that attribute** — dropping it leaks one JSON-LD block per navigation.
- The effect depends on the resolved strings, so passing an inline object literal for
  `structuredData` re-runs it on every render. That is currently harmless but wasteful; the pages
  build the object inside the component body.

### The static snapshot

`index.dev.html` carries a complete pre-hydration `<head>`: title, description, canonical, Open
Graph, Twitter card, and a base `ProfessionalService` JSON-LD block. It also carries a `<noscript>`
section with an `<h1>`, contact details and a full navigation list.

This means a crawler that does not execute JavaScript still sees a correct title, description,
canonical and business schema — and a human with JavaScript disabled still sees the content and
contact information.

> **Keep the two in sync.** When you change the business name, phone number, service list or
> `areaServed` in the JSON-LD, update both `index.dev.html` and the matching page component.

## Structured data inventory

| Type | Where | Purpose |
|---|---|---|
| `ProfessionalService` | `index.dev.html` + `HomePage` | The business: name, telephone, email, address, `areaServed` (Asheville, Western NC, Buncombe County), `serviceType`, `priceRange` |
| `Person` | `AboutPage` | Kit Rashid: job title, `knowsAbout`, `memberOf` EUSPBA |
| `Service` | Weddings, Funerals, Events, Lessons | One per offering, with `provider` and `areaServed` |
| `ContactPage` | `ContactPage` | Marks the booking surface |
| `BreadcrumbList` | Every route | Home → current page |
| `FAQPage` | Home, Weddings, Funerals, Lessons | Rich results for the visible FAQ sections |

**Rule:** `FAQPage` answers must match the copy actually rendered on the page. Google treats a
mismatch as structured-data spam, and it is easy to drift when copy is edited without touching the
schema array above the component.

## Crawl support files

| File | Source of truth | Contents |
|---|---|---|
| `robots.txt` | `public/robots.txt` | `Allow: /`, sitemap reference, and disallows for `utm_*`, `fbclid`, `gclid` parameters |
| `sitemap.xml` | `public/sitemap.xml` | All 7 URLs with `lastmod`, `changefreq`, `priority` |

Both are copied verbatim from `public/` into the build, then to the repository root by the publish
script. **Add a `<url>` entry to `sitemap.xml` whenever you add a route.**

The `lastmod` values are currently uniform (`2026-05-01`). They are not generated — update them by
hand when a page genuinely changes, or leave them; a stale `lastmod` is a weak signal, a lying one
is worse.

## On-page conventions

- **Exactly one `<h1>` per page**, containing the page's target phrase.
- **`aria-labelledby`** ties every `<section>` to its heading, so the heading structure doubles as
  the accessibility outline.
- **Descriptive internal link text.** The footer nav uses full phrases ("Wedding Bagpiper
  Asheville") rather than "Weddings" — deliberate, and worth keeping.
- **Breadcrumbs are visible**, not just structured data.
- **Images** carry `alt` text (or `alt=""` when decorative), plus explicit `width`/`height`.
- **Canonical origin** is `https://mountainpiperavl.com`, defined once in `src/siteConfig.ts`.

## Verification checklist

After any SEO-affecting change:

- [ ] Each route has a unique `<title>` and meta description, ≤ ~60 and ~160 characters.
- [ ] Each route has exactly one `<h1>` containing its target phrase.
- [ ] `canonical` resolves to the correct absolute URL for the route.
- [ ] Navigate between all 7 routes and confirm no duplicate `<meta name="description">` or extra
      `<script type="application/ld+json">` elements accumulate in `<head>`.
- [ ] JSON-LD validates: paste a rendered page into the
      [Rich Results Test](https://search.google.com/test/rich-results).
- [ ] `FAQPage` answers match the visible FAQ copy.
- [ ] New routes appear in `sitemap.xml`, and the breadcrumb chain is correct.
- [ ] With JavaScript disabled, the page still shows a title, description and contact details.

## Known gaps

Honest accounting — see [ROADMAP.md](ROADMAP.md) for the plan:

- **No server-side rendering or prerendering.** Metadata is correct after hydration and in the
  static snapshot, but the body content is not in the initial HTML. Prerendering the 7 routes at
  build time (for example `vite-plugin-prerender` or a switch to a framework with SSG) would remove
  this caveat entirely.
- **`/events` has no `FAQPage`** while the other service pages do.
- **One Open Graph image** is used everywhere except `/about`. Per-route share cards would improve
  click-through on social.
- **`sitemap.xml` `lastmod` is manual** and currently uniform.
- **No analytics**, so there is no first-party data on which pages convert. That is a deliberate
  privacy choice, not an oversight.
