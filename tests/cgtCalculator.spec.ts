import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.tax.service.gov.uk/calculate-your-capital-gains/resident/properties/disposal-date');

  // Confirm the h1 of the webpage.
  await expect(page).toHaveTitle('When did you sell or give away the property? - Calculate your Capital Gains Tax - GOV.UK');
});
