import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SiteNavigation } from './SiteNavigation';

function BrandMark() {
  return (
    <Link className="brand" to="/">
      <span className="brand-seal" aria-hidden="true">
        <svg viewBox="0 0 52 52" focusable="false">
          <path d="M7 35 20 16l7 10 5-7 13 16" />
          <path d="M12 35h28M19 39h14" />
          <path d="M37 11v17M34 14h6" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>Mountain Piper<span className="sr-only"> home</span></strong>
        <small>Kit Rashid</small>
      </span>
    </Link>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  // Leave focus alone on first paint: the skip link must be the first tab stop.
  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <SiteNavigation />
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer>
        <div className="footer-main container">
          <div>
            <BrandMark />
            <p>Live music for ceremonies and celebrations. Private and group lessons for those who want to play.</p>
          </div>
          <div className="footer-contact">
            <strong>Get in touch</strong>
            <a href="tel:+18642070085">+1 (864) 207-0085</a>
            <a href="mailto:mountainpiper1@gmail.com">mountainpiper1@gmail.com</a>
            <address>
              <span>Asheville, North Carolina</span>
              <span style={{ display: 'block', marginTop: '6px', fontSize: '11px', color: 'rgba(255,255,255,.45)' }}>
                Available throughout Western North Carolina
              </span>
            </address>
          </div>
        </div>
        <div className="footer-bottom container">
          <span>© {new Date().getFullYear()} Mountain Piper - Kit Rashid. All rights reserved.</span>
          <a href="#navigation-start">Back to navigation <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </div>
  );
}
