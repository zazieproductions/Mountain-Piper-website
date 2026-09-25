/**
 * Canonical site identity.
 *
 * Lives outside any component module so `src/components/SEO.tsx` can stay a
 * pure component file (required by `react-refresh/only-export-components`) and
 * so every route resolves absolute URLs from a single source of truth.
 */

/** Canonical origin used for canonical links, Open Graph URLs and JSON-LD. */
export const siteUrl = 'https://mountainpiperavl.com';

/** Default Open Graph image, used when a route does not pass `ogImage`. */
export const defaultOgImage = `${siteUrl}/images/kit-rashid-mountains-1200.webp`;

/** Business name appended to route titles that do not already carry it. */
export const siteName = 'Mountain Piper - Kit Rashid';
