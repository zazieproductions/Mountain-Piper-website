import { Link } from 'react-router-dom';
import { ArrowRight, Check, Church, Heart, Music2, Clock, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';

export function FuneralPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Bagpiper for Funeral and Memorial",
      "name": "Funeral Bagpiper Asheville | Memorial Bagpiper Western North Carolina",
      "description": "Professional funeral and memorial bagpiper in Asheville and Western North Carolina. Dignified Highland bagpipes for funerals, memorials, graveside services and celebrations of life.",
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
      "url": "https://mountainpiperavl.com/funerals-memorials"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mountainpiperavl.com/" },
        { "@type": "ListItem", "position": 2, "name": "Funeral and Memorial Bagpiper Asheville", "item": "https://mountainpiperavl.com/funerals-memorials" }
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
        title="Funeral Bagpiper Asheville | Memorial Bagpiper Western North Carolina"
        description="Professional funeral and memorial bagpiper in Asheville and Western North Carolina. Dignified Highland bagpipes for funerals, graveside services, memorials and celebrations of life. Based in Asheville, NC."
        canonicalPath="/funerals-memorials"
        ogImage="https://mountainpiperavl.com/images/kit-rashid-performing-800.webp"
        structuredData={structuredData}
      />

      <section className="page-hero" aria-labelledby="funeral-heading">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Funeral & Memorial Bagpiper</li>
            </ol>
          </nav>
          <p className="eyebrow"><Church size={14} aria-hidden="true" /> Bagpiper for funerals in Western North Carolina</p>
          <h1 id="funeral-heading">Funeral bagpiper in Asheville for <em>a dignified farewell.</em></h1>
          <p className="lead">
            When words fall short, the Highland bagpipe speaks with solemnity and honor. Kit Rashid provides funeral and memorial bagpipes in Asheville and throughout Western North Carolina — delivered with sensitivity, calm coordination, and genuine respect for the family and the moment.
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
            <p className="eyebrow dark">Funeral & memorial services</p>
            <h2 id="funeral-services-heading">Respectful bagpipes for funerals and memorials in Asheville and WNC.</h2>
            <div className="prose">
              <p>
                As a funeral bagpiper based in Asheville, Kit understands the weight of these occasions. Whether you are planning a graveside service, church funeral, memorial service, or celebration of life in Asheville or elsewhere in Western North Carolina, the Highland bagpipe offers a tribute that is both deeply personal and universally understood.
              </p>
              <p>
                Performances are handled with discretion and care — arriving early, warming up away from guests, and coordinating closely with funeral directors, clergy, and family contacts to ensure timing feels natural, not performative.
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
              <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '26px', margin: '0 0 16px' }}>How funeral bagpipes typically unfold</h3>
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
                <strong>Serving Asheville and Western North Carolina:</strong> Kit provides funeral and memorial bagpipes for services in Asheville, Buncombe County, and surrounding WNC communities. Share the funeral home, church, or cemetery location when you inquire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt section-pad" aria-labelledby="memorial-repertoire-heading">
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <p className="eyebrow dark">Memorial repertoire</p>
            <h2 id="memorial-repertoire-heading" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, fontFamily: 'Libre Caslon Display' }}>Funeral and memorial bagpipe music chosen with care.</h2>
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
            <p className="eyebrow dark">Funeral bagpiper FAQ</p>
            <h2 id="funeral-faq-heading" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05, fontFamily: 'Libre Caslon Display' }}>Questions about hiring a funeral bagpiper in Asheville.</h2>
            <p style={{ color: 'var(--muted)', marginTop: '16px', lineHeight: 1.7 }}>
              These are common questions families and funeral directors ask when arranging bagpipes for funerals and memorials in Asheville and Western North Carolina.
            </p>
            <Link to="/contact" className="button outline" style={{ marginTop: '20px' }}>Ask about a service <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How much notice do you need for a funeral or memorial service?</h3>
              <p>Funeral timelines are often short. Kit makes every effort to accommodate services in Asheville and Western North Carolina with limited notice. Contact directly by phone at 828.974.1719 for the quickest response.</p>
            </div>
            <div className="faq-item">
              <h3>Do you coordinate with the funeral home or church?</h3>
              <p>Yes. Kit coordinates timing, placement, and cues with funeral directors, clergy, and family contacts in Asheville and across WNC to ensure a seamless, respectful tribute.</p>
            </div>
            <div className="faq-item">
              <h3>Can bagpipes be played indoors for a funeral service?</h3>
              <p>Highland bagpipes are loud and are often best suited for outdoor graveside services, church entrances, or large chapels. For indoor services, placement in a foyer, narthex, or at a distance can work well. Kit can advise based on your venue.</p>
            </div>
            <div className="faq-item">
              <h3>What should we share when inquiring about funeral bagpipes?</h3>
              <p>Date, time, location (funeral home, church, cemetery) in Asheville or Western North Carolina, type of service, and any music requests. Even partial information helps Kit respond quickly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="local-seo section-pad" aria-labelledby="funeral-area-heading">
        <div className="container local-grid">
          <div>
            <h2 id="funeral-area-heading" style={{ fontFamily: 'Libre Caslon Display' }}>Bagpiper for funerals in Western North Carolina.</h2>
            <div className="prose">
              <p>
                Based in Asheville, Kit provides funeral and memorial bagpipes throughout Western North Carolina. Families searching for a funeral bagpiper Asheville, memorial bagpiper Asheville, or bagpiper for funerals in Western North Carolina can inquire with service location and date for a prompt, personal response.
              </p>
              <p>
                Whether the service is at a funeral home in Asheville, a church in Buncombe County, or a graveside service in the surrounding mountains, the goal remains the same: a dignified, musical tribute that honors a life lived.
              </p>
            </div>
          </div>
          <div style={{ background: 'white', border: '1px solid #ddd6ca', padding: '24px' }}>
            <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '20px', margin: '0 0 12px' }}>Direct contact for funeral inquiries</h3>
            <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6, margin: '0 0 16px' }}>
              For time-sensitive funeral and memorial services in Asheville and WNC, phone is often fastest.
            </p>
            <a href="tel:+18289741719" className="button gold" style={{ width: '100%' }}><MapPin size={16} aria-hidden="true" /> 828.974.1719 - Asheville</a>
            <Link to="/contact" className="button outline" style={{ width: '100%', marginTop: '12px' }}>Contact form <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
