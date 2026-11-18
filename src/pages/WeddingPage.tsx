import { Link } from 'react-router-dom';
import { ArrowRight, Check, Music2, Clock, MapPin, Users } from 'lucide-react';
import { SEO } from '../components/SEO';

const questions = [
  {
    question: 'How far ahead should we book?',
    answer: 'Get in touch once your venue is set. Weekend dates in Western North Carolina fill early, especially in spring and fall.',
  },
  {
    question: 'Can we request a particular song?',
    answer: 'The Highland pipes have a nine-note range. Share the title with Kit and he’ll let you know whether the melody can be adapted.',
  },
  {
    question: 'Will you work with our wedding planner?',
    answer: 'Yes. Kit can confirm timing and placement with your planner, venue manager and officiant before the day.',
  },
  {
    question: 'What should we provide at the venue?',
    answer: 'An arrival time, a point of contact and a little space to warm up out of earshot. Outdoors, Kit will also take the wind into account and look for a clear view of the person giving the cue.',
  },
];

export function WeddingPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Piper for Wedding",
      "name": "Asheville Wedding Piper - Highland Bagpipes for Weddings",
      "description": "Professional Highland piper for weddings in Asheville and Western North Carolina. Prelude, processional, recessional and reception bagpipes.",
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
      "url": "https://mountainpiperavl.com/weddings"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mountainpiperavl.com/" },
        { "@type": "ListItem", "position": 2, "name": "Wedding Piper Asheville", "item": "https://mountainpiperavl.com/weddings" }
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
        title="Asheville Wedding Piper | Piper for Weddings in Western North Carolina"
        description="Professional piper for weddings in Asheville and Western North Carolina. Highland bagpipes for ceremony prelude, processional, recessional and reception. Based in Asheville, NC."
        canonicalPath="/weddings"
        ogImage="https://mountainpiperavl.com/images/kit-rashid-mountains-1200.webp"
        structuredData={structuredData}
      />

      <section className="page-hero" aria-labelledby="wedding-heading">
        <div className="container">
          <h1 id="wedding-heading">Music for your <em>wedding</em></h1>
          <p className="lead">
            The pipes lend as much ceremony to two people on a mountain overlook as they do to a ballroom full of guests. Based in Asheville, Kit Rashid plays for couples throughout Western North Carolina.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button gold">Check your date <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link to="/about" className="button outline-light">About Kit</Link>
          </div>
        </div>
      </section>

      <section className="content-section section-pad" aria-labelledby="wedding-services-heading">
        <div className="container two-col">
          <div>
            <h2 id="wedding-services-heading">Where the pipes fit into your day</h2>
            <div className="prose">
              <p>
                Some couples picture the pipes leading them down the aisle. Others want that first burst of music to come just after the vows. Start with the moment that matters to you.
              </p>
              <p>
                Tell Kit where you’ll enter and roughly how far you’ll walk. He’ll agree on a starting cue with the officiant, so you don’t have to catch his eye from the other end of the aisle.
              </p>
            </div>
          </div>
          <div>
            <div style={{ background: 'white', border: '1px solid #ddd6ca', padding: '28px' }}>
              <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '26px', margin: '0 0 16px' }}>A sample playing schedule</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px' }}><Clock size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none', marginTop: '2px' }} /><span><strong>Guest arrival</strong><br /><small style={{ color: 'var(--muted)' }}>15–20 minutes of music as guests take their seats</small></span></li>
                <li style={{ display: 'flex', gap: '12px' }}><Users size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none', marginTop: '2px' }} /><span><strong>Processional</strong><br /><small style={{ color: 'var(--muted)' }}>Entrance music for you and your attendants</small></span></li>
                <li style={{ display: 'flex', gap: '12px' }}><Music2 size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none', marginTop: '2px' }} /><span><strong>Recessional & exit</strong><br /><small style={{ color: 'var(--muted)' }}>Celebratory send-off</small></span></li>
                <li style={{ display: 'flex', gap: '12px' }}><MapPin size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none', marginTop: '2px' }} /><span><strong>Cocktail hour & reception</strong><br /><small style={{ color: 'var(--muted)' }}>A featured tune or music as people mingle</small></span></li>
              </ul>
              <Link to="/contact" className="button green" style={{ width: '100%', marginTop: '24px' }}>Discuss your timing <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <div style={{ marginTop: '20px', padding: '20px', background: '#ebe5d9', borderLeft: '3px solid var(--gold)' }}>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: '#4a5a53' }}>
                <strong>Planning an outdoor ceremony?</strong> Tell Kit about the approach to your venue and how far your guests will be from the music.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt section-pad" aria-labelledby="repertoire-heading">
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <h2 id="repertoire-heading" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, fontFamily: 'Libre Caslon Display' }}>Choosing a tune for the aisle</h2>
            <div className="prose" style={{ marginTop: '20px' }}>
              <p>
                You don’t have to know the tune names. Tell Kit how you’d like the entrance to feel, or share a family favorite and he’ll let you know whether it suits the Highland pipes.
              </p>
            </div>
          </div>
          <div className="service-grid" style={{ marginTop: '40px' }}>
            <article className="service-card" style={{ minHeight: 'auto' }}>
              <h3 style={{ marginTop: 0 }}>Processional favorites</h3>
              <ul>
                <li><Check size={15} aria-hidden="true" /> Highland Cathedral</li>
                <li><Check size={15} aria-hidden="true" /> Canon in D (Highland adaptation)</li>
                <li><Check size={15} aria-hidden="true" /> Mairi's Wedding</li>
                <li><Check size={15} aria-hidden="true" /> Scotland the Brave (processional)</li>
              </ul>
            </article>
            <article className="service-card" style={{ minHeight: 'auto' }}>
              <h3 style={{ marginTop: 0 }}>Recessional & joyful</h3>
              <ul>
                <li><Check size={15} aria-hidden="true" /> Scotland the Brave</li>
                <li><Check size={15} aria-hidden="true" /> Mairi's Wedding (recessional)</li>
                <li><Check size={15} aria-hidden="true" /> Highland Laddie</li>
                <li><Check size={15} aria-hidden="true" /> Celebratory 6/8 marches</li>
              </ul>
            </article>
            <article className="service-card" style={{ minHeight: 'auto' }}>
              <h3 style={{ marginTop: 0 }}>Prelude & atmosphere</h3>
              <ul>
                <li><Check size={15} aria-hidden="true" /> Flower of Scotland</li>
                <li><Check size={15} aria-hidden="true" /> Slow airs and laments</li>
                <li><Check size={15} aria-hidden="true" /> Traditional Scottish melodies</li>
                <li><Check size={15} aria-hidden="true" /> Family requests (where possible)</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad" aria-labelledby="wedding-faq-heading">
        <div className="container faq-grid">
          <div>
            <h2 id="wedding-faq-heading" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05, fontFamily: 'Libre Caslon Display' }}>Questions couples ask</h2>
            <Link to="/contact" className="button outline" style={{ marginTop: '20px' }}>Ask about your date <ArrowRight size={16} aria-hidden="true" /></Link>
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

      <section className="contact section-pad" aria-labelledby="wedding-contact-heading">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 id="wedding-contact-heading" style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: .98, fontFamily: 'Libre Caslon Display' }}>Have a date in mind?</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginTop: '20px', lineHeight: 1.7 }}>
            Share your date, your venue, and the moments you’d like music for. You'll receive a personal response with availability and a tailored quote.
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button gold">Request a quote <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link to="/funerals-memorials" className="button outline-light">Funeral & memorial bagpipes</Link>
          </div>
        </div>
      </section>
    </>
  );
}
