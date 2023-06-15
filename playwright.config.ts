import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  globalSetup: require.resolve('./global-setup'),
  reporter: 'html',
  use: {
    headless: false,
    viewport: { width: 1440, height: 960 },
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    baseURL: 'http://localhost:3000',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
