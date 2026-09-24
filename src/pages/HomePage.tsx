import { Link } from 'react-router-dom';
import { ArrowRight, Award, Check, Church, GraduationCap, Heart, Music2, Sparkles, CalendarDays, Phone, Mail } from 'lucide-react';
import { SEO } from '../components/SEO';

const services = [
  {
    icon: Heart,
    number: '01',
    title: 'Weddings',
    slug: '/weddings',
    description: 'Create a stirring sense of occasion for your wedding day in Asheville and Western North Carolina — from guest arrival to processional.',
    details: ['Prelude as guests arrive', 'Processional & recessional', 'Reception atmosphere'],
    cta: 'Asheville wedding bagpiper',
  },
  {
    icon: Church,
    number: '02',
    title: 'Funerals & Memorials',
    slug: '/funerals-memorials',
    description: 'A dignified musical tribute for funerals and memorial services across Asheville and Western North Carolina, delivered with sensitivity.',
    details: ['Amazing Grace & slow airs', 'Hymns and family requests', 'Graveside or church service'],
    cta: 'Funeral bagpiper Asheville',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Ceremonies & Events',
    slug: '/events',
    description: 'Bring pageantry and emotional power to commencements, festivals, church observances and private events throughout the region.',
    details: ['College commencements', "Kirkin' o' the Tartans", 'Festivals & sporting events'],
    cta: 'Bagpiper for events Asheville',
  },
];

const aboutStats = [
  { value: '43', label: 'Years on the pipes', detail: 'Performing, teaching & competing' },
  { value: 'Pro', label: 'Grade solo competitor', detail: 'Eastern United States Pipe Band Assoc.' },
  { value: '40+', label: 'Years of performances', detail: 'Weddings, memorials & celebrations' },
  { value: 'Host band', label: 'Instructor', detail: 'Grandfather Mountain Highlanders' },
];

const teachers = [
  { name: 'Jimmy McIntosh', honour: 'MBE', note: '' },
  { name: 'Jimmy MacGregor', honour: '', note: '' },
  { name: 'Ian McLellan', honour: 'BEM', note: 'World-renowned Strathclyde Police Pipe Band' },
];

const venues = [
  'Weddings',
  'Funerals & memorials',
  "Kirkin' o' the Tartans",
  'College commencements',
  'Collegiate sporting events',
  'Festivals',
  'Regattas',
  'Horse races',
];

const pillars = [
  {
    icon: Music2,
    title: 'Performer',
    text: 'More than four decades of music for life’s biggest days in Asheville and Western North Carolina, from a quiet graveside lament to a festival crowd, with timing, tone, and attire handled flawlessly.',
    note: 'Weddings · Memorials · Ceremonies',
  },
  {
    icon: Award,
    title: 'Competitor',
    text: 'Kit competes as a soloist in the professional grade of the Eastern United States Pipe Band Association. That competitive standard shows up at every booking.',
    note: 'EUSPBA · Professional grade',
  },
  {
    icon: GraduationCap,
    title: 'Teacher',
    text: 'An instructor for the Grandfather Mountain Highlanders and a patient private teacher for bagpipe lessons in Asheville, equally at home with a single beginner or a full group.',
    note: 'Private · Group · Band instruction',
  },
];

export function HomePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://mountainpiperavl.com/#business",
      "name": "Mountain Piper - Kit Rashid",
      "image": "https://mountainpiperavl.com/images/kit-rashid-mountains-1200.webp",
      "description": "Professional Highland bagpiper based in Asheville, North Carolina. Bagpipes for weddings, funerals, memorials, ceremonies and events across Western North Carolina.",
      "url": "https://mountainpiperavl.com/",
      "telephone": "+1-828-974-1719",
      "email": "mountainpiper1@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Asheville",
        "addressRegion": "NC",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Asheville" },
        { "@type": "AdministrativeArea", "name": "Western North Carolina" },
        { "@type": "AdministrativeArea", "name": "Buncombe County" }
      ],
      "serviceType": ["Bagpiper for weddings", "Funeral bagpiper", "Memorial bagpiper", "Bagpiper for events", "Bagpipe lessons", "Highland bagpiper", "Scottish bagpiper"],
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mountainpiperavl.com/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you travel outside Asheville for bagpipe performances?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Based in Asheville, North Carolina, Kit performs throughout Western North Carolina including Buncombe County and surrounding areas. Share your venue location when you inquire and you'll receive a tailored response."
          }
        },
        {
          "@type": "Question",
          "name": "What types of events do you play bagpipes for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Weddings, funerals, memorial services, church services, college commencements, festivals, sporting events, private parties and other ceremonies that call for Highland bagpipes."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer bagpipe lessons in Asheville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Kit offers private and group bagpipe lessons for beginners through competitive players, including technique, expression and repertoire. He is also an instructor for the Grandfather Mountain Highlanders."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Asheville Bagpiper | Highland Bagpipes for Weddings, Funerals & Events"
        description="Professional Highland bagpiper based in Asheville, NC. Kit Rashid provides bagpipes for weddings, funerals, memorials, ceremonies and events across Western North Carolina. Bagpipe lessons available."
        canonicalPath="/"
        structuredData={structuredData}
      />

      {/* Hero - LCP optimized */}
      <section className="hero" id="home-hero" aria-labelledby="home-heading">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-media" aria-hidden="true">
          <picture>
            <source srcSet="/images/kit-rashid-mountains-400.webp 400w, /images/kit-rashid-mountains-800.webp 800w, /images/kit-rashid-mountains-1200.webp 1200w" sizes="(max-width: 820px) 100vw, 54vw" type="image/webp" />
            <img
              src="/images/kit-rashid-mountains-1200.jpg"
              alt=""
              width={1200}
              height={800}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="hero-image-shade" />
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow"><Music2 size={14} aria-hidden="true" /> Weddings · Memorials · Ceremonies · Asheville, NC</p>
            <h1 id="home-heading">
              Professional Highland bagpiper <em>in Asheville, North Carolina.</em>
            </h1>
            <p className="hero-intro">
              Kit Rashid brings the unmistakable sound of the Highland bagpipe to weddings,
              memorials, ceremonies, and celebrations across Asheville and Western North Carolina.
              Scottish and Highland traditions, delivered with care for the moment.
            </p>
            <div className="hero-actions">
              <Link className="button gold" to="/contact">
                Inquire about your date <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="text-link" to="/weddings">
                Explore wedding bagpipes <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>

          <div className="hero-credential" aria-label="Credentials">
            <span className="credential-icon" aria-hidden="true"><Award size={21} /></span>
            <div><strong>Professional-grade piper</strong><small>Performer · Teacher · Competitor</small></div>
          </div>
        </div>

        <div className="hero-bottom" aria-label="Experience highlights">
          <div><strong>43+</strong><span>years of piping experience</span></div>
          <div><strong>100s</strong><span>of meaningful occasions in WNC</span></div>
          <div><strong>1</strong><span>unforgettable Highland sound</span></div>
        </div>
      </section>

      <section className="intro-strip" aria-label="Service keywords">
        <p>Traditional Scottish bagpiping</p>
        <Music2 size={20} aria-hidden="true" />
        <p>Highland bagpiper Asheville</p>
        <Music2 size={20} aria-hidden="true" />
        <p>Western North Carolina</p>
      </section>

      <section className="services section-pad" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow dark">Performance services</p>
              <h2 id="services-heading">A singular sound for life's defining moments in Asheville.</h2>
            </div>
            <p className="section-copy">
              Every performance is shaped around the occasion, the setting, and the feeling you want your guests to carry with them. Based in Asheville, serving Western North Carolina.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <div className="service-top">
                    <span className="service-icon" aria-hidden="true"><Icon size={26} /></span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}><Check size={15} aria-hidden="true" /> {detail}</li>
                    ))}
                  </ul>
                  <Link to={service.slug} className="card-cta" aria-label={`Learn more about ${service.cta}`}>
                    {service.cta} <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link to="/lessons" className="button outline">
              Bagpipe lessons in Asheville <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="about" id="about-preview" aria-labelledby="about-heading">
        <div className="about-intro section-pad">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-image-frame">
                <picture>
                  <source srcSet="/images/kit-rashid-performing-400.webp 400w, /images/kit-rashid-performing-800.webp 800w" sizes="(max-width: 820px) 100vw, 400px" type="image/webp" />
                  <img
                    src="/images/kit-rashid-performing-800.jpg"
                    alt="Kit Rashid performing on the Highland bagpipes beside a stone tower in Western North Carolina"
                    width={800}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="about-inset">
                <picture>
                  <source srcSet="/images/kit-rashid-stone-steps-400.webp 400w, /images/kit-rashid-stone-steps-800.webp 800w" sizes="200px" type="image/webp" />
                  <img
                    src="/images/kit-rashid-stone-steps-800.jpg"
                    alt="Kit Rashid in full Highland dress on stone steps, Asheville bagpiper"
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
                    <path id="seal-circle-home" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
                  </defs>
                  <text>
                    <textPath href="#seal-circle-home">Performer · Teacher · Competitor ·</textPath>
                  </text>
                </svg>
                <span><strong>43</strong><small>years</small></span>
              </div>
            </div>

            <div className="about-copy">
              <p className="eyebrow dark">Meet the piper</p>
              <h2 id="about-heading">Kit Rashid</h2>
              <div className="about-route" aria-label="From Rome, New York to Asheville, North Carolina">
                <span>Rome, New York</span>
                <i aria-hidden="true" />
                <span>Asheville, North Carolina</span>
              </div>
              <p className="about-lead">
                Four decades of craft. A lifetime of musical devotion. One commanding, deeply human Highland sound.
              </p>
              <p>
                Originally from Rome, New York, and proud to call Asheville home, Kit brings 43 years of
                experience as a performer, teacher, and competitor on the Highland bagpipe. He competes as a
                soloist in the <strong>professional grade of the Eastern United States Pipe Band Association</strong>,
                and serves as an instructor for the <strong>Grandfather Mountain Highlanders</strong>, the host
                band of the Grandfather Mountain Highland Games.
              </p>
              <p>
                For more than 40 years he has provided top-quality music for weddings, funerals,
                commencements, festivals, and just about every kind of occasion in between across Western North Carolina and beyond. Every
                performance is polished, personal, and delivered with respect for the moment.
              </p>
              <div className="about-lineage">
                <p className="lineage-intro">
                  Kit has had the good fortune to study with some of piping's greats, including:
                </p>
                <ul>
                  {teachers.map((teacher) => (
                    <li key={teacher.name}>
                      <span className="lineage-rank">PM</span>
                      <span className="lineage-name">
                        <strong>{teacher.name}</strong>
                        {teacher.note && <small>{teacher.note}</small>}
                      </span>
                      {teacher.honour && <span className="lineage-honour">{teacher.honour}</span>}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about-actions">
                <Link className="button green" to="/contact">Plan a performance <ArrowRight size={18} aria-hidden="true" /></Link>
                <Link className="about-link" to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(20,54,44,.3)', padding: '6px 0', textDecoration: 'none', color: 'var(--forest)', fontSize: '12px', fontWeight: 700 }}>
                  About Kit Rashid <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="about-band">
          <div className="container">
            <blockquote className="about-quote">
              <span className="quote-mark" aria-hidden="true">“</span>
              <p>Put simply, piping is his <em>vocation</em>.</p>
              <p className="about-quote-note">A firm commitment to sharing the music he loves in a way that is completely inclusive and always professional.</p>
            </blockquote>

            <div className="about-stats">
              {aboutStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                  <small>{stat.detail}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="venue-marquee" aria-label="Venues where Kit has performed">
            <p className="venue-label">Heard at</p>
            <ul className="sr-only">
              {venues.map((venue) => <li key={venue}>{venue}</li>)}
            </ul>
            <div className="venue-track" aria-hidden="true">
              {[...venues, ...venues].map((venue, index) => (
                <span key={`${venue}-${index}`}>{venue}<Music2 size={15} /></span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-pillars section-pad">
          <div className="container">
            <div className="pillars-heading">
              <p className="eyebrow dark">Three disciplines, one standard</p>
              <h3>Performer. Competitor. Teacher. Asheville bagpiper.</h3>
            </div>
            <div className="pillar-grid">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <article className="pillar" key={pillar.title}>
                    <div className="pillar-top">
                      <span className="pillar-icon" aria-hidden="true"><Icon size={22} /></span>
                      <span className="pillar-number">0{index + 1}</span>
                    </div>
                    <h4>{pillar.title}</h4>
                    <p>{pillar.text}</p>
                    <small>{pillar.note}</small>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="experience section-pad" aria-labelledby="process-heading">
        <div className="container">
          <div className="experience-heading">
            <p className="eyebrow">The Mountain Piper standard</p>
            <h2 id="process-heading">Professional from first note to final farewell in Western North Carolina.</h2>
          </div>
          <div className="process-grid">
            <div><span>01</span><h3>Tell Kit about the moment</h3><p>Share the date, location in Asheville or Western North Carolina, and the atmosphere you have in mind.</p></div>
            <div><span>02</span><h3>Shape the performance</h3><p>Kit helps choose the right timing and repertoire for your wedding, memorial, or event setting.</p></div>
            <div><span>03</span><h3>Be fully present</h3><p>On the day, every detail is handled with care, poise, and precision — so you can focus on your guests.</p></div>
          </div>
          <div style={{ marginTop: '48px' }}>
            <Link to="/contact" className="button gold">Start your inquiry <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="lessons section-pad" id="lessons-preview" aria-labelledby="lessons-heading">
        <div className="container lessons-grid">
          <div className="lessons-copy">
            <p className="eyebrow dark">Highland bagpipe lessons</p>
            <h2 id="lessons-heading">Tradition passed on, one note at a time in Asheville.</h2>
            <p>
              The Highland bagpipe asks for both disciplined technique and musical expression. Kit's
              teaching gives aspiring pipers in Asheville and Western North Carolina the patient, expert guidance to build both.
            </p>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> Private or group bagpipe instruction in Asheville area</li>
              <li><Check aria-hidden="true" /> Beginners through competitive players</li>
              <li><Check aria-hidden="true" /> Technique, expression, and traditional repertoire</li>
            </ul>
            <Link className="button outline" to="/lessons">Bagpipe lessons Asheville <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="lessons-image">
            <picture>
              <source srcSet="/images/kit-rashid-artist-studios-400.webp 400w, /images/kit-rashid-artist-studios-800.webp 800w" sizes="(max-width: 820px) 100vw, 500px" type="image/webp" />
              <img
                src="/images/kit-rashid-artist-studios-800.jpg"
                alt="Kit Rashid in full Highland dress holding bagpipes outside an artist studio in Asheville, North Carolina"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="lessons-note">Grounded in a musical tradition passed on for generations in Western North Carolina.</div>
          </div>
        </div>
      </section>

      <section className="contact section-pad" id="contact" aria-labelledby="contact-heading">
        <div className="contact-texture" aria-hidden="true" />
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Booking inquiries</p>
            <h2 id="contact-heading">Make your moment resonate in Asheville.</h2>
            <p>Every occasion is different. Share a few details and Kit will respond personally with availability and a tailored quote for your event in Western North Carolina.</p>
            <div className="direct-contact">
              <a href="tel:+18289741719"><span aria-hidden="true"><Phone /></span><div><small>Call Kit</small><strong>828.974.1719</strong></div></a>
              <a href="mailto:mountainpiper1@gmail.com"><span aria-hidden="true"><Mail /></span><div><small>Email Kit</small><strong>mountainpiper1@gmail.com</strong></div></a>
            </div>
            <div className="availability-note"><CalendarDays aria-hidden="true" /><span><strong>Dates are limited</strong><small>Early inquiries are recommended for weddings and seasonal events in Asheville and Western North Carolina.</small></span></div>
            <div style={{ marginTop: '32px' }}>
              <Link to="/contact" className="button outline-light">Full contact form <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>

          <div className="inquiry-form" role="region" aria-labelledby="quick-inquiry-heading">
            <div className="form-heading"><span id="quick-inquiry-heading">Quick inquiry</span><small>Asheville & WNC</small></div>
            <p style={{ fontSize: '13px', color: '#5a6b63', margin: 0, lineHeight: 1.6 }}>
              Looking for an Asheville bagpiper for your wedding, funeral, or event? Use the full contact form for a detailed response.
            </p>
            <ul className="check-list" style={{ margin: '12px 0 0' }}>
              <li><Check aria-hidden="true" /> Professional Highland bagpipes</li>
              <li><Check aria-hidden="true" /> Based in Asheville, serving Western North Carolina</li>
              <li><Check aria-hidden="true" /> Weddings, memorials, ceremonies, lessons</li>
            </ul>
            <Link to="/contact" className="button gold submit">Go to booking form <ArrowRight size={18} aria-hidden="true" /></Link>
            <p className="form-fineprint">No information is stored on this website. Inquiries open your email app or go directly to Kit.</p>
          </div>
        </div>
      </section>

      <section className="local-seo section-pad" aria-labelledby="local-seo-heading">
        <div className="container local-grid">
          <div>
            <p className="eyebrow dark">Service area</p>
            <h2 id="local-seo-heading">Asheville bagpiper serving Western North Carolina.</h2>
            <div className="prose">
              <p>
                Mountain Piper is based in Asheville, North Carolina. Kit Rashid performs as a Highland bagpiper for weddings, funerals, memorials, and events throughout Asheville and Western North Carolina. If you are searching for a bagpiper near me in the Asheville area, or a Scottish bagpiper for a ceremony in the mountains, reach out with your venue location and date.
              </p>
              <p>
                Services include bagpiper for weddings in Western North Carolina, bagpiper for funerals in Western North Carolina, bagpiper for memorial services, and bagpipe lessons in Asheville for beginners through competitive players.
              </p>
            </div>
            <ul className="service-area-list" aria-label="Areas served">
              <li>Asheville</li>
              <li>Western North Carolina</li>
              <li>Buncombe County</li>
              <li>Black Mountain</li>
              <li>Weaverville</li>
              <li>Hendersonville</li>
              <li>Waynesville</li>
              <li>Grandfather Mountain area</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '22px', margin: '0 0 16px' }}>Why book a local Asheville bagpiper?</h3>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> Local knowledge of Asheville wedding venues, churches, and mountain settings</li>
              <li><Check aria-hidden="true" /> Reliable timing and coordination for high-stakes moments</li>
              <li><Check aria-hidden="true" /> Traditional Highland dress and polished presentation</li>
              <li><Check aria-hidden="true" /> Repertoire guidance — from Amazing Grace to wedding processionals</li>
              <li><Check aria-hidden="true" /> Direct communication with Kit — no agency</li>
            </ul>
            <Link to="/contact" className="button green" style={{ marginTop: '20px' }}>Check availability <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
