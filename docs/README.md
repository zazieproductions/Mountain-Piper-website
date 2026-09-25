# Mountain Piper website — documentation

Technical documentation for the Mountain Piper marketing site. Start with the
[README](../README.md) for the overview; this directory is where the detail lives.

| Document | Read this when… |
|---|---|
| [**ARCHITECTURE.md**](ARCHITECTURE.md) | You are changing code. Component tree, routing, the SEO runtime, base-path handling, data flow. |
| [**DEPLOYMENT.md**](DEPLOYMENT.md) | You need to ship, roll back, or point a domain at the site. The GitHub Pages pipeline and the publish script. |
| [**SEO.md**](SEO.md) | You are writing or restructuring pages. Keyword map, head management, structured data, verification. |
| [**DESIGN-SYSTEM.md**](DESIGN-SYSTEM.md) | You are touching layout, colour or type. Tokens, scale, breakpoints, animation. |
| [**CONTENT.md**](CONTENT.md) | You are changing words, photos or business details. Written for non-developers. |
| [**TROUBLESHOOTING.md**](TROUBLESHOOTING.md) | Something is broken. |
| [**ROADMAP.md**](ROADMAP.md) | You want to know what is deliberately unfinished. |

Repository-level policy lives at the root:

- [CONTRIBUTING.md](../CONTRIBUTING.md) — how to make a change
- [SECURITY.md](../SECURITY.md) — how to report a vulnerability
- [LICENSE](../LICENSE) — terms

## Orientation

```
Request                     Build                        Deploy
────────                    ─────                        ──────
Browser                     index.dev.html  ── Vite ──►  index.html (generated)
  │                          src/main.tsx                assets/**  (generated)
  ├─ React Router            src/App.tsx                 images/**  (copied)
  │   (7 routes + 404)       src/pages/*.tsx             robots.txt, sitemap.xml
  │                          src/components/*
  └─ <SEO/> rewrites <head>  src/index.css
       per route             src/siteConfig.ts
```

Three facts explain most of the design:

1. **There is no backend.** The contact form builds a `mailto:` URI. Nothing is stored server-side.
2. **GitHub Pages serves the repository root of `main`, not a build output directory.** So the
   compiled bundle is committed to the repository by CI.
3. **It is a client-rendered SPA that still has to rank in search.** Hence `<SEO />`, the static
   head in `index.dev.html`, and JSON-LD on every route.

If you are here to fix a blank page on the live site, go straight to
[DEPLOYMENT.md](DEPLOYMENT.md) or the
[blank page entry in TROUBLESHOOTING.md](TROUBLESHOOTING.md#blank-page-on-github-pages).
