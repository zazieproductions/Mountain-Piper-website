import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Check, Mail, MapPin, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';

type FormErrors = {
  name?: string;
  email?: string;
  eventType?: string;
  location?: string;
};

export function ContactPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mountainpiperavl.com/" },
        { "@type": "ListItem", "position": 2, "name": "Contact - Asheville Bagpiper", "item": "https://mountainpiperavl.com/contact" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Mountain Piper - Asheville Bagpiper",
      "description": "Contact Kit Rashid, professional Highland bagpiper based in Asheville, NC. Check availability for weddings, funerals, events and bagpipe lessons in Western North Carolina.",
      "url": "https://mountainpiperavl.com/contact"
    }
  ];

  const validate = (form: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const eventType = String(form.get('eventType') || '').trim();
    const location = String(form.get('location') || '').trim();

    if (!name || name.length < 2) newErrors.name = 'Please enter your full name.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email address.';
    if (!eventType) newErrors.eventType = 'Please select a type of inquiry.';
    if (!location || location.length < 3) newErrors.location = 'Please enter city or venue, e.g., Asheville, NC.';
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const validationErrors = validate(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error
      const firstErrorField = Object.keys(validationErrors)[0];
      const field = form.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
      field?.focus();
      return;
    }

    setErrors({});
    const eventType = String(formData.get('eventType') || 'Bagpipe performance');
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      `Event: ${eventType}`,
      `Date: ${formData.get('date') || 'Flexible / not selected'}`,
      `Location: ${formData.get('location')}`,
      '',
      'Event details:',
      String(formData.get('details') || 'No additional details provided.'),
    ].join('\n');

    setSubmitted(true);
    // Use mailto for now - no backend storage per requirements
    window.location.href = `mailto:mountainpiper1@gmail.com?subject=${encodeURIComponent(
      `Mountain Piper inquiry — ${eventType}`
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <SEO
        title="Contact Asheville Bagpiper | Check Availability for Weddings, Funerals & Events"
        description="Contact Kit Rashid, professional Highland bagpiper based in Asheville, NC. Check availability for weddings, funerals, memorials, events and bagpipe lessons across Western North Carolina. 828.974.1719"
        canonicalPath="/contact"
        structuredData={structuredData}
      />

      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Contact Asheville Bagpiper</li>
            </ol>
          </nav>
          <p className="eyebrow"><CalendarDays size={14} aria-hidden="true" /> Booking inquiries · Asheville & Western North Carolina</p>
          <h1 id="contact-heading">Contact <em>Mountain Piper</em> — Asheville bagpiper.</h1>
          <p className="lead">
            Every occasion is different. Share your date, location in Asheville or Western North Carolina, and a bit about the moment you have in mind. Kit responds personally with availability and a tailored quote.
          </p>
        </div>
      </section>

      <section className="contact section-pad" id="contact-form" aria-labelledby="form-heading">
        <div className="contact-texture" aria-hidden="true" />
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Get in touch</p>
            <h2 id="form-heading">Make your moment resonate in Asheville.</h2>
            <p>
              Looking for an Asheville bagpiper for your wedding, funeral, memorial, or event? Or bagpipe lessons in Asheville? This form helps Kit understand your needs for a quick, personal response.
            </p>
            
            <div className="direct-contact" aria-label="Direct contact methods">
              <a href="tel:+18289741719">
                <span aria-hidden="true"><Phone /></span>
                <div><small>Call Kit</small><strong>828.974.1719</strong></div>
              </a>
              <a href="mailto:mountainpiper1@gmail.com">
                <span aria-hidden="true"><Mail /></span>
                <div><small>Email Kit</small><strong>mountainpiper1@gmail.com</strong></div>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'white' }}>
                <span aria-hidden="true" style={{ display: 'grid', placeItems: 'center', width: '42px', height: '42px', border: '1px solid rgba(224,186,111,.5)', borderRadius: '50%', color: 'var(--gold-bright)' }}><MapPin size={16} /></span>
                <div><small style={{ color: 'rgba(255,255,255,.48)', fontSize: '9px', letterSpacing: '.12em', textTransform: 'uppercase' }}>Based in</small><strong style={{ fontSize: '13px', fontWeight: 500, marginTop: '4px', display: 'block' }}>Asheville, North Carolina<br />Serving Western North Carolina</strong></div>
              </div>
            </div>

            <div className="availability-note">
              <CalendarDays aria-hidden="true" />
              <span>
                <strong>Dates are limited — early inquiries recommended</strong>
                <small>Especially for Asheville weddings in fall and spring, and seasonal events across Western North Carolina. Funeral and memorial services with short notice accommodated when possible — phone is fastest.</small>
              </span>
            </div>

            <div style={{ marginTop: '32px', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', padding: '20px' }}>
              <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '18px', margin: '0 0 12px' }}>What happens after you inquire?</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '10px', fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,.7)' }}>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={14} aria-hidden="true" style={{ color: 'var(--gold-bright)', flex: 'none', marginTop: '3px' }} /> Personal response from Kit (not an agency)</li>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={14} aria-hidden="true" style={{ color: 'var(--gold-bright)', flex: 'none', marginTop: '3px' }} /> Availability for your date in Asheville or WNC</li>
                <li style={{ display: 'flex', gap: '8px' }}><Check size={14} aria-hidden="true" style={{ color: 'var(--gold-bright)', flex: 'none', marginTop: '3px' }} /> Tailored guidance on timing, repertoire, and logistics</li>
              </ul>
            </div>
          </div>

          <form className="inquiry-form" onSubmit={handleSubmit} noValidate aria-labelledby="inquiry-form-title" aria-describedby="form-instructions">
            <div className="form-heading">
              <span id="inquiry-form-title">Performance inquiry</span>
              <small>All fields marked * are required</small>
            </div>
            <p id="form-instructions" className="sr-only">Fill out this form to inquire about booking an Asheville bagpiper. Required fields are marked with an asterisk. Submitting opens your email app.</p>
            
            <div className="form-row">
              <label htmlFor="name">Full name * 
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <span id="name-error" className="field-error" role="alert">{errors.name}</span>}
              </label>
              <label htmlFor="email">Email address *
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <span id="email-error" className="field-error" role="alert">{errors.email}</span>}
              </label>
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone number
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(000) 000-0000"
                />
              </label>
              <label htmlFor="eventType">Type of inquiry *
                <select
                  id="eventType"
                  name="eventType"
                  required
                  defaultValue=""
                  aria-invalid={!!errors.eventType}
                  aria-describedby={errors.eventType ? 'eventType-error' : undefined}
                >
                  <option value="" disabled>Select one</option>
                  <option value="Wedding">Wedding - Asheville wedding bagpiper</option>
                  <option value="Memorial or funeral">Memorial or funeral - Funeral bagpiper Asheville</option>
                  <option value="Ceremony or private event">Ceremony or private event - Bagpiper for events Asheville</option>
                  <option value="Bagpipe lessons">Bagpipe lessons - Bagpipe lessons Asheville</option>
                  <option value="Other">Other</option>
                </select>
                {errors.eventType && <span id="eventType-error" className="field-error" role="alert">{errors.eventType}</span>}
              </label>
            </div>

            <div className="form-row">
              <label htmlFor="date">Event date
                <input id="date" name="date" type="date" />
              </label>
              <label htmlFor="location">City / venue * 
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  placeholder="Asheville, NC"
                  aria-invalid={!!errors.location}
                  aria-describedby={errors.location ? 'location-error' : 'location-help'}
                />
                <span id="location-help" className="sr-only">Enter your event location, for example Asheville, NC or Black Mountain, NC</span>
                {errors.location && <span id="location-error" className="field-error" role="alert">{errors.location}</span>}
              </label>
            </div>

            <label htmlFor="details">Tell Kit about the occasion
              <textarea
                id="details"
                name="details"
                rows={5}
                placeholder="Timing, setting, music requests, or anything else that would be helpful for your event in Asheville or Western North Carolina…"
              />
            </label>

            <button className="button gold submit" type="submit">
              Send booking inquiry <ArrowRight size={18} aria-hidden="true" />
            </button>

            {submitted && (
              <p className="form-success" role="status" aria-live="polite">
                Your message is ready — complete sending it in your email app. Kit will respond personally about your Asheville or WNC event.
              </p>
            )}
            <p className="form-fineprint">
              Submitting opens your default email app with a pre-filled message to mountainpiper1@gmail.com. No information is stored on this website. For time-sensitive funeral inquiries in Asheville, calling 828.974.1719 is fastest.
            </p>
          </form>
        </div>
      </section>

      <section className="local-seo section-pad" aria-labelledby="contact-local-heading">
        <div className="container local-grid">
          <div>
            <h2 id="contact-local-heading" style={{ fontFamily: 'Libre Caslon Display' }}>Asheville bagpiper — serving Western North Carolina.</h2>
            <div className="prose">
              <p>
                Mountain Piper is based in Asheville, North Carolina. If you're searching for a bagpiper near me in Asheville, a bagpiper for weddings in Western North Carolina, or a bagpiper for funerals in Western North Carolina, include your venue city when you inquire.
              </p>
              <p>
                Kit performs for weddings, funerals, memorials, ceremonies, and events throughout Asheville, Buncombe County, Black Mountain, Weaverville, Hendersonville, Waynesville, and the greater Western North Carolina region.
              </p>
            </div>
            <ul className="service-area-list" aria-label="Areas served">
              <li>Asheville bagpiper</li>
              <li>Western North Carolina</li>
              <li>Buncombe County</li>
              <li>Black Mountain</li>
              <li>Weaverville</li>
              <li>Hendersonville</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontFamily: 'Libre Caslon Display', fontSize: '20px', margin: '0 0 12px' }}>Quick links for high-intent searches</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '8px' }}>
              <li><Link to="/weddings" style={{ fontSize: '14px', textDecoration: 'underline' }}>Asheville wedding bagpiper & bagpiper for weddings in Western North Carolina</Link></li>
              <li><Link to="/funerals-memorials" style={{ fontSize: '14px', textDecoration: 'underline' }}>Funeral bagpiper Asheville & bagpiper for funerals in Western North Carolina</Link></li>
              <li><Link to="/events" style={{ fontSize: '14px', textDecoration: 'underline' }}>Bagpiper for events Asheville & Scottish bagpiper Western North Carolina</Link></li>
              <li><Link to="/lessons" style={{ fontSize: '14px', textDecoration: 'underline' }}>Bagpipe lessons Asheville & Highland bagpiper Asheville</Link></li>
              <li><Link to="/about" style={{ fontSize: '14px', textDecoration: 'underline' }}>About Kit — Scottish bagpiper & Highland bagpiper Asheville</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
