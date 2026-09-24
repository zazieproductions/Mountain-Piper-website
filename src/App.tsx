import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { WeddingPage } from './pages/WeddingPage';
import { FuneralPage } from './pages/FuneralPage';
import { EventsPage } from './pages/EventsPage';
import { LessonsPage } from './pages/LessonsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route change for SEO and UX
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    // Focus main content for accessibility
    const main = document.getElementById('main-content');
    if (main) {
      main.focus({ preventScroll: true });
    }
  }, [pathname]);
  return null;
}

function NotFoundPage() {
  return (
    <section className="page-hero" aria-labelledby="notfound-heading">
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <p className="eyebrow">404 — Page not found</p>
        <h1 id="notfound-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>This page has piped to a different glen.</h1>
        <p className="lead" style={{ margin: '20px auto 0' }}>
          The page you're looking for doesn't exist. Try the Asheville bagpiper homepage or explore weddings, funerals, events, lessons, and contact.
        </p>
        <div style={{ marginTop: '28px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="button gold">Back to home — Asheville bagpiper</Link>
          <Link to="/contact" className="button outline-light">Contact</Link>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weddings" element={<WeddingPage />} />
          <Route path="/funerals-memorials" element={<FuneralPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
