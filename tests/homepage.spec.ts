import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.gov.uk/');

  // Confirm the title of the website.
  await expect(page).toHaveTitle('Welcome to GOV.UK');
});
