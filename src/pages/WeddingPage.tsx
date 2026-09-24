import { Link } from 'react-router-dom';
import { ArrowRight, Check, Heart, Music2, Clock, MapPin, Users } from 'lucide-react';
import { SEO } from '../components/SEO';

export function WeddingPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Bagpiper for Wedding",
      "name": "Asheville Wedding Bagpiper - Highland Bagpipes for Weddings",
      "description": "Professional Highland bagpiper for weddings in Asheville and Western North Carolina. Prelude, processional, recessional and reception bagpipes.",
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
      "url": "https://mountainpiperavl.com/weddings"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mountainpiperavl.com/" },
        { "@type": "ListItem", "position": 2, "name": "Wedding Bagpiper Asheville", "item": "https://mountainpiperavl.com/weddings" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a wedding bagpiper play for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most wedding bookings in Asheville include prelude as guests arrive (15-20 minutes), processional, and recessional. Additional time for cocktail hour or reception can be arranged. Timing is tailored to your schedule."
          }
        },
        {
          "@type": "Question",
          "name": "What wedding songs can you play on the bagpipes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Popular choices include Highland Cathedral, Scotland the Brave, Canon in D (adapted), Mairi's Wedding, and traditional processionals. Kit can help select music that fits your ceremony setting in Western North Carolina."
          }
        },
        {
          "@type": "Question",
          "name": "Do you play for both indoor and outdoor weddings in Western North Carolina?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Highland bagpipes work beautifully in both indoor and outdoor venues, from mountain overlooks to downtown Asheville churches. Outdoor ceremonies particularly suit the instrument's natural resonance."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Asheville Wedding Bagpiper | Bagpiper for Weddings in Western North Carolina"
        description="Professional bagpiper for weddings in Asheville and Western North Carolina. Highland bagpipes for ceremony prelude, processional, recessional and reception. Based in Asheville, NC."
        canonicalPath="/weddings"
        ogImage="https://mountainpiperavl.com/images/kit-rashid-mountains-1200.webp"
        structuredData={structuredData}
      />

      <section className="page-hero" aria-labelledby="wedding-heading">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Wedding Bagpiper Asheville</li>
            </ol>
          </nav>
          <p className="eyebrow"><Heart size={14} aria-hidden="true" /> Bagpiper for weddings in Western North Carolina</p>
          <h1 id="wedding-heading">Asheville wedding bagpiper for <em>a ceremony no one will forget.</em></h1>
          <p className="lead">
            The Highland bagpipe brings pageantry, emotion, and a sense of occasion that photographs can't capture. Based in Asheville, Kit Rashid provides professional wedding bagpipes across Western North Carolina — from intimate mountain elopements to grand ballroom processionals.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button gold">Check wedding date <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link to="/about" className="button outline-light">About Kit</Link>
          </div>
        </div>
      </section>

      <section className="content-section section-pad" aria-labelledby="wedding-services-heading">
        <div className="container two-col">
          <div>
            <p className="eyebrow dark">Wedding services</p>
            <h2 id="wedding-services-heading">How bagpipes fit your Asheville wedding day.</h2>
            <div className="prose">
              <p>
                As an Asheville bagpiper, Kit tailors each wedding performance to your venue, timeline, and the feeling you want your guests to carry. Whether you're planning a wedding in downtown Asheville, a mountaintop ceremony near Black Mountain, or a celebration in the broader Western North Carolina region, the bagpipes can anchor key moments.
              </p>
              <p>
                Most couples book for ceremony prelude, processional, and recessional. The sound of Highland bagpipes carrying across a mountain venue or greeting guests as they arrive creates an immediate sense of arrival and celebration.
              </p>
            </div>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> <strong>Prelude as guests arrive</strong> — 15-20 minutes of welcoming music as guests are seated</li>
              <li><Check aria-hidden="true" /> <strong>Processional</strong> — a powerful, dignified entrance for wedding party or couple</li>
              <li><Check aria-hidden="true" /> <strong>Recessional</strong> — joyful, uplifting exit music</li>
              <li><Check aria-hidden="true" /> <strong>Cocktail hour & reception</strong> — background atmosphere or featured tunes</li>
            </ul>
          </div>
          <div>
            <div style={{ background: 'white', border: '1px solid #ddd6ca', padding: '28px' }}>
              <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '26px', margin: '0 0 16px' }}>Popular wedding bagpipe moments in Asheville</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px' }}><Clock size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none', marginTop: '2px' }} /><span><strong>Guest arrival</strong><br /><small style={{ color: 'var(--muted)' }}>Sets tone before ceremony begins</small></span></li>
                <li style={{ display: 'flex', gap: '12px' }}><Users size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none', marginTop: '2px' }} /><span><strong>Bridal or couple processional</strong><br /><small style={{ color: 'var(--muted)' }}>Unmistakable entrance music</small></span></li>
                <li style={{ display: 'flex', gap: '12px' }}><Music2 size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none', marginTop: '2px' }} /><span><strong>Recessional & exit</strong><br /><small style={{ color: 'var(--muted)' }}>Celebratory send-off</small></span></li>
                <li style={{ display: 'flex', gap: '12px' }}><MapPin size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none', marginTop: '2px' }} /><span><strong>Mountain overlook or lawn</strong><br /><small style={{ color: 'var(--muted)' }}>Natural acoustics for outdoor WNC weddings</small></span></li>
              </ul>
              <Link to="/contact" className="button green" style={{ width: '100%', marginTop: '24px' }}>Inquire about your wedding <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <div style={{ marginTop: '20px', padding: '20px', background: '#ebe5d9', borderLeft: '3px solid var(--gold)' }}>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: '#4a5a53' }}>
                <strong>Based in Asheville, serving Western North Carolina:</strong> Whether your venue is in Asheville, Black Mountain, Weaverville, Hendersonville, or the greater WNC mountains, share your location when you inquire for a tailored response.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt section-pad" aria-labelledby="repertoire-heading">
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <p className="eyebrow dark">Repertoire</p>
            <h2 id="repertoire-heading" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, fontFamily: 'Libre Caslon Display' }}>Wedding bagpipe music for Western North Carolina ceremonies.</h2>
            <div className="prose" style={{ marginTop: '20px' }}>
              <p>
                Highland bagpipe repertoire for weddings blends traditional Scottish airs, hymn adaptations, and celebratory marches. Kit will help you choose music that fits your ceremony — from classic processionals to tunes with personal family significance.
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
            <p className="eyebrow dark">Wedding bagpiper FAQ</p>
            <h2 id="wedding-faq-heading" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05, fontFamily: 'Libre Caslon Display' }}>Common questions about hiring a bagpiper for weddings in Asheville.</h2>
            <p style={{ color: 'var(--muted)', marginTop: '16px', lineHeight: 1.7 }}>
              Planning a wedding in Asheville or Western North Carolina? Here are answers to questions couples often ask about booking Highland bagpipes.
            </p>
            <Link to="/contact" className="button outline" style={{ marginTop: '20px' }}>Ask about your date <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How far in advance should we book a wedding bagpiper in Asheville?</h3>
              <p>Weekend dates, especially in fall and spring wedding season in Western North Carolina, book early. If you have a date in mind, inquire as soon as your venue is set. Kit responds personally with availability.</p>
            </div>
            <div className="faq-item">
              <h3>Can you learn a specific song for our wedding?</h3>
              <p>Many melodies can be adapted for Highland bagpipes, though the instrument has a nine-note range. Share any special requests when you inquire and Kit will let you know what is possible and appropriate for bagpipes.</p>
            </div>
            <div className="faq-item">
              <h3>Do you coordinate with our wedding planner or venue?</h3>
              <p>Yes. Kit coordinates directly with planners, venue managers, and officiants in Asheville and across Western North Carolina to confirm timing, placement, and acoustics for a smooth ceremony.</p>
            </div>
            <div className="faq-item">
              <h3>What should we provide for the bagpiper at our venue?</h3>
              <p>Usually just a designated arrival time, a point of contact on the day, and a bit of space to warm up out of earshot. Highland pipes are loud and best placed with sight lines and wind in mind for outdoor mountain venues.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-pad" aria-labelledby="wedding-contact-heading">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <p className="eyebrow">Book your Asheville wedding bagpiper</p>
          <h2 id="wedding-contact-heading" style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: .98, fontFamily: 'Libre Caslon Display' }}>Check availability for your wedding date in Western North Carolina.</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginTop: '20px', lineHeight: 1.7 }}>
            Share your date, venue location in Asheville or Western North Carolina, and the moments you'd like bagpipes for. You'll receive a personal response with availability and a tailored quote.
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button gold">Inquire about weddings <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link to="/funerals-memorials" className="button outline-light">Funeral & memorial bagpipes</Link>
          </div>
        </div>
      </section>
    </>
  );
}
