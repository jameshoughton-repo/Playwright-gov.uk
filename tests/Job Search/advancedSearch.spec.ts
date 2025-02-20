import { test, expect } from '@playwright/test';

test.describe('Advanced Job Search Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://findajob.dwp.gov.uk/advanced-search');
    });

    test('should have correct page title', async ({ page }) => {
        await expect(page).toHaveTitle(/Advanced Job Search/);
    });

    test('should display all fields', async ({ page }) => {
        await expect(page.getByPlaceholder('use spaces to separate words')).toBeVisible();
        await expect(page.getByLabel('Salary from')).toBeVisible();
        await expect(page.getByPlaceholder('city, county or postcode')).toBeVisible();
    });

});
