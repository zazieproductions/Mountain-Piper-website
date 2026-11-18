import { Link } from 'react-router-dom';
import { ArrowRight, Check, GraduationCap, Music2, Award, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';
import { publicAsset, publicSrcSet } from '../publicAsset';

export function LessonsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Bagpipe Lessons",
      "name": "Bagpipe Lessons Asheville | Highland Bagpipe Lessons Western North Carolina",
      "description": "Highland bagpipe lessons in Asheville and Western North Carolina. Private and group instruction for beginners through competitive players with professional piper Kit Rashid.",
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
      "url": "https://mountainpiperavl.com/lessons"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mountainpiperavl.com/" },
        { "@type": "ListItem", "position": 2, "name": "Bagpipe Lessons Asheville", "item": "https://mountainpiperavl.com/lessons" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer bagpipe lessons for beginners in Asheville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Kit teaches beginners through competitive players. Lessons start with practice chanter fundamentals before moving to pipes, building solid technique from the beginning."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in Highland bagpipe lessons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lessons cover technique, fingerwork, expression, tuning, maintenance, and traditional repertoire. Instruction is tailored to your goals, whether you want to play for personal enjoyment, join a band, or compete."
          }
        },
        {
          "@type": "Question",
          "name": "Are lessons in person in Asheville or online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kit is based in Asheville and offers lessons locally. Contact to discuss current lesson format, scheduling, and whether in-person or remote options fit your needs in Western North Carolina."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Bagpipe Lessons Asheville | Highland Bagpipe Lessons Western North Carolina"
        description="Highland bagpipe lessons in Asheville and Western North Carolina. Private and group instruction for beginners through competitive players with professional piper Kit Rashid, instructor for Grandfather Mountain Highlanders."
        canonicalPath="/lessons"
        ogImage="https://mountainpiperavl.com/images/kit-rashid-artist-studios-800.webp"
        structuredData={structuredData}
      />

      <section className="page-hero" aria-labelledby="lessons-heading">
        <div className="container">
          <h1 id="lessons-heading">Bagpipe <em>lessons</em></h1>
          <p className="lead">
            Kit Rashid teaches individuals and groups in Asheville, from first-time players to solo competitors. You don’t need a set of pipes to get started.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button gold">Ask about lessons <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link to="/about" className="button outline-light">Meet Kit Rashid</Link>
          </div>
        </div>
      </section>

      <section className="content-section section-pad" aria-labelledby="lessons-approach-heading">
        <div className="container two-col">
          <div>
            <h2 id="lessons-approach-heading" style={{ fontFamily: 'Libre Caslon Display', fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05 }}>From practice chanter to pipes</h2>
            <div className="prose" style={{ marginTop: '16px' }}>
              <p>
                On a practice chanter, you can hear each note clearly and concentrate on your fingers. As tunes become familiar, you can give more attention to rhythm and expression before moving to the full instrument.
              </p>
              <p>
                As an instructor for the Grandfather Mountain Highlanders, the host band of the Grandfather Mountain Highland Games, and a solo competitor in the professional grade of the Eastern United States Pipe Band Association, Kit brings competitive standards to every lesson while keeping instruction inclusive and encouraging.
              </p>
            </div>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> Individual, group, or band instruction</li>
              <li><Check aria-hidden="true" /> Beginners through competitive players</li>
              <li><Check aria-hidden="true" /> Technique, expression, repertoire, tuning and maintenance</li>
              <li><Check aria-hidden="true" /> 43 years of piping experience as performer, teacher, competitor</li>
            </ul>
          </div>
          <div>
            <div style={{ position: 'relative', padding: '18px 18px 0 0' }}>
              <div style={{ position: 'absolute', inset: '0 0 36px 36px', background: 'var(--wine)' }} aria-hidden="true" />
              <picture>
                <source srcSet={publicSrcSet([['images/kit-rashid-artist-studios-400.webp', '400w'], ['images/kit-rashid-artist-studios-800.webp', '800w']])} sizes="(max-width: 820px) 100vw, 500px" type="image/webp" />
                <img
                  src={publicAsset('images/kit-rashid-artist-studios-800.jpg')}
                  alt="Kit holding his pipes by a doorway marked “Artist Studios”"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '4/3', objectFit: 'cover', boxShadow: '0 24px 60px rgba(22,44,35,.16)', background: '#c9c0af' }}
                />
              </picture>
              <div style={{ position: 'absolute', right: 0, bottom: 0, width: '280px', padding: '20px 22px', background: 'var(--forest)', color: 'rgba(255,255,255,.72)', fontFamily: 'Libre Caslon Display', fontSize: '16px', lineHeight: 1.45 }}>
                From your first tune to playing in a band.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt section-pad" aria-labelledby="lessons-offerings-heading">
        <div className="container">
          <div style={{ maxWidth: '720px', marginBottom: '40px' }}>
            <h2 id="lessons-offerings-heading" style={{ fontFamily: 'Libre Caslon Display', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05 }}>Find a lesson that fits</h2>
            <p style={{ color: 'var(--muted)', marginTop: '12px', lineHeight: 1.7 }}>
              Whether you are picking up the practice chanter for the first time, returning after years away, or preparing for competition, lessons are shaped around your goals.
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card" style={{ minHeight: 'auto' }}>
              <div className="service-top" aria-hidden="true">
                <span className="service-icon"><Music2 size={20} /></span>
                <span className="service-number">01</span>
              </div>
              <h3>Beginner lessons</h3>
              <p>Start on the practice chanter with a simple melody. Work on reading the notes, placing your fingers, and adding the first embellishments.</p>
              <ul>
                <li><Check size={15} aria-hidden="true" /> Practice chanter fundamentals</li>
                <li><Check size={15} aria-hidden="true" /> Reading and rhythm</li>
                <li><Check size={15} aria-hidden="true" /> First tunes and technique</li>
              </ul>
            </article>
            <article className="service-card" style={{ minHeight: 'auto' }}>
              <div className="service-top" aria-hidden="true">
                <span className="service-icon"><Award size={20} /></span>
                <span className="service-number">02</span>
              </div>
              <h3>Intermediate & advanced</h3>
              <p>Refine tone, tuning, expression, and repertoire. Bring a piece for a band audition, an upcoming performance, or a solo competition.</p>
              <ul>
                <li><Check size={15} aria-hidden="true" /> Tuning and tone</li>
                <li><Check size={15} aria-hidden="true" /> Competition preparation</li>
                <li><Check size={15} aria-hidden="true" /> Band and solo repertoire</li>
              </ul>
            </article>
            <article className="service-card" style={{ minHeight: 'auto' }}>
              <div className="service-top" aria-hidden="true">
                <span className="service-icon"><GraduationCap size={20} /></span>
                <span className="service-number">03</span>
              </div>
              <h3>Group & band instruction</h3>
              <p>Group lessons and band instruction, including work with the Grandfather Mountain Highlanders. Learn to play together with good unison, tuning, and musicality.</p>
              <ul>
                <li><Check size={15} aria-hidden="true" /> Group technique</li>
                <li><Check size={15} aria-hidden="true" /> Ensemble playing</li>
                <li><Check size={15} aria-hidden="true" /> Host band of Grandfather Mountain</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad" aria-labelledby="lessons-faq-heading">
        <div className="container faq-grid">
          <div>
            <h2 id="lessons-faq-heading" style={{ fontFamily: 'Libre Caslon Display', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05 }}>Before your first lesson</h2>
            <p style={{ color: 'var(--muted)', marginTop: '16px', lineHeight: 1.7 }}>
              If you’re unsure about an instrument or where to start, ask before you buy anything.
            </p>
            <Link to="/contact" className="button outline" style={{ marginTop: '20px' }}>Ask about lessons <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How old do you need to be to start bagpipe lessons?</h3>
              <p>Students of many ages learn bagpipes. The practice chanter is a good starting point and requires less air than full pipes. Contact Kit to discuss whether lessons are a good fit for you or your child.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need to own bagpipes before starting?</h3>
              <p>No. Most beginners start on a practice chanter, which is affordable and lets you build finger technique before investing in pipes. Kit can advise on what to buy when you're ready.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to learn Highland bagpipes?</h3>
              <p>It varies by practice time and musical background. Many students play simple tunes on the chanter within months and move to pipes within a year with consistent practice. Patience and steady technique matter more than speed.</p>
            </div>
            <div className="faq-item">
              <h3>Where do lessons take place?</h3>
              <p>Kit teaches locally in Asheville. Send your location and the days you’re available to discuss the current options.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-pad" aria-labelledby="lessons-contact-heading">
        <div className="container two-col" style={{ alignItems: 'center' }}>
          <div>
            <h2 id="lessons-contact-heading" style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: .98, fontFamily: 'Libre Caslon Display' }}>Ready for your first lesson?</h2>
            <p style={{ color: 'rgba(255,255,255,.7)', marginTop: '20px', lineHeight: 1.7 }}>
              Tell Kit what you’d like to play. He’ll get back to you about availability and where to begin.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="button gold">Ask about lessons <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link to="/about" className="button outline-light">About Kit</Link>
            </div>
          </div>
          <div style={{ background: '#f8f4eb', padding: '28px', color: 'var(--ink)' }}>
            <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '22px', margin: '0 0 12px' }}>What to include in your inquiry</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
              <li style={{ display: 'flex', gap: '10px' }}><Clock size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none' }} /><span style={{ fontSize: '13px' }}><strong>Your location</strong> — where you’ll be coming from</span></li>
              <li style={{ display: 'flex', gap: '10px' }}><Music2 size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none' }} /><span style={{ fontSize: '13px' }}><strong>Musical background</strong> — beginner or experienced</span></li>
              <li style={{ display: 'flex', gap: '10px' }}><GraduationCap size={18} aria-hidden="true" style={{ color: 'var(--gold)', flex: 'none' }} /><span style={{ fontSize: '13px' }}><strong>Goals</strong> — personal enjoyment, band, competition</span></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
