import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://vehicleenquiry.service.gov.uk/');
  await expect(page.getByLabel('Registration number (number')).toBeVisible;
});

test('Vehicle search, invalid registration', async ({ page }) => {
  // Enter the registration of a vehicle.
  await page.getByLabel('Registration number (number').fill('ABC123');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('heading', { name: 'Vehicle details could not be' })).toBeVisible
});

test('Vehicle search, field validation', async ({ page }) => {
  // Confirm empty field validation.
  await page.getByLabel('Registration number (number').fill('');
  await page.getByRole('button', { name: 'Continue' }).click();
  expect(page.getByText('Error:Provide the vehicle')).toBeVisible;
});

test('Vehicle search, valid registration', async ({ page }) => {
  // Confirm happy path of valid regisration vehicle.
  await page.getByLabel('Registration number (number').fill('KR24 XUV');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Yes').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page).toHaveURL('https://vehicleenquiry.service.gov.uk/VehicleFound?locale=en');
});

