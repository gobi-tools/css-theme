import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // workers: 16,
  fullyParallel: false,

  use: {
    baseURL: 'http://localhost:8080',
  },

  projects: [
    {
      name: 'desktop',
      use: {
        viewport: { width: 1280, height: 800 },
      },
    },
    {
      name: 'mobile',
      use: {
        viewport: { width: 375, height: 800 },
      },
    },
  ],

  webServer: {
    command: 'npx http-server ./docs -p 8080',
    port: 8080,
    reuseExistingServer: true,
  },
});