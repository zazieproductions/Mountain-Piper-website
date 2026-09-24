import { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowRight, CalendarDays, Music2 } from 'lucide-react';

function BrandMark() {
  return (
    <Link className="brand" to="/" aria-label="Mountain Piper home - Asheville Bagpiper">
      <span className="brand-seal" aria-hidden="true">
        <svg viewBox="0 0 52 52" role="img" aria-hidden="true">
          <path d="M7 35 20 16l7 10 5-7 13 16" />
          <path d="M12 35h28M19 39h14" />
          <path d="M37 11v17M34 14h6" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>Mountain Piper</strong>
        <small>Kit Rashid · Asheville, NC</small>
      </span>
    </Link>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBookButton, setShowBookButton] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  // Show floating CTA only between hero and contact on homepage, always visible on other pages after scroll
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (location.pathname === '/') {
        const hero = document.getElementById('home-hero');
        const contact = document.getElementById('contact');
        if (!hero || !contact) return;
        const pastHero = hero.getBoundingClientRect().bottom < 120;
        const beforeContact = contact.getBoundingClientRect().top > window.innerHeight * 0.85;
        setShowBookButton(pastHero && beforeContact);
      } else {
        // On inner pages, show after 400px scroll
        setShowBookButton(window.scrollY > 400);
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [location.pathname]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu with Escape, handle focus trap basics
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    document.body.style.overflow = 'hidden';
    // Focus first link when menu opens
    setTimeout(() => firstMenuLinkRef.current?.focus(), 100);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { to: '/weddings', label: 'Weddings', number: '01' },
    { to: '/funerals-memorials', label: 'Funerals & Memorials', number: '02' },
    { to: '/events', label: 'Events', number: '03' },
    { to: '/lessons', label: 'Lessons', number: '04' },
    { to: '/about', label: 'About Kit', number: '05' },
    { to: '/contact', label: 'Contact', number: '06' },
  ];

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <NavLink to="/weddings">Weddings</NavLink>
            <NavLink to="/funerals-memorials">Funerals</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/lessons">Lessons</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <Link className="header-cta" to="/contact">
            Check availability <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-inner">
          <p className="eyebrow">Navigate</p>
          {navLinks.map((link, idx) => (
            <Link
              key={link.to}
              to={link.to}
              ref={idx === 0 ? firstMenuLinkRef : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <span>{link.number}</span> {link.label} <ArrowRight aria-hidden="true" />
            </Link>
          ))}
          <div className="mobile-contact">
            <a href="tel:+18289741719">
              <Phone size={17} aria-hidden="true" /> 828.974.1719
            </a>
            <a href="mailto:mountainpiper1@gmail.com">
              <Mail size={17} aria-hidden="true" /> mountainpiper1@gmail.com
            </a>
            <p style={{ color: 'rgba(255,255,255,.5)', fontSize: '11px', marginTop: '12px' }}>
              Professional Highland bagpiper based in Asheville, North Carolina, serving Western North Carolina.
            </p>
          </div>
        </div>
      </div>

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer>
        <div className="footer-main container">
          <div>
            <BrandMark />
            <p>
              Traditional Highland bagpiping for meaningful occasions in Asheville and Western North Carolina.
              Weddings, funerals, memorials, ceremonies and bagpipe lessons.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '12px', alignItems: 'center', color: 'rgba(255,255,255,.5)', fontSize: '11px' }}>
              <Music2 size={14} aria-hidden="true" /> Asheville bagpiper · Highland bagpiper
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <strong>Explore</strong>
            <Link to="/">Asheville Bagpiper</Link>
            <Link to="/weddings">Wedding Bagpiper Asheville</Link>
            <Link to="/funerals-memorials">Funeral Bagpiper Asheville</Link>
            <Link to="/events">Bagpiper for Events</Link>
            <Link to="/lessons">Bagpipe Lessons Asheville</Link>
            <Link to="/about">Scottish Bagpiper WNC</Link>
            <Link to="/contact">Contact & Booking</Link>
          </nav>
          <div className="footer-contact">
            <strong>Get in touch</strong>
            <a href="tel:+18289741719">828.974.1719</a>
            <a href="mailto:mountainpiper1@gmail.com">mountainpiper1@gmail.com</a>
            <address>
              <span>Asheville, North Carolina</span>
              <span style={{ display: 'block', marginTop: '6px', fontSize: '11px', color: 'rgba(255,255,255,.45)' }}>
                Serving Western North Carolina including Buncombe County and surrounding areas
              </span>
            </address>
          </div>
        </div>
        <div className="footer-bottom container">
          <span>© {new Date().getFullYear()} Mountain Piper - Kit Rashid. All rights reserved. Asheville, NC.</span>
          <Link to="/">Back to top ↑</Link>
        </div>
      </footer>

      <Link
        className={`mobile-book ${showBookButton ? 'visible' : ''}`}
        to="/contact"
        aria-hidden={!showBookButton}
        tabIndex={showBookButton ? 0 : -1}
      >
        <CalendarDays size={17} aria-hidden="true" /> Check availability
      </Link>
    </div>
  );
}
