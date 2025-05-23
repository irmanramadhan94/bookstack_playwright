import { test, expect } from '@playwright/test';

test.describe('github, demo, install', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

test('redirect to github', async ({ page }) => {
  await page.getByRole('link', { name: 'GitHub', exact: true }).click();
  await expect(page.locator('#repository-container-header')).toContainText('BookStackApp');
  await expect(page.locator('#repository-container-header')).toContainText('BookStack');
});

test('show detail bookStack demo', async ({ page }) => {
  await page.goto('https://www.bookstackapp.com/');
  await page.getByRole('link', { name: 'Demo', exact: true }).click();
  await expect(page.locator('#header')).toContainText('BookStack Demo');
  await expect(page.getByRole('navigation')).toContainText('Shelves');
  await expect(page.getByRole('navigation')).toContainText('Books');
  await expect(page.getByRole('navigation')).toContainText('Log in');
  await expect(page.locator('#main-content')).toContainText('Toggle Details');
});

test('show detail bookStack install', async ({ page }) => {
  await page.getByRole('link', { name: 'Install' }).click();
  await expect(page.locator('#content')).toContainText('Admin Documentation');
  await expect(page.locator('h1')).toContainText('Installation');
});
});