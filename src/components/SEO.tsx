import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
};

const SITE_URL = 'https://mountainpiperavl.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/kit-rashid-mountains-1200.webp`;

export function SEO({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  structuredData,
  noIndex = false,
}: SEOProps) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const fullTitle = title.includes('Mountain Piper') ? title : `${title} | Mountain Piper - Kit Rashid`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Robots
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');

    // OG tags
    const setOG = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setOG('og:title', fullTitle);
    setOG('og:description', description);
    setOG('og:url', canonicalUrl);
    setOG('og:type', ogType);
    setOG('og:image', ogImage);

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Structured data
    const existing = document.querySelectorAll('script[data-seo-jsonld="true"]');
    existing.forEach((e) => e.remove());

    if (structuredData) {
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      dataArray.forEach((data) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-jsonld', 'true');
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }
  }, [fullTitle, description, canonicalUrl, ogImage, ogType, structuredData, noIndex]);

  return null;
}

export const siteUrl = SITE_URL;
