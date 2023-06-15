import { test, expect } from '@playwright/test';
import { getStorageStatePath } from '../global-setup';

test.use({ storageState: getStorageStatePath('e2e') });

test.beforeEach(async ({ page, baseURL }) => {
  page.goto(`${baseURL}/`);
  page.waitForNavigation();
});

test('has header', async ({ page }) => {
  await page.waitForTimeout(2000);

  await page.locator('a:has-text("Home")').waitFor();
  await page.locator('a:has-text("Follows Page")').waitFor();
  await page.locator('a:has-text("All My Follows")').waitFor();
  await page.locator('button:has-text("Sign out")').waitFor();
});
test('has title', async ({ page }) => {
  await page.locator('h1:has-text("Bench")').waitFor();
  await page.waitForTimeout(2000);
});
test('test type button', async ({ page }) => {
  await page.getByRole('button', { name: 'Deadlift' }).click();
  await page.waitForTimeout(2000);

  await page.locator('h1:has-text("Deadlift")').waitFor();
  await page.getByRole('button', { name: 'Squat' }).click();
  await page.waitForTimeout(2000);

  await page.locator('h1:has-text("Squat")').waitFor();
});
test('test All My Follows Page', async ({ page }) => {
  await page.locator('a:has-text("All My Follows")').click();
  await page.waitForTimeout(2000);
  await page.locator('button:has-text("Follow")').waitFor();
  await page.locator('button:has-text("PAGE")').waitFor();
  await page.locator('button:has-text("REMOVE")').waitFor();
});
