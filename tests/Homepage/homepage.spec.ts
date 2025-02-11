import { test, expect } from '@playwright/test';

test('Homepage assertions', async ({ page }) => {
  await page.goto('https://www.gov.uk/');

  // Confirm the title of the website.
  await expect(page).toHaveTitle('Welcome to GOV.UK');

  //Ensure the search function is visible on the homepage.
  await expect (page.locator('id=search-main-ad39e476')).toBeVisible();
});
