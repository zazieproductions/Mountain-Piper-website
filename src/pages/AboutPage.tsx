import { Link } from 'react-router-dom';
import { ArrowRight, Check, Award, Music2, GraduationCap } from 'lucide-react';
import { KitBiography } from '../components/KitBiography';
import { SEO } from '../components/SEO';
import { publicAsset, publicSrcSet } from '../publicAsset';

export function AboutPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Kit Rashid",
      "jobTitle": "Professional Highland Piper",
      "description": "Professional Highland piper based in Asheville, North Carolina with 43 years experience as performer, teacher and competitor. Instructor for Grandfather Mountain Highlanders.",
      "address": { "@type": "PostalAddress", "addressLocality": "Asheville", "addressRegion": "NC", "addressCountry": "US" },
      "telephone": "+18642070085",
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
        { "@type": "ListItem", "position": 2, "name": "About - Scottish Piper Western North Carolina", "item": "https://mountainpiperavl.com/about" }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="About Kit Rashid | Scottish Piper & Highland Piper Asheville"
        description="Meet Kit Rashid, professional Highland piper based in Asheville, NC. 43 years experience, professional-grade EUSPBA competitor, instructor for Grandfather Mountain Highlanders. Scottish piper serving Western North Carolina."
        canonicalPath="/about"
        ogImage="https://mountainpiperavl.com/images/kit-rashid-performing-800.webp"
        structuredData={structuredData}
      />

      <section className="page-hero" aria-labelledby="about-heading">
        <div className="container">
          <h1 id="about-heading">About <em>Kit Rashid</em></h1>
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
                  alt="Kit playing the pipes at the foot of a stone stairway"
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
                  alt="Kit in Highland dress, holding his pipes on the steps"
                  width={400}
                  height={533}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            {/* The biography gives the same roles and years in reading order. */}
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
            <h2 id="about-story-heading" className="sr-only">About Kit Rashid</h2>
            <KitBiography />
            <div className="about-lineage">
              <p className="lineage-intro">Kit studied with pipe majors including:</p>
              <ul>
                <li>
                  <span className="lineage-rank">PM</span>
                  <span className="lineage-name"><strong>Jimmy McIntosh</strong></span>
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
            <h3 id="pillars-heading">Performer. Competitor. Teacher.</h3>
          </div>
          <div className="pillar-grid">
            <article className="pillar">
              <div className="pillar-top" aria-hidden="true">
                <span className="pillar-icon"><Music2 size={22} /></span>
                <span className="pillar-number">01</span>
              </div>
              <h4>Performer</h4>
              <p>A graveside lament needs space and quiet; a procession needs a clear, steady beat. Kit chooses the music with the people who will hear it in mind.</p>
              <small>Solo Highland pipes</small>
            </article>
            <article className="pillar">
              <div className="pillar-top" aria-hidden="true">
                <span className="pillar-icon"><Award size={22} /></span>
                <span className="pillar-number">02</span>
              </div>
              <h4>Competitor</h4>
              <p>Kit competes as a soloist in the professional grade of the Eastern United States Pipe Band Association. The discipline of preparing a tune for judges carries over to playing it for guests.</p>
              <small>EUSPBA · Professional grade</small>
            </article>
            <article className="pillar">
              <div className="pillar-top" aria-hidden="true">
                <span className="pillar-icon"><GraduationCap size={22} /></span>
                <span className="pillar-number">03</span>
              </div>
              <h4>Teacher</h4>
              <p>Kit teaches the Grandfather Mountain Highlanders as well as private students. He works on finger technique with beginners and on tone and unison with groups.</p>
              <small>Private · Group · Band instruction</small>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section alt section-pad" aria-labelledby="highland-heading">
        <div className="container two-col">
          <div>
            <h2 id="highland-heading" style={{ fontFamily: 'Libre Caslon Display', fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05 }}>The Highland bagpipe</h2>
            <div className="prose" style={{ marginTop: '16px' }}>
              <p>
                The drones sound a steady note underneath the melody on the chanter. Outdoors, that combination carries far enough to welcome guests before they can see the ceremony.
              </p>
              <p>
                Kit's background as both a performer and teacher means he can speak to the instrument's history, repertoire, and etiquette while keeping focus on your event — not on performance for its own sake.
              </p>
            </div>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> Professional-grade Highland bagpipes, full Highland dress</li>
              <li><Check aria-hidden="true" /> Repertoire guidance — traditional airs, hymns, marches, and personal requests</li>
              <li><Check aria-hidden="true" /> Experience with churches, mountain overlooks, and seasonal weather</li>
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
              </dl>
              <Link to="/contact" className="button green" style={{ width: '100%', marginTop: '20px' }}>Check availability <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-pad" aria-labelledby="about-contact-heading">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 id="about-contact-heading" style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: .98, fontFamily: 'Libre Caslon Display' }}>Work with Kit</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginTop: '20px', lineHeight: 1.7 }}>
            Tell Kit about the occasion you’re planning or a tune you’d like to learn.
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
