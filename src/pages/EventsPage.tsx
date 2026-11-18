import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, GraduationCap, Church } from 'lucide-react';
import { SEO } from '../components/SEO';

export function EventsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Piper for Events",
      "name": "Piper for Events Asheville | Highland Piper Western North Carolina",
      "description": "Professional piper for events in Asheville and Western North Carolina. Ceremonies, commencements, festivals, church services, and private events.",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Mountain Piper - Kit Rashid",
        "telephone": "+18642070085",
        "address": { "@type": "PostalAddress", "addressLocality": "Asheville", "addressRegion": "NC", "addressCountry": "US" }
      },
      "areaServed": [
        { "@type": "City", "name": "Asheville" },
        { "@type": "AdministrativeArea", "name": "Western North Carolina" }
      ],
      "url": "https://mountainpiperavl.com/events"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mountainpiperavl.com/" },
        { "@type": "ListItem", "position": 2, "name": "Piper for Events Asheville", "item": "https://mountainpiperavl.com/events" }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Piper for Events Asheville | Ceremonies, Festivals & Private Events"
        description="Hire a professional piper for events in Asheville and Western North Carolina. Highland bagpipes for commencements, festivals, church services, Kirkin' o' the Tartans and private events."
        canonicalPath="/events"
        structuredData={structuredData}
      />

      <section className="page-hero" aria-labelledby="events-heading">
        <div className="container">
          <h1 id="events-heading">Ceremonies &amp; <em>events</em></h1>
          <p className="lead">
            The opening bars of a march tell a crowd when to turn and watch the procession. Based in Asheville, Kit Rashid plays for communities throughout Western North Carolina.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button gold">Check your date <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link to="/weddings" className="button outline-light">Wedding bagpipes</Link>
          </div>
        </div>
      </section>

      <section className="content-section section-pad" aria-labelledby="events-types-heading">
        <div className="container">
          <div style={{ maxWidth: '760px', marginBottom: '48px' }}>
            <h2 id="events-types-heading" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, fontFamily: 'Libre Caslon Display' }}>Where the pipes fit in</h2>
            <div className="prose" style={{ marginTop: '16px' }}>
              <p>
                Some programs call for a piper out front, setting the pace. In others, the music belongs at the door, where guests can pause to listen on their way in.
              </p>
            </div>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-top">
                <span className="service-icon" aria-hidden="true"><GraduationCap size={22} /></span>
                <span className="service-number">01</span>
              </div>
              <h3>Commencements</h3>
              <p>A measured march gives graduates and faculty an even pace as they enter the hall. Kit can lead the line or play from a fixed spot.</p>
              <ul>
                <li><Check size={15} aria-hidden="true" /> Processional & recessional</li>
                <li><Check size={15} aria-hidden="true" /> Coordination with organizers</li>
                <li><Check size={15} aria-hidden="true" /> Indoor/outdoor placement</li>
              </ul>
            </article>
            <article className="service-card">
              <div className="service-top">
                <span className="service-icon" aria-hidden="true"><Church size={22} /></span>
                <span className="service-number">02</span>
              </div>
              <h3>Kirkin' & Church Services</h3>
              <p>Kit works with the clergy to fit the pipes into the order of worship, leaving space for readings and congregational singing.</p>
              <ul>
                <li><Check size={15} aria-hidden="true" /> Kirkin' o' the Tartans</li>
                <li><Check size={15} aria-hidden="true" /> Hymns and processionals</li>
                <li><Check size={15} aria-hidden="true" /> Coordination with clergy</li>
              </ul>
            </article>
            <article className="service-card">
              <div className="service-top">
                <span className="service-icon" aria-hidden="true"><Sparkles size={22} /></span>
                <span className="service-number">03</span>
              </div>
              <h3>Festivals & Private Events</h3>
              <p>A short set of tunes can welcome guests to a company dinner or draw spectators to the start of a race. The sound carries especially well outdoors.</p>
              <ul>
                <li><Check size={15} aria-hidden="true" /> Festival atmosphere</li>
                <li><Check size={15} aria-hidden="true" /> Sporting events & regattas</li>
                <li><Check size={15} aria-hidden="true" /> Private celebrations</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section alt section-pad" aria-labelledby="event-details-heading">
        <div className="container two-col">
          <div>
            <h2 id="event-details-heading" style={{ fontFamily: 'Libre Caslon Display', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05 }}>Working out the timing</h2>
            <div className="prose" style={{ marginTop: '16px' }}>
              <p>
                Where would you like the music to come in? Send Kit a running order, even a rough one. He’ll work with the organizer to settle on a starting cue and decide how long to play.
              </p>
              <p>
                As a professional-grade piper and instructor for the Grandfather Mountain Highlanders, Kit brings both musical standards and practical experience with mountain venues, variable weather, and diverse audiences.
              </p>
            </div>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> Local Asheville piper with 43 years experience</li>
              <li><Check aria-hidden="true" /> Professional-grade EUSPBA competitor</li>
              <li><Check aria-hidden="true" /> Full Highland dress and polished presentation</li>
              <li><Check aria-hidden="true" /> Direct coordination — no agency, no middleman</li>
            </ul>
          </div>
          <div style={{ background: 'white', border: '1px solid #ddd6ca', padding: '28px' }}>
            <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '22px', margin: '0 0 16px' }}>An outdoor gathering</h3>
            <p className="section-copy">Kit has played for regattas and horse races. On a large course, knowing where spectators will gather helps him choose a spot where the tune will carry.</p>
            <Link to="/contact" className="button green" style={{ width: '100%', marginTop: '20px' }}>Discuss your venue <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="contact section-pad" aria-labelledby="events-contact-heading">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 id="events-contact-heading" style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: .98, fontFamily: 'Libre Caslon Display' }}>Bring the pipes to your gathering</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginTop: '20px', lineHeight: 1.7 }}>
            Send Kit your date and venue. If you already have a tune in mind, he’d like to hear about that, too.
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button gold">Check availability <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link to="/lessons" className="button outline-light">Bagpipe lessons Asheville</Link>
          </div>
        </div>
      </section>
    </>
  );
}
