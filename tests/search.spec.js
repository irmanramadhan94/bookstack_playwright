import { test, expect } from '@playwright/test';


test.describe('Search', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('search book available', async ({ page }) => {
    await page.getByRole('searchbox', { name: 'Search site' }).click();
    await page.getByRole('searchbox', { name: 'Search site' }).fill('hacking bookstack');
    await page.getByRole('link', { name: 'Hacking BookStack' }).click();
    await expect(page).toHaveURL('https://www.bookstackapp.com/docs/admin/hacking-bookstack/');
    await expect(page.locator('#content')).toContainText('Admin Documentation');
    await expect(page.locator('h1')).toContainText('Hacking BookStack');
    });

     test('search book not available', async ({ page }) => {
    await page.getByRole('searchbox', { name: 'Search site' }).click();
    await page.getByRole('searchbox', { name: 'Search site' }).fill('lorem ipsum dolor sit amet');
    await page.getByRole('searchbox', { name: 'Search site' }).fill('1212312312');
    await page.getByRole('searchbox', { name: 'Search site' }).press('Enter');
    await expect(page.locator('body')).toContainText('No results found');
    });
});