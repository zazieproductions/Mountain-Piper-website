import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';

const navLinks = [
  { to: '/weddings', label: 'Weddings' },
  { to: '/funerals-memorials', label: 'Funerals & Memorials', shortLabel: 'Funerals' },
  { to: '/events', label: 'Events' },
  { to: '/lessons', label: 'Lessons' },
  { to: '/about', label: 'About Kit', shortLabel: 'About' },
  { to: '/contact', label: 'Contact' },
];

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
  const menuRef = useRef<HTMLDialogElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Leave focus alone on first paint: the skip link must be the first tab stop.
  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    menuRef.current?.close(); // Also covers browser Back/Forward while the menu is open.
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const mobile = window.matchMedia('(max-width: 900px)');
    const onResize = () => {
      if (!mobile.matches) {
        menuRef.current?.close();
        // The opener is now display:none. Continue at its visible equivalent.
        const nav = desktopNavRef.current;
        (nav?.querySelector<HTMLAnchorElement>('a[aria-current="page"]') ?? nav?.querySelector('a'))?.focus();
      }
    };
    mobile.addEventListener('change', onResize);
    return () => mobile.removeEventListener('change', onResize);
  }, [menuOpen]);

  function openMenu(event: MouseEvent<HTMLButtonElement>) {
    // Native dismissal restores the previously focused element. Some browsers
    // don’t focus a button on pointer activation, so establish the opener first.
    event.currentTarget.focus({ preventScroll: true });
    menuRef.current?.showModal();
    setMenuOpen(true);
    firstMenuLinkRef.current?.focus();
  }

  function closeMenu() {
    menuRef.current?.close();
  }

  // showModal() makes the background inert; wrap both ends of the tab sequence
  // so keyboard users can reach Close without leaving for the browser chrome.
  function cycleMenuFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== 'Tab') return;
    const controls = event.currentTarget.querySelectorAll<HTMLElement>('button, a[href]');
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Primary" ref={desktopNavRef}>
            {navLinks.map(({ to, label, shortLabel }) => (
              <NavLink key={to} to={to}>{shortLabel ?? label}</NavLink>
            ))}
          </nav>
          <Link className="header-cta" to="/contact">
            Check availability <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            onClick={openMenu}
            aria-label="Open navigation menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>

      <dialog
        ref={menuRef}
        id="mobile-menu"
        className="mobile-menu"
        aria-labelledby="menu-title"
        onClose={() => setMenuOpen(false)}
        onKeyDown={cycleMenuFocus}
      >
        <div className="mobile-menu-heading">
          <span id="menu-title">Site menu</span>
          <button type="button" className="menu-close" onClick={closeMenu} aria-label="Close navigation menu">
            <X aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-menu-inner" aria-label="Primary">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.to}
              to={link.to}
              ref={idx === 0 ? firstMenuLinkRef : undefined}
              onClick={closeMenu}
            >
              <span aria-hidden="true">0{idx + 1}</span> {link.label} <ArrowRight aria-hidden="true" />
            </NavLink>
          ))}
          <div className="mobile-contact">
            <a href="tel:+18642070085">
              <Phone size={17} aria-hidden="true" /> +1 (864) 207-0085
            </a>
            <a href="mailto:mountainpiper1@gmail.com">
              <Mail size={17} aria-hidden="true" /> mountainpiper1@gmail.com
            </a>
          </div>
        </nav>
      </dialog>

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer>
        <div className="footer-main container">
          <div>
            <BrandMark />
            <p>Live music for ceremonies and celebrations. Private and group lessons for those who want to play.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <strong>Explore</strong>
            <Link to="/">Home</Link>
            {navLinks.map(({ to, label }) => <Link key={to} to={to}>{label}</Link>)}
          </nav>
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
          <a href="#main-content">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </div>
  );
}
