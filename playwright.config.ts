import { defineConfig } from '@playwright/test';

const baseURL = 'http://127.0.0.1:5173';

export default defineConfig({
  testDir: './tests',
  use: { baseURL, reducedMotion: 'reduce' },
  webServer: {
    command: 'npm run dev -- --strictPort',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
});
