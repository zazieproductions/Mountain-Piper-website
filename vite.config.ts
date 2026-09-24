import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins = [react(), tailwindcss()];
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

  // Base path the site is served under. GitHub Pages serves this repo at
  // https://zazieproductions.github.io/Mountain-Piper-website/, so the Pages
  // workflow sets VITE_BASE_PATH=/Mountain-Piper-website/ at build time.
  const base = env.VITE_BASE_PATH || '/';

  return {
    base,
    plugins,
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    define: processEnvDefines,
    server: {
      host: '0.0.0.0',
      port: 5173,
      // @ts-ignore - allow all hosts for preview proxy (Vite 7+)
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
  } as any;
})
