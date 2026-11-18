import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Award, Check, Church, GraduationCap, Heart, Music2, Sparkles, CalendarDays, Phone, Mail } from 'lucide-react';
import { KitBiography } from '../components/KitBiography';
import { SEO } from '../components/SEO';
import { publicAsset, publicSrcSet } from '../publicAsset';

const services = [
  {
    icon: Heart,
    number: '01',
    title: 'Weddings',
    slug: '/weddings',
    description: 'Kit takes his cue from your officiant and matches the pace of the march to your walk down the aisle.',
    details: ['Prelude as guests arrive', 'Processional & recessional', 'Music at the reception'],
    cta: 'Choose your ceremony music',
  },
  {
    icon: Church,
    number: '02',
    title: 'Funerals & Memorials',
    slug: '/funerals-memorials',
    description: 'If someone you love had a favorite hymn, start there. Kit can help you find a setting for the pipes or suggest a traditional lament.',
    details: ['Amazing Grace & slow airs', 'Hymns and family requests', 'Graveside or church service'],
    cta: 'Plan a tribute',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Ceremonies & Events',
    slug: '/events',
    description: 'A piper can bring a crowd to attention before anyone steps up to the lectern. A bright march gives a procession a steady pace to follow.',
    details: ['College commencements', "Kirkin' o' the Tartans", 'Festivals & race days'],
    cta: 'Music for your gathering',
  },
];

const aboutStats = [
  { value: '43', label: 'Years on the pipes', detail: 'Performing, teaching & competing' },
  { value: 'Pro', label: 'Grade solo competitor', detail: 'Eastern United States Pipe Band Assoc.' },
  { value: '40+', label: 'Years of performances', detail: 'In chapels and in the open air' },
  { value: 'Host band', label: 'Instructor', detail: 'Grandfather Mountain Highlanders' },
];

const teachers = [
  { name: 'Jimmy McIntosh', honour: 'MBE', note: '' },
  { name: 'Jimmy MacGregor', honour: '', note: '' },
  { name: 'Ian McLellan', honour: 'BEM', note: 'World-renowned Strathclyde Police Pipe Band' },
];

const tunes = [
  'Highland Cathedral',
  'Scotland the Brave',
  'Going Home',
  'Flower of Scotland',
  'Highland Laddie',
  'Flowers of the Forest',
  'Green Hills of Tyrol',
  'Amazing Grace',
];

const pillars = [
  {
    icon: Music2,
    title: 'Performer',
    text: 'Playing for a family at a graveside calls for a different touch than leading graduates onto a field. Kit plans where to stand and when to start with the people running the day.',
    note: 'Solo Highland pipes',
  },
  {
    icon: Award,
    title: 'Competitor',
    text: 'In solo competition, judges listen for steady tone, precise timing, and expression. Kit brings the same ear to a hymn as he does to a competition march.',
    note: 'EUSPBA · Professional grade',
  },
  {
    icon: GraduationCap,
    title: 'Teacher',
    text: 'From a first tune on the practice chanter to playing in unison with a band, Kit breaks a difficult passage into steps a student can practice at home.',
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
      "description": "Professional Highland piper based in Asheville, North Carolina. Bagpipes for weddings, funerals, memorials, ceremonies and events across Western North Carolina.",
      "url": "https://mountainpiperavl.com/",
      "telephone": "+18642070085",
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
      "serviceType": ["Piper for weddings", "Funeral piper", "Memorial piper", "Piper for events", "Bagpipe lessons", "Highland piper", "Scottish piper"],
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
        title="Asheville Piper | Highland Bagpipes for Weddings, Funerals & Events"
        description="Professional Highland piper based in Asheville, NC. Kit Rashid provides bagpipes for weddings, funerals, memorials, ceremonies and events across Western North Carolina. Bagpipe lessons available."
        canonicalPath="/"
        structuredData={structuredData}
      />

      {/* Hero - LCP optimized */}
      <section className="hero" id="home-hero" aria-labelledby="home-heading">
        <div className="hero-media">
          <picture>
            <source srcSet={publicSrcSet([['images/kit-rashid-mountains-400.webp', '400w'], ['images/kit-rashid-mountains-800.webp', '800w'], ['images/kit-rashid-mountains-1200.webp', '1200w']])} sizes="(max-width: 820px) 100vw, 54vw" type="image/webp" />
            <img
              src={publicAsset('images/kit-rashid-mountains-1200.jpg')}
              alt="Kit Rashid in a tartan kilt, holding his bagpipes beside a stone-lined stream"
              width={1200}
              height={800}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <h1 id="home-heading">
              Kit Rashid <em>Traditional Scottish bagpiping and Interceltic music</em>
            </h1>
            <p className="hero-intro">
              A march sets a procession in motion. A slow air gives a family time to say goodbye.
              Kit plays the Highland pipes in Asheville and across Western North Carolina.
            </p>
            <div className="hero-actions">
              <Link className="button gold" to="/contact">
                Inquire about your date <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="text-link" href="#services">
                Explore performance options <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div><strong>43+</strong><span>years of piping experience</span></div>
          <div><strong>100s</strong><span>ceremonies and celebrations</span></div>
          <div><strong>1</strong><span>musician from inquiry to performance</span></div>
        </div>
      </section>

      <div className="intro-strip">
        <p>Slow airs</p>
        <Music2 size={20} aria-hidden="true" />
        <p>Hymns</p>
        <Music2 size={20} aria-hidden="true" />
        <p>Lively marches</p>
      </div>

      <section className="services section-pad" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2 id="services-heading">Music for your occasion</h2>
            </div>
            <p className="section-copy">
              Start with the part of the day you’d like to mark with music. Kit can suggest a tune that suits the space and the people who’ll hear it.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <div className="service-top" aria-hidden="true">
                    <span className="service-icon"><Icon size={26} /></span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}><Check size={15} aria-hidden="true" /> {detail}</li>
                    ))}
                  </ul>
                  <Link to={service.slug} className="card-cta">
                    {service.cta} <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link to="/lessons" className="button outline">
              Explore lessons <ArrowRight size={18} aria-hidden="true" />
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
              <h2 id="about-heading" className="sr-only">About Kit Rashid</h2>
              <KitBiography />
              <div className="about-lineage">
                <p className="lineage-intro">
                  Kit studied with pipe majors including:
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

          <div className="venue-marquee">
            <p className="venue-label" id="repertoire-label">From Kit’s repertoire</p>
            <ul className="sr-only" aria-labelledby="repertoire-label">
              {tunes.map((tune) => <li key={tune}>{tune}</li>)}
            </ul>
            {/* Only the visual loop repeats. The list above is read once. */}
            <div className="venue-track" aria-hidden="true">
              {[...tunes, ...tunes].map((tune, index) => (
                <span key={`${tune}-${index}`}>{tune}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-pillars section-pad">
          <div className="container">
            <div className="pillars-heading">
              <h3>Performer. Competitor. Teacher.</h3>
            </div>
            <div className="pillar-grid">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <article className="pillar" key={pillar.title}>
                    <div className="pillar-top" aria-hidden="true">
                      <span className="pillar-icon"><Icon size={22} /></span>
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
            <h2 id="process-heading">Planning your performance</h2>
          </div>
          <div className="process-grid">
            <div><span>01</span><h3>Tell Kit about the moment</h3><p>Tell him when and where you’re gathering and who will be there.</p></div>
            <div><span>02</span><h3>Shape the performance</h3><p>Choose the tunes together and agree on cues with your planner or officiant.</p></div>
            <div><span>03</span><h3>Be fully present</h3><p>On the day, Kit arrives early to tune and check his position before your guests take their seats.</p></div>
          </div>
          <div style={{ marginTop: '48px' }}>
            <Link to="/contact" className="button gold">Start your inquiry <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="lessons section-pad" id="lessons-preview" aria-labelledby="lessons-heading">
        <div className="container lessons-grid">
          <div className="lessons-copy">
            <h2 id="lessons-heading">Highland bagpipe lessons</h2>
            <p>
              New students start on a practice chanter, learning to place their fingers and give a tune its rhythm. Already playing? Bring a passage you’re working on or a piece for your next competition.
            </p>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> One-to-one or group instruction</li>
              <li><Check aria-hidden="true" /> Beginners through competitive players</li>
              <li><Check aria-hidden="true" /> Technique, expression, and traditional repertoire</li>
            </ul>
            <Link className="button outline" to="/lessons">Find a lesson format <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="lessons-image">
            <picture>
              <source srcSet={publicSrcSet([['images/kit-rashid-artist-studios-400.webp', '400w'], ['images/kit-rashid-artist-studios-800.webp', '800w']])} sizes="(max-width: 820px) 100vw, 500px" type="image/webp" />
              <img
                src={publicAsset('images/kit-rashid-artist-studios-800.jpg')}
                alt="Kit holding his pipes by a doorway marked “Artist Studios”"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="lessons-note">From your first tune to playing in a band.</div>
          </div>
        </div>
      </section>

      <section className="contact textured-contact section-pad" id="contact" aria-labelledby="contact-heading">
        <div className="container contact-grid">
          <div className="contact-copy">
            <h2 id="contact-heading">Get in touch</h2>
            <p>Ask Kit about your date and what a performance would cost. You’ll hear back from him directly.</p>
            <div className="direct-contact">
              <a href="tel:+18642070085"><span aria-hidden="true"><Phone /></span><div><small>Call Kit</small><strong>+1 (864) 207-0085</strong></div></a>
              <a href="mailto:mountainpiper1@gmail.com"><span aria-hidden="true"><Mail /></span><div><small>Email Kit</small><strong>mountainpiper1@gmail.com</strong></div></a>
            </div>
            <div className="availability-note"><CalendarDays aria-hidden="true" /><span><strong>Dates are limited</strong><small>Spring and fall weekends fill early. If you’re making arrangements on short notice, a phone call is best.</small></span></div>
          </div>

          <div className="inquiry-form" role="region" aria-labelledby="quick-inquiry-heading">
            <div className="form-heading"><span id="quick-inquiry-heading">Before you inquire</span></div>
            <p style={{ fontSize: '13px', color: '#5a6b63', margin: 0, lineHeight: 1.6 }}>
              A few details will help Kit plan with you. It’s fine if you don’t know them all yet.
            </p>
            <ul className="check-list" style={{ margin: '12px 0 0' }}>
              <li><Check aria-hidden="true" /> Your date and venue</li>
              <li><Check aria-hidden="true" /> When you’d like the music to begin</li>
              <li><Check aria-hidden="true" /> Any tunes that mean something to you</li>
            </ul>
            <Link to="/contact" className="button gold submit">Go to booking form <ArrowRight size={18} aria-hidden="true" /></Link>
            <p className="form-fineprint">The booking form prepares a message in your email app. Nothing is stored here.</p>
          </div>
        </div>
      </section>

      <section className="local-seo section-pad" aria-labelledby="local-seo-heading">
        <div className="container local-grid">
          <div>
            <h2 id="local-seo-heading">Service area</h2>
            <ul className="service-area-list">
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
            <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '22px', margin: '0 0 16px' }}>Playing in the mountains</h3>
            <p className="section-copy">A stone chapel and an open lawn carry sound differently. Kit knows the local venues and can help you choose a spot where everyone can hear the tune comfortably.</p>
            <Link to="/contact" className="button green" style={{ marginTop: '20px' }}>Check availability <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
