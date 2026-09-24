/**
 * URL for a file in `public/`.
 *
 * Vite serves that folder at the site root during dev. The GitHub Pages project
 * site publishes the repository itself, so the pages build copies those files to
 * the repository root and this helper prefixes `import.meta.env.BASE_URL`.
 */
export function publicAsset(path: string): string {
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
}

export function publicSrcSet(entries: Array<[path: string, descriptor: string]>): string {
  return entries.map(([path, descriptor]) => `${publicAsset(path)} ${descriptor}`).join(', ');
}

/** React Router basename. Undefined when the app is served from `/`. */
export function routerBasename(): string | undefined {
  const base = import.meta.env.BASE_URL;
  if (!base || base === '/') return undefined;
  return base.endsWith('/') ? base.slice(0, -1) : base;
}
