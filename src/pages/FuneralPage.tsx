import { Link } from 'react-router-dom';
import { ArrowRight, Check, Church, Heart, Music2, Clock, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';

const questions = [
  {
    question: 'How much notice does Kit need?',
    answer: 'Kit makes every effort to help on short notice. Call +1 (864) 207-0085 for the quickest answer, even if the arrangements aren’t final.',
  },
  {
    question: 'Who speaks with the funeral home or church?',
    answer: 'Kit can speak directly with the director or clergy about placement and timing. If a family member would prefer to give the cue, let him know.',
  },
  {
    question: 'Can the pipes be played indoors?',
    answer: 'Yes, though Highland pipes have a strong sound. Playing from a doorway or a foyer gives the music some distance in a small chapel. Kit can advise once he knows the room.',
  },
  {
    question: 'What should we include in an inquiry?',
    answer: 'Share the date, time and location, along with any music requests. If you don’t have all those details yet, start with what you know.',
  },
];

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
      "mainEntity": questions.map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": { "@type": "Answer", "text": answer }
      }))
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
            A familiar air can give people time to remember someone in their own way. Kit Rashid works with families in Asheville and across Western North Carolina to choose music that honors the person they’ve lost.
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
                At a graveside, a single lament can follow the final words. For a celebration of life, you might prefer to welcome people with a tune they associate with your loved one.
              </p>
              <p>
                Kit arrives early, tunes out of earshot, and takes his cue from the funeral director or clergy so the family needn’t watch the clock.
              </p>
            </div>
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
          </div>
        </div>
      </section>

      <section className="content-section alt section-pad" aria-labelledby="memorial-repertoire-heading">
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <h2 id="memorial-repertoire-heading" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, fontFamily: 'Libre Caslon Display' }}>Choosing a tune to remember someone by</h2>
            <div className="prose" style={{ marginTop: '20px' }}>
              <p>
                Many families choose Amazing Grace. If a different melody comes to mind, let Kit know. He can tell you how it would sound on the pipes or suggest a traditional air with a similar feel.
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
            <h2 id="funeral-faq-heading" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05, fontFamily: 'Libre Caslon Display' }}>Questions families ask</h2>
            <Link to="/contact" className="button outline" style={{ marginTop: '20px' }}>Ask about a service <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="faq-list">
            {questions.map(({ question, answer }) => (
              <div className="faq-item" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="local-seo section-pad" aria-labelledby="funeral-area-heading">
        <div className="container local-grid">
          <div>
            <h2 id="funeral-area-heading" style={{ fontFamily: 'Libre Caslon Display' }}>Get in touch about a service</h2>
            <div className="prose">
              <p>
                Kit travels from Asheville to churches, chapels and burial grounds throughout Buncombe County and the surrounding mountains. If arrangements are still taking shape, share the date and location as you know them.
              </p>
            </div>
          </div>
          <div style={{ background: 'white', border: '1px solid #ddd6ca', padding: '24px' }}>
            <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '20px', margin: '0 0 12px' }}>Speak with Kit</h3>
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
