import { test, expect } from '@playwright/test';
import assert from 'assert';

test('Vehicle search', async ({ page }) => {
  await page.goto('https://vehicleenquiry.service.gov.uk/');
  // Enter the registration of a vehicle.
  await page.getByLabel('Registration number (number').fill('ABC123');
  await page.getByRole('button', { name: 'Continue' }).click();
});
