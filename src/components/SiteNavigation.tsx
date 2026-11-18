import { useCallback, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import type { KeyboardEvent, MouseEvent, RefObject } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, Mail, Menu, Phone, X } from 'lucide-react';

const mobileQuery = '(max-width: 900px)';
const isMobileViewport = () => window.matchMedia(mobileQuery).matches;

const navLinks = [
  { to: '/weddings', label: 'Weddings' },
  { to: '/funerals-memorials', label: 'Funerals & Memorials', shortLabel: 'Funerals' },
  { to: '/events', label: 'Events' },
  { to: '/lessons', label: 'Lessons' },
  { to: '/about', label: 'About Kit', shortLabel: 'About' },
  { to: '/contact', label: 'Contact' },
];

function MenuLinks({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  return navLinks.map(({ to, label, shortLabel }, index) => (
    <NavLink key={to} to={to} onClick={onNavigate}>
      {mobile && <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
      {mobile ? label : (shortLabel ?? label)}
      {mobile && <ArrowRight aria-hidden="true" />}
    </NavLink>
  ));
}

// The native modal makes the background inert. Wrap Tab at both ends so focus
// stays on menu controls rather than moving to the browser chrome.
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

function MobileMenu({ dialogRef }: { dialogRef: RefObject<HTMLDialogElement | null> }) {
  const [open, setOpen] = useState(false);

  function openMenu(event: MouseEvent<HTMLButtonElement>) {
    const dialog = dialogRef.current;
    if (!dialog) return;
    // Give native dismissal a return target even on pointer-only activation.
    event.currentTarget.focus({ preventScroll: true });
    dialog.showModal();
    dialog.querySelector<HTMLAnchorElement>('nav a')?.focus({ preventScroll: true });
    setOpen(true);
  }

  const closeMenu = () => dialogRef.current?.close();

  return (
    <>
      <button
        id="navigation-start"
        type="button"
        className="menu-toggle"
        aria-label="Open navigation menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={openMenu}
      >
        <Menu aria-hidden="true" />
      </button>
      <dialog
        id="mobile-menu"
        ref={dialogRef}
        className="mobile-menu"
        aria-labelledby="mobile-menu-title"
        onKeyDown={cycleMenuFocus}
        onClose={(event) => setOpen(event.currentTarget.open)}
      >
        <div className="mobile-menu-heading">
          <span id="mobile-menu-title">Site menu</span>
          <button type="button" className="menu-close" aria-label="Close navigation menu" onClick={closeMenu}>
            <X aria-hidden="true" />
          </button>
        </div>
        <div className="mobile-menu-inner">
          <nav className="mobile-nav" aria-label="Primary">
            <MenuLinks mobile onNavigate={closeMenu} />
          </nav>
          <div className="mobile-contact">
            <a href="tel:+18642070085"><Phone size={17} aria-hidden="true" /> +1 (864) 207-0085</a>
            <a href="mailto:mountainpiper1@gmail.com"><Mail size={17} aria-hidden="true" /> mountainpiper1@gmail.com</a>
          </div>
        </div>
      </dialog>
    </>
  );
}

export function SiteNavigation() {
  const { pathname } = useLocation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const handOffFocus = useRef(false);

  const subscribe = useCallback((notify: () => void) => {
    const media = window.matchMedia(mobileQuery);
    const onChange = () => {
      // Capture this before React unmounts the mobile dialog and its opener.
      handOffFocus.current = !media.matches && dialogRef.current?.open === true;
      notify();
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);
  const mobile = useSyncExternalStore(subscribe, isMobileViewport);

  useLayoutEffect(() => {
    if (mobile || !handOffFocus.current) return;
    handOffFocus.current = false;
    const nav = desktopNavRef.current;
    (nav?.querySelector<HTMLAnchorElement>('a[aria-current="page"]') ?? nav?.querySelector('a'))?.focus();
  }, [mobile]);

  return (
    <>
      {!mobile && (
        <nav id="navigation-start" className="desktop-nav" aria-label="Primary" tabIndex={-1} ref={desktopNavRef}>
          <MenuLinks />
        </nav>
      )}
      <Link className="header-cta" to="/contact">
        Check availability <ArrowRight size={16} aria-hidden="true" />
      </Link>
      {mobile && <MobileMenu key={pathname} dialogRef={dialogRef} />}
    </>
  );
}
