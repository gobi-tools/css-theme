import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  workers: 16,
  fullyParallel: true,

  use: {
    baseURL: 'http://localhost:8080',
  },

  projects: [
    {
      name: 'desktop',
      use: {
        viewport: { width: 1280, height: 3000 },
      },
    },
    {
      name: 'tablet',
      use: {
        viewport: { width: 768, height: 4000 },
      },
    },
    {
      name: 'mobile',
      use: {
        viewport: { width: 375, height: 4500 },
      },
    },
  ],

  webServer: {
    command: 'npx http-server ./docs -p 8080',
    port: 8080,
    reuseExistingServer: true,
  },
});