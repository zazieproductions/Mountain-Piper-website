/**
 * Resolve a root-relative public asset path (e.g. 'images/photo.webp')
 * against the Vite base URL so assets load correctly when the site is
 * served from a subpath such as https://zazieproductions.github.io/Mountain-Piper-website/.
 */
export function publicPath(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
