import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.gov.uk/search/news-and-communications');
  await expect(page.getByRole('heading', { name: 'News and communications' })).toBeVisible();
});

test('Filtering and categorisation', async ({ page }) => {
  // Confirm the filtering on the news results.
  await page.getByRole('button', { name: 'Topic'}).click();
  await page.getByLabel('Topic', { exact: true}).selectOption('Money');
  await page.getByRole('button', { name: 'Remove filter Money' }).isVisible();
});

