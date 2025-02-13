import { test, expect } from '@playwright/test';
 
const searchTerm = "Childcare voucher"


test.beforeEach('Test setup', async ({ page }) => {
  await page.goto('https://www.gov.uk/');
  await expect(page).toHaveTitle('Welcome to GOV.UK');
});

test('Valid keyword search', async ({ page }) => {
  // Perform a search on the homepage.
  await page.getByLabel('Search', { exact: true }).fill(searchTerm);
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('https://www.gov.uk/search/all?keywords=Childcare+voucher');
});

test('Empty keyword search', async ({ page }) => {
  // Perform an empty search on the homepage.
  await page.getByLabel('Search', { exact: true }).fill('');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('https://www.gov.uk/search/all?keywords=');
});

test('Pagination check', async ({ page }) => {
  // Ensure the search pagenation is visible on the page.
  await page.getByLabel('Search', { exact: true }).fill(searchTerm);
  await page.keyboard.press('Enter');
  await page.getByLabel('Pagination').click();
  await expect(page).toHaveURL('https://www.gov.uk/search/all?keywords=Childcare+voucher&page=2');
});
