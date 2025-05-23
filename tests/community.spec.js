import { test, expect } from '@playwright/test';

test.describe('Community', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('');
    });
test('redirect to github project', async ({ page }) => {
  await page.getByRole('link', { name: 'Community', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'GitHub Star the project on' }).click();
  const page1 = await page1Promise;
  await page1.waitForLoadState();
  await expect(page1.locator('#repository-container-header')).toContainText('BookStackApp');
  await expect(page1.locator('#repository-container-header')).toContainText('BookStack');
    });

test('redirect to codeberg page', async ({ page }) => {
  await page.getByRole('link', { name: 'Community', exact: true }).click();
  await page.goto('https://www.bookstackapp.com/');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Codeberg Watch development' }).click();
  const page2 = await page2Promise;
  await page2.waitForLoadState();
  await expect(page2.locator('#org-info')).toContainText('BookStack');
  await expect(page2.locator('#org-info')).toContainText('https://www.bookstackapp.com/');
});
test('redirect to discord page', async ({ page }) => {
  await page.getByRole('link', { name: 'Community', exact: true }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Discord Chat with the' }).click();
  const page3 = await page3Promise;
  await page3.waitForLoadState();
  await expect(page3.locator('form')).toContainText('BookStackApp');
 
});
test('redirect to mastodon page', async ({ page }) => {
  await page.getByRole('link', { name: 'Community', exact: true }).click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Mastodon Follow the project' }).click();
  const page4 = await page4Promise;
  await page4.waitForLoadState();
  await expect(page4.getByRole('img')).toContainText('Mastodon');
    });

test('redirect to youtube channel', async ({ page }) => {
  await page.getByRole('link', { name: 'Community', exact: true }).click();
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'YouTube Watch and comment on' }).click();
  const page5 = await page5Promise;
  await page5.waitForLoadState();
  await expect(page5.locator('yt-dynamic-text-view-model')).toContainText('BookStack');
    });

test('go to blog page', async ({ page }) => { 
  await page.getByRole('link', { name: 'Community', exact: true }).click();
  await page.getByRole('link', { name: 'Our Blog Keep up with the' }).click();
  await expect(page.locator('h1')).toContainText('BookStack Blog');
   });
});