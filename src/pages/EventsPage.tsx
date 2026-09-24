import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, Music2, GraduationCap, Church } from 'lucide-react';
import { SEO } from '../components/SEO';

export function EventsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Bagpiper for Events",
      "name": "Bagpiper for Events Asheville | Highland Bagpiper Western North Carolina",
      "description": "Professional bagpiper for events in Asheville and Western North Carolina. Ceremonies, commencements, festivals, church services, and private events.",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Mountain Piper - Kit Rashid",
        "telephone": "+1-828-974-1719",
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
        { "@type": "ListItem", "position": 2, "name": "Bagpiper for Events Asheville", "item": "https://mountainpiperavl.com/events" }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Bagpiper for Events Asheville | Ceremonies, Festivals & Private Events"
        description="Hire a professional bagpiper for events in Asheville and Western North Carolina. Highland bagpipes for commencements, festivals, church services, Kirkin' o' the Tartans and private events."
        canonicalPath="/events"
        structuredData={structuredData}
      />

      <section className="page-hero" aria-labelledby="events-heading">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Bagpiper for Events Asheville</li>
            </ol>
          </nav>
          <p className="eyebrow"><Sparkles size={14} aria-hidden="true" /> Highland bagpiper for events in Western North Carolina</p>
          <h1 id="events-heading">Bagpiper for events in Asheville <em>that call for pageantry.</em></h1>
          <p className="lead">
            From college commencements and Kirkin' o' the Tartans to festivals, sporting events, and private celebrations, the Highland bagpipe brings emotional power and tradition. Kit Rashid performs as an Asheville bagpiper for events across Western North Carolina.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button gold">Check event date <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link to="/weddings" className="button outline-light">Wedding bagpipes</Link>
          </div>
        </div>
      </section>

      <section className="content-section section-pad" aria-labelledby="events-types-heading">
        <div className="container">
          <div style={{ maxWidth: '760px', marginBottom: '48px' }}>
            <p className="eyebrow dark">Event types</p>
            <h2 id="events-types-heading" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, fontFamily: 'Libre Caslon Display' }}>Highland bagpipes for ceremonies and celebrations throughout WNC.</h2>
            <div className="prose" style={{ marginTop: '16px' }}>
              <p>
                As a Highland bagpiper based in Asheville, Kit has performed for a wide range of events across Western North Carolina and beyond — each with its own traditions, timing, and audience. Every event performance is tailored to the setting and purpose.
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
              <p>College and school commencements call for music that marks transition with dignity. Highland bagpipes provide a stately processional for graduates and faculty in Asheville and Western North Carolina.</p>
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
              <p>Kirkin' o' the Tartans, Scottish heritage services, and other church observances are a natural fit for Highland bagpipes. Respectful, traditional music for congregations in Asheville and WNC.</p>
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
              <p>Festivals, sporting events, corporate gatherings, regattas, horse races, and private parties benefit from the unmistakable presence of Highland bagpipes — festive, memorable, and photogenic.</p>
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
            <h2 id="event-details-heading" style={{ fontFamily: 'Libre Caslon Display', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05 }}>What to expect from an Asheville bagpiper for your event.</h2>
            <div className="prose" style={{ marginTop: '16px' }}>
              <p>
                Booking a bagpiper for events in Asheville and Western North Carolina starts with a conversation about your event's purpose, venue, and schedule. Kit provides guidance on timing, placement, and repertoire so the bagpipes support your event rather than overwhelm it.
              </p>
              <p>
                As a professional-grade piper and instructor for the Grandfather Mountain Highlanders, Kit brings both musical standards and practical experience with mountain venues, variable weather, and diverse audiences.
              </p>
            </div>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> Local Asheville bagpiper with 43 years experience</li>
              <li><Check aria-hidden="true" /> Professional-grade EUSPBA competitor</li>
              <li><Check aria-hidden="true" /> Full Highland dress and polished presentation</li>
              <li><Check aria-hidden="true" /> Direct coordination — no agency, no middleman</li>
            </ul>
          </div>
          <div style={{ background: 'white', border: '1px solid #ddd6ca', padding: '28px' }}>
            <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '22px', margin: '0 0 16px' }}>Past event settings in WNC and beyond</h3>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--muted)', lineHeight: 1.8 }}>
              <li>College commencements</li>
              <li>Kirkin' o' the Tartans services</li>
              <li>Collegiate sporting events</li>
              <li>Festivals and cultural celebrations</li>
              <li>Regattas and horse races</li>
              <li>Church observances and private ceremonies</li>
            </ul>
            <div style={{ marginTop: '24px', padding: '16px', background: '#f5f1e8', borderLeft: '3px solid var(--gold)', fontSize: '13px', lineHeight: 1.6, color: '#4a5a53' }}>
              <strong>Asheville and Western North Carolina:</strong> Share your event type, date, and venue location when you inquire. Kit will respond personally with availability.
            </div>
            <Link to="/contact" className="button green" style={{ width: '100%', marginTop: '20px' }}>Inquire about your event <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="contact section-pad" aria-labelledby="events-contact-heading">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <p className="eyebrow">Book an Asheville bagpiper for your event</p>
          <h2 id="events-contact-heading" style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: .98, fontFamily: 'Libre Caslon Display' }}>Make your event in Western North Carolina unforgettable.</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginTop: '20px', lineHeight: 1.7 }}>
            Tell Kit about your event in Asheville or Western North Carolina — date, location, and the atmosphere you're envisioning — for a personal response.
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
