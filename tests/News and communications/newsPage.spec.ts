import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.gov.uk/search/news-and-communications');
  await expect(page.getByRole('heading', { name: 'News and communications' })).toBeVisible();
});

test('Sort by filtering validation', async ({ page }) => {
  // Confirm the date filtering on the news results.
  await page.getByLabel('Sort by').selectOption('updated-oldest');
  await expect(page.getByText('June 1995')).toBeVisible();
});

