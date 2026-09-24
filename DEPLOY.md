# Deploying Mountain Piper to Vercel

This is a **Vite + React + TypeScript single-page app**. It builds to fully static
files in `dist/`, so it needs no server, no database, and **no environment
variables**. That makes it a zero-friction Vercel deploy.

Everything Vercel needs is already configured in [`vercel.json`](./vercel.json):

| Setting | Value |
| --- | --- |
| Framework preset | Vite (auto-detected) |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` (default) |
| Node version | `22.x` (via `engines` in `package.json`) |

---

## Option A — Vercel dashboard (recommended, ~2 minutes)

1. Go to **https://vercel.com/new** and sign in with **GitHub**.
2. Grant the Vercel GitHub App access to the `zazieproductions` org / the
   `Mountain-Piper-website` repo if prompted.
3. Click **Import** next to `Mountain-Piper-website`.
4. Leave the build settings as-is — `vercel.json` pre-fills them. Confirm it shows
   *Framework Preset: **Vite***, *Build Command: **npm run build***,
   *Output Directory: **dist***.
5. Click **Deploy**.

You'll get a permanent URL like `https://mountain-piper-website.vercel.app`.

> **Tip:** on the deploy screen you can change the **Project Name** to control the
> URL slug — e.g. `mountain-piper` gives `https://mountain-piper.vercel.app`.

### Which branch should Vercel build?

Deploy **`main`**. The config files added for this setup
(`vercel.json`, the `engines` field, and this doc) live on the
`arena/01a0d52d-mountain-piper-website` branch, so **merge that pull request into
`main` first**. Vercel will then build `main` automatically.

Once connected, every push to `main` redeploys production, and every pull request
gets its own throwaway preview URL — handy for reviewing changes before they go live.

---

## Option B — Vercel CLI

```bash
npm install -g vercel
vercel login          # opens a browser to authenticate
cd Mountain-Piper-website
vercel link           # associates this folder with a Vercel project
vercel --prod         # builds and deploys to production
```

The `.vercel/` directory this creates is already in `.gitignore`, so project-link
metadata won't be committed.

---

## Option C — custom domain (the `.dev` question)

The free `*.vercel.app` URL is permanent and HTTPS-enabled, and is usually enough.
If you want your own domain:

- **`.dev`** is a paid top-level domain operated by Google. You must **buy it from a
  registrar** (Cloudflare Registrar, Porkbun, Namecheap, etc.) — roughly
  **$12–16/year**. It is not something Vercel gives you for free.
- `.dev` is on the **HSTS preload list**, meaning browsers force HTTPS. Certificates
  are handled automatically by Vercel (Let's Encrypt), so this is a non-issue in
  practice — but the domain will simply not work over plain HTTP.
- To attach it: **Vercel → Project → Settings → Domains → Add**, then either point
  the domain's **nameservers** at Vercel or add the **A / CNAME records** Vercel
  shows you at your registrar. DNS propagation takes a few minutes to a few hours.

For a local business site, a `.com` is generally better for discoverability and
costs about the same; `.dev` reads as technical/developer-oriented.

---

## After deploying — quick checklist

- [ ] Homepage loads and the hero image renders.
- [ ] All four photos in `public/images/` load (`kit-rashid-*`).
- [ ] Animations run (the site uses `framer-motion`).
- [ ] Mobile menu opens/closes.
- [ ] Any deep link (e.g. `/anything`) returns the homepage rather than a 404 —
      handled by the `rewrites` rule in `vercel.json`.
- [ ] Lighthouse/HTTPS padlock shows a valid certificate.

## Known minor issue

`index.html` references `/favicon.svg`, but that file does not exist in `public/`.
The site works fine without it; the browser tab simply shows no icon. Drop a
`favicon.svg` into `public/` whenever you want to fix it.

## Note on routing

`react-router-dom` is listed as a dependency but is **not currently used** — the app
is a single page with no client-side routes. The `rewrites` rule in `vercel.json` is
therefore just a safety net (and future-proofs the deploy if routing is added later).
