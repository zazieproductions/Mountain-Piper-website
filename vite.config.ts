import { defineConfig, loadEnv } from 'vite'
import type { Plugin, PluginOption, UserConfig, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))
// Project site: https://zazieproductions.github.io/Mountain-Piper-website/
const pagesBase = '/Mountain-Piper-website/'

/**
 * Dev-only middleware.
 *
 * `index.html` at the repository root is a build artefact consumed by GitHub
 * Pages, so it cannot be Vite's entry point. This rewrites `/` and
 * `/index.html` to the real source entry (`index.dev.html`) while developing.
 */
function serveDevIndex(): Plugin {
  return {
    name: 'serve-dev-index',
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, _res, next) => {
        const raw = req.url ?? ''
        const pathOnly = raw.split('?')[0]
        if (pathOnly === '/' || pathOnly === '/index.html') {
          const qs = raw.includes('?') ? raw.slice(raw.indexOf('?')) : ''
          req.url = `/index.dev.html${qs}`
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(async ({ mode }): Promise<UserConfig> => {
  const pages = mode === 'pages'
  const plugins: PluginOption[] = [react(), tailwindcss(), serveDevIndex()];
  try {
    // @ts-expect-error Optional preview-only plugin is injected at runtime.
    const m = await import('./.vite-source-tags.js');
    plugins.push(m.sourceTags());
  } catch {
    // The production build does not require source-tag instrumentation.
  }

  const env = loadEnv(mode, process.cwd(), ['VITE_', 'NEXT_PUBLIC_']);
  const processEnvDefines: Record<string, string> = {};
  for (const [key, value] of Object.entries(env)) {
    processEnvDefines[`process.env.${key}`] = JSON.stringify(value);
  }

  return {
    base: pages ? pagesBase : '/',
    plugins,
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    define: processEnvDefines,
    build: {
      rollupOptions: {
        input: path.resolve(rootDir, 'index.dev.html'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      // Accept requests from any origin so the site works behind preview proxies.
      allowedHosts: true,
      hmr: {
        clientPort: 443,
      },
      headers: {
        'X-Frame-Options': 'ALLOWALL',
      },
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
    },
  };
})
