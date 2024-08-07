import { test, expect } from '@playwright/test';

test('Homepage search', async ({ page }) => {
  await page.goto('https://www.gov.uk/');

  // Perform a search on the homepage.
  await expect(page).toHaveTitle('Welcome to GOV.UK');
  await page.getByLabel('Search', { exact: true }).fill('Childcare voucher');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('https://www.gov.uk/search/all?keywords=Childcare+voucher&order=relevance');
});
