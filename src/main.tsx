import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { publicAsset } from './publicAsset.ts'

// GitHub Pages serves /index.html without rewriting the URL. Strip it so the
// router matches "/" instead of rendering nothing or the 404 route.
if (window.location.pathname.endsWith('/index.html')) {
  const next = window.location.pathname.replace(/index\.html$/, '')
  window.history.replaceState(null, '', `${next}${window.location.search}${window.location.hash}`)
}

document.documentElement.style.setProperty(
  '--contact-photo',
  `url("${publicAsset('images/kit-rashid-stone-steps-800.webp')}")`,
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
