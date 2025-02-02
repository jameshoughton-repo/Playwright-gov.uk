import { test, expect } from '@playwright/test';

test('Contact us scenarios', async ({ page }) => {
  await page.goto('https://www.gov.uk/contact/govuk');
  await page.getByLabel('Your name').click();
  await page.getByLabel('Your name').fill('Test');
  await page.getByLabel('Your email address').click();
  await page.getByLabel('Your email address').fill('Test@test.com');
  await page.getByRole('button', { name: 'Send message' }).click();
  await expect(page.getByTitle('Please check the form')).toBeVisible;
});
