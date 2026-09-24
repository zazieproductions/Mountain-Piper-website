import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
// Static multi-page (MPA) build: every page is real, crawlable HTML with its
// own title, meta description, canonical URL, and structured data. No client-
// side rendering is required for any content.
const page = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig(async () => {
  const plugins = []
  try {
    // Optional preview-only plugin, injected at runtime by some hosts.
    // Indirect + ignored so the config bundler never statically includes it;
    // if it (or its deps) are absent, we simply build without it.
    const sourceTagsModule = './.vite-source-tags.js'
    // @ts-expect-error Injected module may not exist in this environment.
    const m = await import(/* @vite-ignore */ sourceTagsModule)
    plugins.push(m.sourceTags())
  } catch {
    // The production build does not require source-tag instrumentation.
  }

  return {
    plugins,
    server: {
      host: '0.0.0.0',
      port: 5173,
      // Allow the sandboxed live-preview host to reach the dev server.
      allowedHosts: ['localhost', '127.0.0.1', '.e2b.app'],
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
      allowedHosts: ['localhost', '127.0.0.1', '.e2b.app'],
    },
    build: {
      rollupOptions: {
        input: {
          main: page('./index.html'),
          weddings: page('./weddings/index.html'),
          funeralsMemorials: page('./funerals-memorials/index.html'),
          events: page('./events/index.html'),
          bagpipeLessons: page('./bagpipe-lessons/index.html'),
          about: page('./about/index.html'),
          contact: page('./contact/index.html'),
          notFound: page('./404.html'),
        },
      },
    },
  }
})
