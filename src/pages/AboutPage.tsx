import { Link } from 'react-router-dom';
import { ArrowRight, Check, Award, Music2, GraduationCap } from 'lucide-react';
import { SEO } from '../components/SEO';
import { publicAsset, publicSrcSet } from '../publicAsset';

export function AboutPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Kit Rashid",
      "jobTitle": "Professional Highland Bagpiper",
      "description": "Professional Highland bagpiper based in Asheville, North Carolina with 43 years experience as performer, teacher and competitor. Instructor for Grandfather Mountain Highlanders.",
      "address": { "@type": "PostalAddress", "addressLocality": "Asheville", "addressRegion": "NC", "addressCountry": "US" },
      "telephone": "+1-828-974-1719",
      "email": "mountainpiper1@gmail.com",
      "url": "https://mountainpiperavl.com/about",
      "knowsAbout": ["Highland bagpipes", "Scottish bagpipes", "Bagpipe lessons", "EUSPBA"],
      "memberOf": { "@type": "Organization", "name": "Eastern United States Pipe Band Association" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mountainpiperavl.com/" },
        { "@type": "ListItem", "position": 2, "name": "About - Scottish Bagpiper Western North Carolina", "item": "https://mountainpiperavl.com/about" }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="About Kit Rashid | Scottish Bagpiper & Highland Bagpiper Asheville"
        description="Meet Kit Rashid, professional Highland bagpiper based in Asheville, NC. 43 years experience, professional-grade EUSPBA competitor, instructor for Grandfather Mountain Highlanders. Scottish bagpiper serving Western North Carolina."
        canonicalPath="/about"
        ogImage="https://mountainpiperavl.com/images/kit-rashid-performing-800.webp"
        structuredData={structuredData}
      />

      <section className="page-hero" aria-labelledby="about-heading">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">About - Scottish Bagpiper WNC</li>
            </ol>
          </nav>
          <p className="eyebrow"><Music2 size={14} aria-hidden="true" /> Scottish bagpiper · Highland bagpiper · Asheville, NC</p>
          <h1 id="about-heading">Kit Rashid <em>professional Highland bagpiper in Asheville.</em></h1>
          <p className="lead">
            Originally from Rome, New York, and proud to call Asheville home, Kit brings 43 years of experience as a performer, teacher, and competitor on the Highland bagpipe. A Scottish bagpiper in Western North Carolina with a vocation for sharing this music at meaningful moments.
          </p>
        </div>
      </section>

      <section className="about-intro section-pad" aria-labelledby="about-story-heading">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-image-frame">
              <picture>
                <source srcSet={publicSrcSet([['images/kit-rashid-performing-400.webp', '400w'], ['images/kit-rashid-performing-800.webp', '800w']])} sizes="(max-width: 820px) 100vw, 400px" type="image/webp" />
                <img
                  src={publicAsset('images/kit-rashid-performing-800.jpg')}
                  alt="Kit Rashid performing Highland bagpipes, Scottish bagpiper in Western North Carolina"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="about-inset">
              <picture>
                <source srcSet={publicSrcSet([['images/kit-rashid-stone-steps-400.webp', '400w'], ['images/kit-rashid-stone-steps-800.webp', '800w']])} sizes="200px" type="image/webp" />
                <img
                  src={publicAsset('images/kit-rashid-stone-steps-800.jpg')}
                  alt="Kit Rashid in Highland dress on stone steps, Asheville bagpiper"
                  width={400}
                  height={533}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="about-seal" aria-hidden="true">
              <svg viewBox="0 0 200 200">
                <defs>
                  <path id="seal-circle-about" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
                </defs>
                <text>
                  <textPath href="#seal-circle-about">Performer · Teacher · Competitor ·</textPath>
                </text>
              </svg>
              <span><strong>43</strong><small>years</small></span>
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow dark">The piper</p>
            <h2 id="about-story-heading" style={{ fontSize: 'clamp(48px, 5vw, 72px)' }}>Four decades of craft and devotion.</h2>
            <div className="about-route" aria-label="From Rome, New York to Asheville, North Carolina">
              <span>Rome, New York</span>
              <i aria-hidden="true" />
              <span>Asheville, North Carolina</span>
            </div>
            <p className="about-lead">
              Put simply, piping is his vocation — a firm commitment to sharing the music he loves in a way that is completely inclusive and always professional.
            </p>
            <p>
              Kit competes as a soloist in the <strong>professional grade of the Eastern United States Pipe Band Association (EUSPBA)</strong>, maintaining the competitive standard that shows up at every booking, whether it's a wedding in Asheville, a memorial in Buncombe County, or a ceremony elsewhere in Western North Carolina.
            </p>
            <p>
              He serves as an instructor for the <strong>Grandfather Mountain Highlanders</strong>, the host band of the Grandfather Mountain Highland Games — one of the most storied Highland gatherings in the United States, held in the mountains of Western North Carolina.
            </p>
            <p>
              For more than 40 years he has provided top-quality Highland bagpipe music for weddings, funerals, commencements, festivals, and just about every kind of occasion in between. Every performance is polished, personal, and delivered with respect for the moment.
            </p>
            <div className="about-lineage">
              <p className="lineage-intro">Kit has had the good fortune to study with some of piping's greats, including:</p>
              <ul>
                <li>
                  <span className="lineage-rank">PM</span>
                  <span className="lineage-name"><strong>Jimmy McIntosh</strong> <small>MBE</small></span>
                  <span className="lineage-honour">MBE</span>
                </li>
                <li>
                  <span className="lineage-rank">PM</span>
                  <span className="lineage-name"><strong>Jimmy MacGregor</strong></span>
                </li>
                <li>
                  <span className="lineage-rank">PM</span>
                  <span className="lineage-name"><strong>Ian McLellan</strong> <small>World-renowned Strathclyde Police Pipe Band</small></span>
                  <span className="lineage-honour">BEM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-pillars section-pad" aria-labelledby="pillars-heading">
        <div className="container">
          <div className="pillars-heading">
            <p className="eyebrow dark">Three disciplines, one standard</p>
            <h3 id="pillars-heading">Performer. Competitor. Teacher. Asheville bagpiper.</h3>
          </div>
          <div className="pillar-grid">
            <article className="pillar">
              <div className="pillar-top">
                <span className="pillar-icon" aria-hidden="true"><Music2 size={22} /></span>
                <span className="pillar-number">01</span>
              </div>
              <h4>Performer</h4>
              <p>More than four decades of music for life's biggest days in Asheville and Western North Carolina, from a quiet graveside lament to a festival crowd, with timing, tone, and attire handled flawlessly.</p>
              <small>Weddings · Memorials · Ceremonies · Events</small>
            </article>
            <article className="pillar">
              <div className="pillar-top">
                <span className="pillar-icon" aria-hidden="true"><Award size={22} /></span>
                <span className="pillar-number">02</span>
              </div>
              <h4>Competitor</h4>
              <p>Kit competes as a soloist in the professional grade of the Eastern United States Pipe Band Association. That competitive standard shows up at every booking in Asheville and WNC.</p>
              <small>EUSPBA · Professional grade</small>
            </article>
            <article className="pillar">
              <div className="pillar-top">
                <span className="pillar-icon" aria-hidden="true"><GraduationCap size={22} /></span>
                <span className="pillar-number">03</span>
              </div>
              <h4>Teacher</h4>
              <p>An instructor for the Grandfather Mountain Highlanders and a patient private teacher for bagpipe lessons in Asheville, equally at home with a single beginner or a full group of pipers.</p>
              <small>Private · Group · Band instruction · Asheville</small>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section alt section-pad" aria-labelledby="highland-heading">
        <div className="container two-col">
          <div>
            <p className="eyebrow dark">Highland tradition</p>
            <h2 id="highland-heading" style={{ fontFamily: 'Libre Caslon Display', fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05 }}>Scottish bagpiper and Highland bagpiper in Western North Carolina.</h2>
            <div className="prose" style={{ marginTop: '16px' }}>
              <p>
                The Highland bagpipe is often called the Scottish bagpipe — its sound is inseparable from Scottish heritage, but its power translates across cultures and occasions. In Asheville and Western North Carolina, where mountain traditions and Scottish heritage run deep, the bagpipe feels particularly at home.
              </p>
              <p>
                Whether you search for Scottish bagpiper Western North Carolina, Highland bagpiper Asheville, or simply Asheville bagpipes, the goal is the same: a live, acoustic instrument played with technical command and musical sensitivity for a moment that matters.
              </p>
              <p>
                Kit's background as both a performer and teacher means he can speak to the instrument's history, repertoire, and etiquette while keeping focus on your event — not on performance for its own sake.
              </p>
            </div>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> Professional-grade Highland bagpipes, full Highland dress</li>
              <li><Check aria-hidden="true" /> Repertoire guidance — traditional airs, hymns, marches, and personal requests</li>
              <li><Check aria-hidden="true" /> Experience with Asheville venues, churches, mountain overlooks, and seasonal weather</li>
              <li><Check aria-hidden="true" /> Direct booking — you work with Kit, not an agency</li>
            </ul>
          </div>
          <div>
            <div style={{ background: 'white', border: '1px solid #ddd6ca', padding: '28px' }}>
              <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '22px', margin: '0 0 16px' }}>At a glance — Mountain Piper</h3>
              <dl style={{ margin: 0, display: 'grid', gap: '14px' }}>
                <div><dt style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8d652c' }}>Based in</dt><dd style={{ margin: '4px 0 0', fontSize: '14px' }}>Asheville, North Carolina — serving Western North Carolina</dd></div>
                <div><dt style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8d652c' }}>Experience</dt><dd style={{ margin: '4px 0 0', fontSize: '14px' }}>43 years as performer, teacher, competitor</dd></div>
                <div><dt style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8d652c' }}>Competition</dt><dd style={{ margin: '4px 0 0', fontSize: '14px' }}>Professional grade, Eastern United States Pipe Band Association</dd></div>
                <div><dt style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8d652c' }}>Teaching</dt><dd style={{ margin: '4px 0 0', fontSize: '14px' }}>Instructor, Grandfather Mountain Highlanders; private & group lessons</dd></div>
                <div><dt style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8d652c' }}>Services</dt><dd style={{ margin: '4px 0 0', fontSize: '14px' }}>Weddings, funerals, memorials, ceremonies, events, bagpipe lessons</dd></div>
              </dl>
              <Link to="/contact" className="button green" style={{ width: '100%', marginTop: '20px' }}>Check availability <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-pad" aria-labelledby="about-contact-heading">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <p className="eyebrow">Book an Asheville bagpiper</p>
          <h2 id="about-contact-heading" style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: .98, fontFamily: 'Libre Caslon Display' }}>Work with a professional Highland bagpiper based in Asheville.</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginTop: '20px', lineHeight: 1.7 }}>
            Whether you need a wedding bagpiper in Asheville, a funeral bagpiper in Western North Carolina, or bagpipe lessons in Asheville, reach out with your date and location.
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button gold">Contact Kit <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link to="/weddings" className="button outline-light">Wedding bagpipes</Link>
          </div>
        </div>
      </section>
    </>
  );
}
