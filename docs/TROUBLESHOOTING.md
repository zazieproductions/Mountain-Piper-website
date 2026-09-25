# Troubleshooting

Symptom first. If you are here because the live site is blank, start with
[the first entry](#blank-page-on-github-pages).

- [Blank page on GitHub Pages](#blank-page-on-github-pages)
- [Styles load but images 404](#styles-load-but-images-404)
- [Deep links 404 on refresh](#deep-links-404-on-refresh)
- [404 route shows instead of the homepage](#404-route-shows-instead-of-the-homepage)
- [The publish workflow keeps re-running](#the-publish-workflow-keeps-re-running)
- ["Refusing to publish a bundle that would load blank"](#refusing-to-publish-a-bundle-that-would-load-blank)
- [Local dev shows the wrong page at /](#local-dev-shows-the-wrong-page-at-)
- [npm ci fails after a package.json change](#npm-ci-fails-after-a-packagejson-change)
- [Type or lint errors block the build](#type-or-lint-errors-block-the-build)
- [Duplicate meta tags or JSON-LD after navigating](#duplicate-meta-tags-or-json-ld-after-navigating)
- [Changes are not appearing on the live site](#changes-are-not-appearing-on-the-live-site)

---

## Blank page on GitHub Pages

**Symptom:** the URL returns `200`, the page is white, and the console shows 404s for
`/assets/index-*.js` or a MIME-type error.

**Cause:** almost always a base-path mismatch. The site is served from
`https://zazieproductions.github.io/Mountain-Piper-website/`, so the bundle must be referenced as
`/Mountain-Piper-website/assets/…`. If the build ran without `--mode pages`, it emitted `/assets/…`
instead and every request resolves against `github.io`.

**Check:**

```bash
curl -s https://zazieproductions.github.io/Mountain-Piper-website/ | grep -o '/[^"]*assets/[^"]*'
```

A result starting `/Mountain-Piper-website/assets/` is correct. A result starting `/assets/` is the
bug.

**Fix:** rebuild in pages mode and publish.

```bash
npm ci
npm run build:pages
git add assets images index.html 404.html .nojekyll favicon.svg robots.txt sitemap.xml
git commit -m "fix: republish with correct pages base path"
git push
```

The publish script contains a guard that should have caught this — if it did not fire, read
[the next entry](#refusing-to-publish-a-bundle-that-would-load-blank).

## Styles load but images 404

**Cause:** an image was referenced with a hardcoded root-absolute path instead of the helper.

```tsx
// ✗ breaks under the /Mountain-Piper-website/ base
<img src="/images/kit-rashid-mountains-800.webp" />

// ✓ correct
<img src={publicAsset('images/kit-rashid-mountains-800.webp')} />
```

Search for the pattern:

```bash
grep -rn 'src="/images' src/
grep -rn 'srcSet="[^"]*\/images' src/
```

Use `publicAsset()` / `publicSrcSet()` from `src/publicAsset.ts` for everything in `public/`.

Also confirm the file actually exists in **`public/images/`** — the root `images/` directory is
generated from it and is replaced wholesale on every publish.

## Deep links 404 on refresh

**Symptom:** clicking through to `/weddings` works, but reloading that URL returns GitHub's 404
page.

**Cause:** client-side routing needs the host to serve the app shell for unknown paths. On GitHub
Pages that is what `404.html` is for — it is a byte-identical copy of `index.html`.

**Fix:** confirm both files are present at the repository root and identical:

```bash
diff index.html 404.html && echo "identical"
```

If they differ, run `npm run build:pages`, which writes both from the same source.

On Netlify the equivalent is `public/_redirects`; if a route was added, it needs a line there too.

## 404 route shows instead of the homepage

**Symptom:** the site loads but immediately renders "This page has piped to a different glen."

**Cause:** the router basename and the actual URL path disagree. GitHub Pages serves
`/Mountain-Piper-website/index.html` without rewriting the address bar, so React Router sees
`/index.html`.

`src/main.tsx` strips that suffix before mounting:

```ts
if (window.location.pathname.endsWith('/index.html')) {
  const next = window.location.pathname.replace(/index\.html$/, '')
  window.history.replaceState(null, '', `${next}${window.location.search}${window.location.hash}`)
}
```

If this is happening, check that the bootstrap has not been moved after `createRoot(...)`, and that
`routerBasename()` still derives from `import.meta.env.BASE_URL`.

## The publish workflow keeps re-running

**Cause:** the bot's commit contains a path that is not in `paths-ignore`, so the commit retriggers
the workflow.

**Fix:** compare what the bot committed against the ignore list in
`.github/workflows/publish-pages.yml`:

```yaml
paths-ignore:
  - 'assets/**'
  - 'images/**'
  - 'index.html'
  - '404.html'
  - '.nojekyll'
  - 'favicon.svg'
  - 'robots.txt'
  - 'sitemap.xml'
```

If the publish script was extended to emit a new file, add that path here too.

## "Refusing to publish a bundle that would load blank"

```
Error: Built HTML does not reference /Mountain-Piper-website/assets/.
Refusing to publish a bundle that would load blank on GitHub Pages.
```

This is the guard in `scripts/publish-github-pages.mjs` doing its job. It means `dist/index.dev.html`
does not contain the expected base path.

Usually the cause is that `pagesBase` was changed in **one** of the two places it appears:

- `vite.config.ts` → `const pagesBase = '/Mountain-Piper-website/'`
- `scripts/publish-github-pages.mjs` → `const pagesBase = '/Mountain-Piper-website/'`

They must match. If you are deliberately moving the site to a domain root, set both to `'/'` **and**
update the guard's expectation in the same commit.

Verify locally without publishing:

```bash
npx vite build --mode pages --outDir dist-pages --emptyOutDir
grep -o '/[^"]*assets/[^"]*' dist-pages/index.dev.html | head -1
```

## Local dev shows the wrong page at /

**Cause:** the `serveDevIndex` middleware in `vite.config.ts` is not rewriting `/` to
`/index.dev.html`. This happens if the plugin was removed, or if a static `index.html` at the
project root is being served first.

Check the plugin is still in the array:

```ts
const plugins: PluginOption[] = [react(), tailwindcss(), serveDevIndex()];
```

And that `build.rollupOptions.input` still points at `index.dev.html`.

## npm ci fails after a package.json change

`npm ci` refuses to run when `package.json` and `package-lock.json` disagree. After editing
`package.json` — including the `name`, `version` or `license` fields — resynchronise:

```bash
npm install --package-lock-only
git add package.json package-lock.json
```

Commit both together.

## Type or lint errors block the build

`npm run build` runs `tsc -b` first, so a type error stops the bundle before Vite starts.

```bash
npm run typecheck      # types only
npm run lint           # lint only
npm run lint:fix       # lint with automatic fixes
```

`tsconfig.json` is a solution file with two projects: `tsconfig.app.json` (the app, `src/`) and
`tsconfig.node.json` (`vite.config.ts`). An error in the Vite config is checked against the
*node* project, which is stricter — it enables `noUnusedLocals`, `noUnusedParameters` and
`verbatimModuleSyntax`. That last one means type-only imports in `vite.config.ts` must use
`import type`.

## Duplicate meta tags or JSON-LD after navigating

**Symptom:** after clicking between pages, `<head>` contains several
`<meta name="description">` elements or many `<script type="application/ld+json">` blocks.

**Cause:** `src/components/SEO.tsx` finds-or-creates meta nodes by selector and removes previous
JSON-LD by the `data-seo-jsonld` marker. Removing that attribute, or rendering `<SEO />` more than
once on a page, breaks the reconciliation.

Check:

```bash
grep -n "data-seo-jsonld" src/components/SEO.tsx
grep -rc "<SEO" src/pages/
```

Each page should render exactly one `<SEO />`.

## Changes are not appearing on the live site

Work through these in order:

1. **Did the merge reach `main`?** `publish-pages.yml` only runs on `main`.
2. **Did the workflow succeed?** Check the
   [Actions tab](https://github.com/zazieproductions/Mountain-Piper-website/actions).
3. **Did it commit?** A run that logs *"Published files already match this build"* produced no
   change — the source edit did not affect the output.
4. **Is it a CDN cache?** Pages caches at the edge. Append `?v=1` to the URL, or hard-reload.
5. **Is it your browser?** The JS bundle filename is content-hashed, but `index.html` is not. Force
   a reload with DevTools open and "Disable cache" enabled.

To see exactly what CI would publish, download the `pages-build` artefact from the CI run — it is
retained for 7 days.
