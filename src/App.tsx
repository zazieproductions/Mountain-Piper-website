import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { routerBasename } from './publicAsset';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { WeddingPage } from './pages/WeddingPage';
import { FuneralPage } from './pages/FuneralPage';
import { EventsPage } from './pages/EventsPage';
import { LessonsPage } from './pages/LessonsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function NotFoundPage() {
  return (
    <section className="page-hero" aria-labelledby="notfound-heading">
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <p className="eyebrow">404 — Page not found</p>
        <h1 id="notfound-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>This page has piped to a different glen.</h1>
        <p className="lead" style={{ margin: '20px auto 0' }}>
          The page you're looking for doesn't exist. Return home or contact Kit for help.
        </p>
        <div style={{ marginTop: '28px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="button gold">Back to home</Link>
          <Link to="/contact" className="button outline-light">Contact</Link>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={routerBasename()}>
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
