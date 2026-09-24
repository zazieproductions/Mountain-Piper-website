/**
 * Mountain Piper — main.js
 * Progressive enhancement only: every page is fully readable and usable
 * without JavaScript. This module adds the mobile menu, scroll polish,
 * reveal-on-scroll, and friendlier form validation.
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- Sticky header shadow ----------------------------------------- */
const header = document.querySelector('[data-header]')
if (header) {
  const setHeaderState = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10)
  }
  setHeaderState()
  window.addEventListener('scroll', setHeaderState, { passive: true })
}

/* ---------- Mobile navigation --------------------------------------------- */
const navToggle = document.querySelector('[data-nav-toggle]')
const navMenu = document.getElementById('nav-menu')

if (navToggle && navMenu) {
  let lastFocused = null

  const openMenu = () => {
    lastFocused = document.activeElement
    navToggle.setAttribute('aria-expanded', 'true')
    navToggle.setAttribute('aria-label', 'Close menu')
    navMenu.classList.add('is-open')
    document.body.style.overflow = 'hidden'
    const firstLink = navMenu.querySelector('a')
    if (firstLink) firstLink.focus()
    document.addEventListener('keydown', onKeydown)
  }

  const closeMenu = (returnFocus = true) => {
    navToggle.setAttribute('aria-expanded', 'false')
    navToggle.setAttribute('aria-label', 'Open menu')
    navMenu.classList.remove('is-open')
    document.body.style.overflow = ''
    document.removeEventListener('keydown', onKeydown)
    if (returnFocus && lastFocused && 'focus' in lastFocused) lastFocused.focus()
  }

  const onKeydown = (event) => {
    if (event.key === 'Escape') {
      closeMenu()
      return
    }
    // Focus trap while the menu is open
    if (event.key === 'Tab') {
      const focusables = navMenu.querySelectorAll('a[href]')
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && (document.activeElement === first || document.activeElement === navToggle)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        navToggle.focus()
      }
    }
  }

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true'
    if (expanded) closeMenu()
    else openMenu()
  })

  // Leaving the mobile breakpoint always resets the menu state.
  window.matchMedia('(min-width: 64rem)').addEventListener('change', (event) => {
    if (event.matches && navToggle.getAttribute('aria-expanded') === 'true') closeMenu(false)
  })
}

/* ---------- Reveal on scroll ----------------------------------------------- */
const revealEls = document.querySelectorAll('[data-reveal]')
if (revealEls.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  )
  revealEls.forEach((el) => observer.observe(el))
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'))
}

/* ---------- Footer year ----------------------------------------------------- */
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear())
})

/* ---------- Inquiry form ---------------------------------------------------- */
const form = document.querySelector('[data-inquiry-form]')

if (form) {
  const status = form.querySelector('[data-form-status]')

  /** Map of field name -> human label, used in messages. */
  const labels = {
    name: 'your name',
    email: 'your email address',
    inquiryType: 'the type of inquiry',
    location: 'a city or venue',
  }

  const getErrorSlot = (field) => form.querySelector(`#${CSS.escape(field.id)}-error`)

  const setFieldError = (field, message) => {
    field.setAttribute('aria-invalid', 'true')
    const slot = getErrorSlot(field)
    if (slot) {
      slot.textContent = message
      slot.classList.add('is-visible')
    }
  }

  const clearFieldError = (field) => {
    field.removeAttribute('aria-invalid')
    const slot = getErrorSlot(field)
    if (slot) {
      slot.textContent = ''
      slot.classList.remove('is-visible')
    }
  }

  const validateField = (field) => {
    const value = field.value.trim()
    if (field.required && !value) {
      setFieldError(field, `Please enter ${labels[field.name] || 'this field'}.`)
      return false
    }
    if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setFieldError(field, 'Please enter a valid email address, like name@example.com.')
      return false
    }
    clearFieldError(field)
    return true
  }

  const fields = Array.from(form.querySelectorAll('input, select, textarea'))
  fields.forEach((field) => {
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field)
    })
    field.addEventListener('blur', () => {
      if (field.required && field.value.trim()) validateField(field)
    })
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const results = fields.map((field) => ({ field, valid: validateField(field) }))
    const firstInvalid = results.find((result) => !result.valid)

    if (firstInvalid) {
      if (status) {
        status.hidden = false
        status.className = 'form-status is-error'
        status.textContent = 'A few details are missing or need a second look — they are highlighted above.'
      }
      firstInvalid.field.focus({ preventScroll: false })
      return
    }

    const data = new FormData(form)
    const inquiryType = String(data.get('inquiryType') || 'Bagpipe inquiry')
    const lines = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone') || 'Not provided'}`,
      `Inquiry type: ${inquiryType}`,
      `Event / lesson date: ${data.get('date') || 'Flexible or not yet chosen'}`,
      `Location: ${data.get('location')}`,
      '',
      'Details:',
      String(data.get('details') || 'None provided.'),
    ]

    const mailto =
      `mailto:mountainpiper1@gmail.com` +
      `?subject=${encodeURIComponent(`Mountain Piper inquiry — ${inquiryType}`)}` +
      `&body=${encodeURIComponent(lines.join('\n'))}`

    if (status) {
      status.hidden = false
      status.className = 'form-status is-success'
      status.innerHTML =
        'Thank you — your inquiry is ready in your email app. If it did not open, ' +
        'email <a href="mailto:mountainpiper1@gmail.com">mountainpiper1@gmail.com</a> ' +
        'or call <a href="tel:+18289741719">828.974.1719</a> directly.'
    }
    window.location.href = mailto
  })
}
