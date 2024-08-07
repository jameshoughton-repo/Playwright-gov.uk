import { test, expect } from '@playwright/test';
import assert from 'assert';

test('Vehicle search, invalid registration', async ({ page }) => {
  await page.goto('https://vehicleenquiry.service.gov.uk/');
  // Enter the registration of a vehicle.
  await page.getByLabel('Registration number (number').fill('ABC123');
  await page.getByRole('button', { name: 'Continue' }).click();
});

test('Vehicle search, field validation', async ({ page }) => {
  await page.goto('https://vehicleenquiry.service.gov.uk/');
  // Confirm empty field validation.
  await page.getByLabel('Registration number (number').fill('');
  await page.getByRole('button', { name: 'Continue' }).click();
  expect(page.getByText('Error:Provide the vehicle')).toBeVisible;
});

test('Vehicle search, valid registration', async ({ page }) => {
  await page.goto('https://vehicleenquiry.service.gov.uk/');
  // Confirm happy path of valid regisration vehicle.
  await page.getByLabel('Registration number (number').fill('KR24 XUV');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Yes').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page).toHaveURL('https://vehicleenquiry.service.gov.uk/VehicleFound?locale=en');
});
