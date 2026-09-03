import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',
  
  timeout: 120 * 1000,

  // Timeout za expect() asercije, koliko dugo čeka da se uslov ispuni pre nego što javi fail
  expect: {
    timeout: 30000, // 30 sekundi
  },
  
  use: {
    baseURL: 'https://www.delijebutik.com',

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]

});