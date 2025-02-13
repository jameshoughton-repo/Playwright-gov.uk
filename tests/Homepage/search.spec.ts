import { test, expect } from '@playwright/test';
 
const searchTerm = 'Childcare voucher'

test.beforeEach('Test setup', async ({ page }) => {
  await page.goto('https://www.gov.uk/');
  await expect(page).toHaveTitle('Welcome to GOV.UK');
  await page.getByLabel('Search', { exact: true }).fill('Childcare voucher');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('https://www.gov.uk/search/all?keywords=Childcare+voucher');
});
