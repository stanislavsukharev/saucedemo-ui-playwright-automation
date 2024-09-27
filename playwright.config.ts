import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Test directory
  retries: 1, // Retries for failed tests
  use: {
    baseURL: "https://www.saucedemo.com/",
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Viewport settings
    ignoreHTTPSErrors: true, // Ignore HTTPS errors
    screenshot: 'only-on-failure', // Capture screenshot on failure
    video: 'retain-on-failure', // Capture video on failure
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});
