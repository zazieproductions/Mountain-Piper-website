import { FormEvent, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  Church,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Menu,
  Music2,
  Phone,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

const services = [
  {
    icon: Heart,
    number: '01',
    title: 'Weddings',
    text: 'Create a stirring sense of occasion—from the first guest arrival to a processional no one will forget.',
    details: ['Prelude as guests arrive', 'Processional & recessional', 'Reception atmosphere'],
  },
  {
    icon: Church,
    number: '02',
    title: 'Memorials & Funerals',
    text: 'A dignified musical tribute, delivered with sensitivity, calm coordination, and genuine respect.',
    details: ['Amazing Grace & slow airs', 'Hymns and family requests', 'Graveside or church service'],
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Ceremonies & Events',
    text: 'Bring pageantry and emotional power to commencements, festivals, church observances, and private events.',
    details: ['College commencements', "Kirkin' o' the Tartans", 'Festivals & sporting events'],
  },
]

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Mountain Piper home">
      <span className="brand-seal" aria-hidden="true">
        <svg viewBox="0 0 52 52" role="img">
          <path d="M7 35 20 16l7 10 5-7 13 16" />
          <path d="M12 35h28M19 39h14" />
          <path d="M37 11v17M34 14h6" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>Mountain Piper</strong>
        <small>Kit Rashid · Asheville, NC</small>
      </span>
    </a>
  )
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow dark">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navigate = (id: string) => {
    setMenuOpen(false)
    window.setTimeout(() => scrollTo(id), 80)
  }

  const handleInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const eventType = String(form.get('eventType') || 'Bagpipe performance')
    const body = [
      `Name: ${form.get('name')}`,
      `Email: ${form.get('email')}`,
      `Phone: ${form.get('phone') || 'Not provided'}`,
      `Event: ${eventType}`,
      `Date: ${form.get('date') || 'Flexible / not selected'}`,
      `Location: ${form.get('location')}`,
      '',
      'Event details:',
      String(form.get('details') || 'No additional details provided.'),
    ].join('\n')

    setSubmitted(true)
    window.location.href = `mailto:mountainpiper1@gmail.com?subject=${encodeURIComponent(
      `Mountain Piper inquiry — ${eventType}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <button onClick={() => scrollTo('services')}>Services</button>
            <button onClick={() => scrollTo('about')}>About Kit</button>
            <button onClick={() => scrollTo('lessons')}>Lessons</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </nav>
          <button className="header-cta" onClick={() => scrollTo('contact')}>
            Check availability <ArrowRight size={16} />
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <p className="eyebrow">Navigate</p>
          {[
            ['Services', 'services'],
            ['About Kit', 'about'],
            ['Lessons', 'lessons'],
            ['Contact', 'contact'],
          ].map(([label, id], index) => (
            <button key={id} onClick={() => navigate(id)}>
              <span>0{index + 1}</span> {label} <ArrowRight />
            </button>
          ))}
          <div className="mobile-contact">
            <a href="tel:+18289741719"><Phone size={17} /> 828.974.1719</a>
            <a href="mailto:mountainpiper1@gmail.com"><Mail size={17} /> mountainpiper1@gmail.com</a>
          </div>
        </div>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-grain" />
          <div className="hero-image-wrap" aria-hidden="true">
            <img src="/images/kit-rashid.jpg" alt="" />
            <div className="hero-image-shade" />
          </div>
          <div className="hero-content">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow"><MapPin size={14} /> Asheville, North Carolina</p>
              <h1>
                Piping with <em>presence.</em><br />
                Music with meaning.
              </h1>
              <p className="hero-intro">
                Kit Rashid brings the unmistakable sound of the Highland bagpipe to weddings,
                memorials, ceremonies, and celebrations across Western North Carolina and beyond.
              </p>
              <div className="hero-actions">
                <button className="button gold" onClick={() => scrollTo('contact')}>
                  Inquire about your date <ArrowRight size={18} />
                </button>
                <button className="text-link" onClick={() => scrollTo('services')}>
                  Explore services <span>↓</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              className="hero-credential"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              <span className="credential-icon"><Award size={21} /></span>
              <div><strong>Professional-grade piper</strong><small>Performer · Teacher · Competitor</small></div>
            </motion.div>
          </div>
          <div className="hero-bottom">
            <div><strong>43+</strong><span>years of piping experience</span></div>
            <div><strong>100s</strong><span>of meaningful occasions</span></div>
            <div><strong>1</strong><span>unforgettable sound</span></div>
          </div>
        </section>

        <section className="intro-strip">
          <p>Traditional Scottish bagpiping</p>
          <Music2 size={20} />
          <p>Interceltic music</p>
          <Music2 size={20} />
          <p>Thoughtfully tailored performances</p>
        </section>

        <section className="services section-pad" id="services">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}>
              <SectionHeading
                eyebrow="Performance services"
                title="A singular sound for life's defining moments."
                copy="Every performance is shaped around the occasion, the setting, and the feeling you want your guests to carry with them."
              />
            </motion.div>
            <div className="service-grid">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.article
                    className="service-card"
                    key={service.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="service-top">
                      <span className="service-icon"><Icon size={27} /></span>
                      <span className="service-number">{service.number}</span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <ul>
                      {service.details.map((detail) => <li key={detail}><Check size={15} /> {detail}</li>)}
                    </ul>
                    <button onClick={() => scrollTo('contact')}>Request availability <ArrowRight size={17} /></button>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="container about-grid">
            <motion.div
              className="about-visual"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="about-image-frame">
                <img src="/images/event-piper.jpg" alt="Kit Rashid performing on the Highland bagpipes" />
              </div>
              <div className="about-plaque">
                <Music2 size={23} />
                <span><strong>Mountain Piper</strong><small>Asheville, NC</small></span>
              </div>
            </motion.div>

            <motion.div
              className="about-copy"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="eyebrow dark">Meet the piper</p>
              <h2>Kit Rashid</h2>
              <p className="about-lead">Four decades of craft. A lifetime of musical curiosity. One commanding, deeply human sound.</p>
              <p>
                Originally from Rome, New York and proud to call Asheville home, Kit is a performer,
                teacher, and professional-grade solo competitor whose playing is grounded in tradition
                and delivered with warmth.
              </p>
              <p>
                He performs with a steady eye for the details that matter—timing, tone, attire,
                communication, and respect for the moment. The result is polished, personal, and never routine.
              </p>
              <div className="credential-list">
                <div><Award /><span><strong>Professional solo competitor</strong><small>Eastern United States Pipe Band Association</small></span></div>
                <div><Users /><span><strong>Experienced instructor</strong><small>Private students and group instruction</small></span></div>
                <div><GraduationCap /><span><strong>Grandfather Mountain Highlanders</strong><small>Instructor for the Highland Games' host band</small></span></div>
              </div>
              <button className="button green" onClick={() => scrollTo('contact')}>Plan a performance <ArrowRight size={18} /></button>
            </motion.div>
          </div>
        </section>

        <section className="experience section-pad">
          <div className="container">
            <div className="experience-heading">
              <p className="eyebrow">The Mountain Piper standard</p>
              <h2>Professional from first note to final farewell.</h2>
            </div>
            <div className="process-grid">
              <div><span>01</span><h3>Tell Kit about the moment</h3><p>Share the date, location, and the atmosphere you have in mind.</p></div>
              <div><span>02</span><h3>Shape the performance</h3><p>Kit helps choose the right timing and repertoire for your setting.</p></div>
              <div><span>03</span><h3>Be fully present</h3><p>On the day, every detail is handled with care, poise, and precision.</p></div>
            </div>
          </div>
        </section>

        <section className="lessons section-pad" id="lessons">
          <div className="container lessons-grid">
            <motion.div
              className="lessons-copy"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="eyebrow dark">Highland bagpipe lessons</p>
              <h2>Tradition passed on, one note at a time.</h2>
              <p>
                The Highland bagpipe asks for both disciplined technique and musical expression. Kit's
                teaching gives aspiring pipers the patient, expert guidance to build both.
              </p>
              <div className="lesson-features">
                <span><Check /> Private or group instruction</span>
                <span><Check /> Beginners through competitive players</span>
                <span><Check /> Technique, expression, and repertoire</span>
              </div>
              <button className="button outline" onClick={() => scrollTo('contact')}>Ask about lessons <ArrowRight size={18} /></button>
            </motion.div>
            <motion.div
              className="lessons-image"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src="/images/piping-lesson.jpg" alt="Practice chanter, metronome, and traditional pipe music" />
              <div className="lessons-note">Grounded in a musical tradition passed on for generations.</div>
            </motion.div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-texture" />
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Pricing & availability</p>
              <h2>Make your moment resonate.</h2>
              <p>Every occasion is different. Share a few details and Kit will respond personally with availability and a tailored quote.</p>
              <div className="direct-contact">
                <a href="tel:+18289741719"><span><Phone /></span><div><small>Call Kit</small><strong>828.974.1719</strong></div></a>
                <a href="mailto:mountainpiper1@gmail.com"><span><Mail /></span><div><small>Email Kit</small><strong>mountainpiper1@gmail.com</strong></div></a>
              </div>
              <div className="availability-note"><CalendarDays /><span><strong>Dates are limited</strong><small>Early inquiries are recommended for weddings and seasonal events.</small></span></div>
            </div>

            <form className="inquiry-form" onSubmit={handleInquiry}>
              <div className="form-heading"><span>Performance inquiry</span><small>All fields marked * are required</small></div>
              <div className="form-row">
                <label>Full name *<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
                <label>Email address *<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
              </div>
              <div className="form-row">
                <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="(000) 000-0000" /></label>
                <label>Type of inquiry *
                  <select name="eventType" required defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Wedding</option>
                    <option>Memorial or funeral</option>
                    <option>Ceremony or private event</option>
                    <option>Bagpipe lessons</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
              <div className="form-row">
                <label>Event date<input name="date" type="date" /></label>
                <label>City / venue *<input name="location" type="text" required placeholder="Asheville, NC" /></label>
              </div>
              <label>Tell Kit about the occasion<textarea name="details" rows={4} placeholder="Timing, setting, music requests, or anything else that would be helpful…" /></label>
              <button className="button gold submit" type="submit">Send booking inquiry <ArrowRight size={18} /></button>
              {submitted && <p className="form-success">Your message is ready—complete sending it in your email app.</p>}
              <p className="form-fineprint">Submitting opens your default email app. No information is stored on this website.</p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main container">
          <div><BrandMark /><p>Traditional Highland bagpiping for meaningful occasions in Asheville and beyond.</p></div>
          <div className="footer-nav"><strong>Explore</strong><button onClick={() => scrollTo('services')}>Services</button><button onClick={() => scrollTo('about')}>About Kit</button><button onClick={() => scrollTo('lessons')}>Lessons</button></div>
          <div className="footer-contact"><strong>Get in touch</strong><a href="tel:+18289741719">828.974.1719</a><a href="mailto:mountainpiper1@gmail.com">mountainpiper1@gmail.com</a><span>Asheville, North Carolina</span></div>
        </div>
        <div className="footer-bottom container"><span>© {new Date().getFullYear()} Mountain Piper. All rights reserved.</span><button onClick={() => scrollTo('home')}>Back to top ↑</button></div>
      </footer>

      <button className="mobile-book" onClick={() => scrollTo('contact')}><CalendarDays size={17} /> Check availability</button>
    </div>
  )
}

export default App
