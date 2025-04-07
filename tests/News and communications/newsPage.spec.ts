import { test, expect, Page } from '@playwright/test';

const url = 'https://www.gov.uk/search/news-and-communications';

test.beforeEach(async ({ page }) => {
  await page.goto(url);
  await expect(page.getByRole('heading', { name: 'News and communications' })).toBeVisible();
});

async function topicFilterClick(page: Page) {
  await page.getByRole('button', { name: 'Topic'}).click();
}

test('Filtering and categorisation', async ({ page }) => {
  // Confirm the filtering on the news results.
  await topicFilterClick(page);
  await page.getByLabel('Topic', { exact: true}).selectOption('Money');
  await page.getByRole('button', { name: 'Remove filter Money' }).isVisible();
});

