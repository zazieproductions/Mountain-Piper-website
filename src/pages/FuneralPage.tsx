import { Link } from 'react-router-dom';
import { ArrowRight, Check, Church, Heart, Music2, Clock, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';

export function FuneralPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Piper for Funeral and Memorial",
      "name": "Funeral Piper Asheville | Memorial Piper Western North Carolina",
      "description": "Professional funeral and memorial piper in Asheville and Western North Carolina. Dignified Highland bagpipes for funerals, memorials, graveside services and celebrations of life.",
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
      "url": "https://mountainpiperavl.com/funerals-memorials"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mountainpiperavl.com/" },
        { "@type": "ListItem", "position": 2, "name": "Funeral and Memorial Piper Asheville", "item": "https://mountainpiperavl.com/funerals-memorials" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What music do you play for funerals and memorials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Grace is the most requested funeral bagpipe tune, along with Going Home, Flowers of the Forest, Danny Boy, and hymn adaptations. Family requests are welcomed when possible on Highland pipes."
          }
        },
        {
          "@type": "Question",
          "name": "Do you play for graveside services in Asheville and Western North Carolina?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Kit provides bagpipes for graveside services, church funerals, memorial services and celebrations of life throughout Asheville and Western North Carolina, coordinating timing with funeral directors and clergy."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle timing for funeral bagpipes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kit arrives early, warms up out of earshot, and coordinates cues with the officiant or funeral director. The goal is a dignified, seamless tribute that supports the family and service, not draws attention away."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Funeral Piper Asheville | Memorial Piper Western North Carolina"
        description="Professional funeral and memorial piper in Asheville and Western North Carolina. Dignified Highland bagpipes for funerals, graveside services, memorials and celebrations of life. Based in Asheville, NC."
        canonicalPath="/funerals-memorials"
        ogImage="https://mountainpiperavl.com/images/kit-rashid-performing-800.webp"
        structuredData={structuredData}
      />

      <section className="page-hero" aria-labelledby="funeral-heading">
        <div className="container">
          <h1 id="funeral-heading">Funerals &amp; <em>memorials</em></h1>
          <p className="lead">
            Kit Rashid plays for families in Asheville and throughout Western North Carolina. A hymn at the church door or a slow air at the graveside can leave room for reflection without asking anyone to speak.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button gold">Inquire about a service <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link to="/about" className="button outline-light">About Kit</Link>
          </div>
        </div>
      </section>

      <section className="content-section section-pad" aria-labelledby="funeral-services-heading">
        <div className="container two-col">
          <div>
            <h2 id="funeral-services-heading">Music for the service</h2>
            <div className="prose">
              <p>
                Some families ask for a single tune as the service ends. Others would like music as mourners gather or accompany a loved one to the graveside. Either can be arranged with your officiant.
              </p>
              <p>
                Kit arrives early, tunes out of earshot, and takes his cue from the funeral director or clergy so the family needn’t watch the clock.
              </p>
            </div>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> <strong>Graveside bagpipes</strong> — Amazing Grace and laments as final tribute</li>
              <li><Check aria-hidden="true" /> <strong>Church and chapel services</strong> — processional, hymns, recessional</li>
              <li><Check aria-hidden="true" /> <strong>Memorials & celebrations of life</strong> — tailored music for indoor or outdoor settings</li>
              <li><Check aria-hidden="true" /> <strong>Coordination</strong> — direct communication with funeral home and officiant</li>
            </ul>
          </div>
          <div>
            <div style={{ background: 'white', border: '1px solid #ddd6ca', padding: '28px' }}>
              <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '26px', margin: '0 0 16px' }}>On the day of the service</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px' }}><Clock size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none', marginTop: '2px' }} /><span><strong>Early arrival & preparation</strong><br /><small style={{ color: 'var(--muted)' }}>Warm-up out of earshot, confirm cues</small></span></li>
                <li style={{ display: 'flex', gap: '12px' }}><Church size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none', marginTop: '2px' }} /><span><strong>Service or graveside placement</strong><br /><small style={{ color: 'var(--muted)' }}>Positioned for sight lines and acoustics</small></span></li>
                <li style={{ display: 'flex', gap: '12px' }}><Music2 size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none', marginTop: '2px' }} /><span><strong>Featured tribute</strong><br /><small style={{ color: 'var(--muted)' }}>Amazing Grace, Going Home, or family request</small></span></li>
                <li style={{ display: 'flex', gap: '12px' }}><Heart size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none', marginTop: '2px' }} /><span><strong>Quiet departure</strong><br /><small style={{ color: 'var(--muted)' }}>Respectful exit after final notes</small></span></li>
              </ul>
              <Link to="/contact" className="button green" style={{ width: '100%', marginTop: '24px' }}>Request availability <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <div style={{ marginTop: '20px', padding: '20px', background: '#ebe5d9', borderLeft: '3px solid var(--wine)' }}>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: '#4a5a53' }}>
                <strong>If plans are still taking shape:</strong> Share the name of the funeral home, church, or cemetery. The remaining details can follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt section-pad" aria-labelledby="memorial-repertoire-heading">
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <h2 id="memorial-repertoire-heading" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, fontFamily: 'Libre Caslon Display' }}>Choosing a tribute</h2>
            <div className="prose" style={{ marginTop: '20px' }}>
              <p>
                Funeral bagpipe music is often simple, slow, and deeply familiar. Kit can help families choose from traditional laments and hymn adaptations that translate well to Highland pipes, or honor a specific request when possible.
              </p>
            </div>
          </div>
          <div className="service-grid" style={{ marginTop: '40px' }}>
            <article className="service-card" style={{ minHeight: 'auto' }}>
              <h3 style={{ marginTop: 0 }}>Most requested</h3>
              <ul>
                <li><Check size={15} aria-hidden="true" /> Amazing Grace</li>
                <li><Check size={15} aria-hidden="true" /> Going Home</li>
                <li><Check size={15} aria-hidden="true" /> Flowers of the Forest</li>
                <li><Check size={15} aria-hidden="true" /> Danny Boy / Londonderry Air</li>
              </ul>
            </article>
            <article className="service-card" style={{ minHeight: 'auto' }}>
              <h3 style={{ marginTop: 0 }}>Hymns & tributes</h3>
              <ul>
                <li><Check size={15} aria-hidden="true" /> How Great Thou Art (adapted)</li>
                <li><Check size={15} aria-hidden="true" /> Highland Cathedral</li>
                <li><Check size={15} aria-hidden="true" /> Green Hills of Tyrol</li>
                <li><Check size={15} aria-hidden="true" /> Military and first-responder honors</li>
              </ul>
            </article>
            <article className="service-card" style={{ minHeight: 'auto' }}>
              <h3 style={{ marginTop: 0 }}>Service considerations</h3>
              <ul>
                <li><Check size={15} aria-hidden="true" /> Indoor vs. outdoor acoustics</li>
                <li><Check size={15} aria-hidden="true" /> Timing with clergy or celebrant</li>
                <li><Check size={15} aria-hidden="true" /> Graveside placement and wind</li>
                <li><Check size={15} aria-hidden="true" /> Family seating and sight lines</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad" aria-labelledby="funeral-faq-heading">
        <div className="container faq-grid">
          <div>
            <h2 id="funeral-faq-heading" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05, fontFamily: 'Libre Caslon Display' }}>Arranging the music</h2>
            <p style={{ color: 'var(--muted)', marginTop: '16px', lineHeight: 1.7 }}>
              You can get in touch even if the order of service hasn’t been decided.
            </p>
            <Link to="/contact" className="button outline" style={{ marginTop: '20px' }}>Ask about a service <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How much notice do you need for a funeral or memorial service?</h3>
              <p>Kit makes every effort to accommodate services at short notice. Call +1 (864) 207-0085 for the quickest response.</p>
            </div>
            <div className="faq-item">
              <h3>Do you coordinate with the funeral home or church?</h3>
              <p>Yes. Kit coordinates timing, placement, and cues with the funeral director, clergy, and your family’s point of contact.</p>
            </div>
            <div className="faq-item">
              <h3>Can bagpipes be played indoors for a funeral service?</h3>
              <p>Highland bagpipes are loud and are often best suited for outdoor graveside services, church entrances, or large chapels. For indoor services, placement in a foyer, narthex, or at a distance can work well. Kit can advise based on your venue.</p>
            </div>
            <div className="faq-item">
              <h3>What should we share when inquiring about funeral bagpipes?</h3>
              <p>The date, time, place, type of service, and any music requests. Even partial information helps Kit respond quickly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="local-seo section-pad" aria-labelledby="funeral-area-heading">
        <div className="container local-grid">
          <div>
            <h2 id="funeral-area-heading" style={{ fontFamily: 'Libre Caslon Display' }}>Get in touch about a service</h2>
            <div className="prose">
              <p>
                Families and funeral directors can book with Kit directly. If someone else is arranging the service for you, you’re welcome to put them in touch.
              </p>
            </div>
          </div>
          <div style={{ background: 'white', border: '1px solid #ddd6ca', padding: '24px' }}>
            <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '20px', margin: '0 0 12px' }}>Direct contact for funeral inquiries</h3>
            <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6, margin: '0 0 16px' }}>
              If the service is in the next few days, a call is usually fastest.
            </p>
            <a href="tel:+18642070085" className="button gold" style={{ width: '100%' }}><Phone size={16} aria-hidden="true" /> +1 (864) 207-0085</a>
            <Link to="/contact" className="button outline" style={{ width: '100%', marginTop: '12px' }}>Contact form <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
