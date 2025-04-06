import { test, expect } from '@playwright/test';

test.describe('GOV.UK Search Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.gov.uk/search/all?keywords=');
  });

  test('should navigate to search page', async ({ page }) => {
    expect(page.url()).toBe('https://www.gov.uk/search/all?keywords=');
    expect(await page.title()).toBe('Search - GOV.UK');
  });

  test('should display search input field', async ({ page }) => {
    const searchInput = await page.$('input[name="keywords"]');
    expect(searchInput).not.toBeNull();
  });

  test('should display search button', async ({ page }) => {
    const searchButton = await page.$('button[type="submit"]');
    expect(searchButton).not.toBeNull();
  });
})