import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'http://localhost:8080',
    viewport: { width: 1600, height: 2500 },
  },

  webServer: {
    command: 'npx http-server ./docs -p 8080',
    port: 8080,
    reuseExistingServer: true,
  },
});