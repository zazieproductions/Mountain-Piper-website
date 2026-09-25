# Security policy

## Scope

This is a static marketing website. It has no backend, no database, no authentication and no
server-side code — the contact form composes a `mailto:` link entirely in the visitor's browser.
The attack surface is correspondingly small, but not zero.

What is in scope:

- **Dependency vulnerabilities** in `package.json` / `package-lock.json`.
- **Supply-chain and CI risk** in `.github/workflows/*` — notably the `contents: write` permission
  that lets `publish-pages.yml` commit build output back to `main`.
- **Client-side injection** — anywhere content-controlled data reaches `dangerouslySetInnerHTML`,
  `innerHTML`, `document.write` or a constructed URL.
- **Structured-data injection** — `src/components/SEO.tsx` writes JSON-LD into `<head>` via
  `script.textContent`. Any change there should be reviewed against script-injection risk.
- **Leaked credentials or secrets** accidentally committed to the repository.

Out of scope: the third-party services behind the site (GitHub Pages, Google Fonts), and general
penetration testing of infrastructure this project does not control.

## Reporting a vulnerability

**Please do not open a public issue for a security problem.**

Report privately by email:

> **mountainpiper1@gmail.com**
> Subject: `Security — Mountain Piper website`

Please include:

1. A description of the issue and its impact.
2. Steps to reproduce, or a proof of concept.
3. Affected file paths, versions or commit SHAs.
4. Whether the issue is already public.

There is no formal SLA, but reports are read and acknowledged as quickly as possible, and credit is
given to reporters who want it.

## Supported versions

Only the current `main` branch is supported. The live site is always whatever `main` last
published.

## Hardening already in place

- **Pinned lockfile.** CI installs with `npm ci`, so builds are reproducible.
- **Least-privilege CI.** `ci.yml` runs with `contents: read` only.
- **Concurrency guards.** Both workflows use `concurrency` groups with `cancel-in-progress` so
  parallel runs cannot interleave a commit.
- **Self-loop prevention.** `publish-pages.yml` uses `paths-ignore` so the bot's own commit cannot
  retrigger the pipeline.
- **Publish guard.** `scripts/publish-github-pages.mjs` refuses to write artefacts unless the build
  contains the expected base path, so a misconfigured build cannot go live.
- **Dependabot** monitors `npm` and `github-actions` for updates.
- **No secrets in the client bundle.** Vite exposes only `VITE_`-prefixed variables; none are used
  today.

If you add a dependency, a workflow, or any code that writes to the DOM from content data, please
keep this list accurate.
