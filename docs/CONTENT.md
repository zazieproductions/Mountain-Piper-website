# Editing content

A guide to changing words, images and business details. **You do not need to understand the code to
use this** — but you do need someone to run the build and publish, or a pull request that CI can
build.

- [Before you start](#before-you-start)
- [Where content lives](#where-content-lives)
- [Common edits](#common-edits)
- [Photography](#photography)
- [Business details](#business-details)
- [What not to touch](#what-not-to-touch)
- [After editing](#after-editing)

---

## Before you start

All page copy lives in the seven files under `src/pages/`. Each one is a React component, but the
structure is predictable:

```tsx
const services = [ … ];        // ← data arrays at the top: easy to edit
const teachers = [ … ];

export function HomePage() {   // ← the component
  return (
    <>
      <SEO title="…" description="…" />
      <section>…</section>     // ← the visible copy, in reading order
    </>
  );
}
```

**Edit text between `>` and `<`.** For example, to change a sentence:

```tsx
<p className="lead">
  Kit Rashid brings the unmistakable sound of the Highland bagpipe to weddings,
  memorials, ceremonies, and celebrations across Asheville.
</p>
```

Rules that keep things from breaking:

- Leave the `className="…"` attributes alone.
- Leave anything in `{curly braces}` alone unless you are sure.
- Do not delete or add `<` or `>` characters.
- Apostrophes inside text are fine; quotation marks are fine.
- If you get stuck, `git checkout -- src/pages/ThatFile.tsx` undoes your changes.

## Where content lives

| I want to change… | File | Look for |
|---|---|---|
| Homepage hero headline | `src/pages/HomePage.tsx` | `<h1 id="home-heading">` |
| Homepage service cards | `src/pages/HomePage.tsx` | `const services = [` |
| The stat strip ("43 years on the pipes") | `src/pages/HomePage.tsx` | `const aboutStats = [` |
| Teachers / mentors list | `src/pages/HomePage.tsx` | `const teachers = [` |
| The scrolling venue list | `src/pages/HomePage.tsx` | `const venues = [` |
| Performer / Competitor / Teacher blurbs | `src/pages/HomePage.tsx` | `const pillars = [` |
| Homepage FAQ | `src/pages/HomePage.tsx` | the `FAQPage` object in `structuredData` **and** the visible FAQ section |
| Wedding services & repertoire | `src/pages/WeddingPage.tsx` | section headings `wedding-services-heading`, `repertoire-heading` |
| Funeral services & repertoire | `src/pages/FuneralPage.tsx` | `funeral-services-heading`, `memorial-repertoire-heading` |
| Event types & what to expect | `src/pages/EventsPage.tsx` | `events-types-heading`, `event-details-heading` |
| Lesson formats & FAQ | `src/pages/LessonsPage.tsx` | `lessons-offerings-heading`, `lessons-faq-heading` |
| Biography and credentials | `src/pages/AboutPage.tsx` | `about-story-heading` |
| Contact details, availability note | `src/pages/ContactPage.tsx` | `direct-contact` section |
| Header, navigation, footer | `src/components/Layout.tsx` | `navLinks` array, `<footer>` |

### Data arrays

Lists are declared as arrays of objects. Adding an item is copy, paste, edit:

```tsx
const venues = [
  'Weddings',
  'Funerals & memorials',
  "Kirkin' o' the Tartans",     // ← note the double quotes because of the apostrophe
  'College commencements',
  'Festivals',
  'Your new item here',
];
```

Watch the punctuation: every item ends with a comma except the last (a trailing comma is also
fine), and strings containing an apostrophe must use double quotes.

## Common edits

### Rewording a heading

The `<h1>` on each page carries the phrase the page is trying to rank for. **Keep the key phrase
in it.** "Asheville wedding bagpiper" should stay in the weddings `<h1>`. Rewording around it is
fine; removing it costs rankings.

### Adding an FAQ

There are two places, and they must agree:

1. The visible FAQ section in the page's JSX.
2. The `FAQPage` block inside `structuredData` at the top of the same component.

Search the file for `FAQPage` to find the second one. If they diverge, Google may treat the
structured data as misleading.

### Changing a page title or description

Look for the `<SEO … />` element near the top of the page component:

```tsx
<SEO
  title="Asheville Wedding Bagpiper | Bagpiper for Weddings in Western North Carolina"
  description="Hire a professional wedding bagpiper in Asheville…"
  canonicalPath="/weddings"
  structuredData={structuredData}
/>
```

Guidance: titles around 55–60 characters, descriptions around 150–160. Do not change
`canonicalPath` unless the route itself is changing. See [SEO.md](SEO.md).

## Photography

Images live in `public/images/` and are referenced by filename. Current set:

| Stem | Widths available |
|---|---|
| `kit-rashid-mountains` | 400 / 800 / 1200 WebP, 1200 JPEG |
| `kit-rashid-performing` | 400 / 800 WebP, 800 JPEG |
| `kit-rashid-artist-studios` | 400 / 800 WebP, 800 JPEG |
| `kit-rashid-stone-steps` | 400 / 800 WebP, 800 JPEG |

To add a photo:

1. Export **WebP** at 400 px and 800 px wide (1200 px for a hero), plus a **JPEG** fallback at the
   largest width.
2. Name them `<subject>-<width>.webp` / `.jpg` in lowercase with hyphens.
3. Put them in `public/images/`.
4. Reference them through the helpers so the base path stays correct:

```tsx
<picture>
  <source
    srcSet={publicSrcSet([
      ['images/new-photo-400.webp', '400w'],
      ['images/new-photo-800.webp', '800w'],
    ])}
    sizes="(max-width: 820px) 100vw, 54vw"
    type="image/webp"
  />
  <img
    src={publicAsset('images/new-photo-800.jpg')}
    alt="Kit Rashid playing at a wedding ceremony in Asheville"
    width={800}
    height={533}
    loading="lazy"
    decoding="async"
  />
</picture>
```

Never write `src="/images/…"` directly — it breaks on GitHub Pages.

**Alt text matters.** Describe what the photo shows, including the location where relevant. Use
`alt=""` only for purely decorative images.

**Weight matters.** Keep WebP under ~250 KB. The whole `images/` folder is currently ~2.4 MB, and
it is committed to the repository.

## Business details

The phone number and email are repeated in several places, because they appear in the header, the
footer, the mobile menu, the contact page and the structured data.

| Detail | Files containing it |
|---|---|
| Phone `828.974.1719` / `+18289741719` | `src/components/Layout.tsx`, `src/pages/{Home,Contact,Funeral,Events,Lessons,Wedding,About}Page.tsx`, `index.dev.html` |
| Email `mountainpiper1@gmail.com` | `src/components/Layout.tsx`, `src/pages/{Home,Contact,About}Page.tsx`, `index.dev.html` |
| Service area (Asheville, Western NC, Buncombe County) | every page's `structuredData`, `index.dev.html`, `sitemap.xml` |

**To change the phone number or email, search the whole repository for the old value and update
every occurrence.** A missed one leaves a dead link in the footer or, worse, wrong data in Google's
business listing. Both formats matter: the display form (`828.974.1719`) and the link form
(`tel:+18289741719`).

## What not to touch

| Path | Why |
|---|---|
| `index.html`, `404.html` | Generated by the build |
| `assets/`, `images/` at the **repo root** | Generated — edit `public/` instead |
| `favicon.svg`, `robots.txt`, `sitemap.xml` at the **repo root** | Generated — edit `public/` |
| `package-lock.json` | Managed by npm |
| Anything in `node_modules/` | Not committed |

To change the favicon, robots rules or sitemap, edit the copies in **`public/`**.

## After editing

1. Save your files.
2. If you have the project locally, run:

   ```bash
   npm run lint && npm run build
   ```

   Both must succeed. A stray character in JSX usually shows up here as a build error pointing at
   the file and line.
3. Open a pull request, or commit to a branch and let CI verify it.
4. Once merged to `main`, CI rebuilds and republishes automatically. The live site updates within a
   couple of minutes.

If you only changed copy, the risk is genuinely low. If the build fails, the error message names
the file — and nothing is published until it passes.
