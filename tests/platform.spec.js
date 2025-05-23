import { test, expect } from '@playwright/test';

test.describe('Platform', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('show detail features', async ({ page }) => {
  await page.getByRole('link', { name: 'Platform' }).click();
  await page.getByRole('link', { name: 'Features An overview of the' }).click();
  await expect(page.locator('#features')).toContainText('Features');
  await expect(page.locator('#content')).toContainText('Free & Open Source');
  await expect(page.locator('#content')).toContainText('Easy, Simple Interface');
  await expect(page.locator('#content')).toContainText('Searchable and Connected The content in BookStack is fully searchable. You are able to search at book level or across all books, chapters & pages. The ability to link directly to any paragraph allows you to keep your documentation connected.');
  await expect(page.locator('#content')).toContainText('Searchable and Connected');
  await expect(page.locator('#content')).toContainText('Configurable');
  await expect(page.locator('#content')).toContainText('Simple Requirements');
  await expect(page.locator('#content')).toContainText('Built-In diagrams.net');
  await expect(page.locator('#content')).toContainText('Multi-Lingual');
  await expect(page.locator('#content')).toContainText('Optional Markdown Editor');
  await expect(page.locator('#content')).toContainText('Integrated Authentication');
  await expect(page.locator('#content')).toContainText('Powerful Features');
  await expect(page.locator('#content')).toContainText('Multi-Factor Authentication');
  await expect(page.locator('#content')).toContainText('Dark & Light Modes');

    });
  
  test('show detail demo', async ({ page }) => {
  await page.getByRole('link', { name: 'Platform' }).click();
  await page.getByRole('link', { name: 'Demo Give BookStack a test' }).click();
  await expect(page.locator('#demo')).toContainText('Try Out BookStack');
  await expect(page.locator('#content')).toContainText('You can try out BookStack right now by using the given details. The demo database & image storage is automatically reset every half hour. Most standard actions are available using the provided admin login but some actions, listed below, have been restricted to keep the demo instance open & available. That said, all options & actions are at least visible to the demo admin user.');
  await expect(page.locator('#content')).toContainText('Actions Restricted In Demo User deletion User updates Setting updates');
  await expect(page.getByText('Demo site url')).toBeVisible();
  await expect(page.locator('#content')).toContainText('https://demo.bookstackapp.com');
  await expect(page.locator('#content')).toContainText('Admin email');
  await expect(page.locator('#content')).toContainText('Admin password');
  await expect(page.getByRole('textbox', { name: 'Admin email' })).toHaveValue('admin@example.com');
  await expect(page.getByRole('textbox', { name: 'Admin password' })).toHaveValue('password');
  await expect(page.locator('#content')).toContainText('Open demo site');
  await expect(page.getByRole('link', { name: 'Open demo site' })).toBeVisible();
  });

  test('show documentation', async ({ page }) => {
  await page.getByRole('link', { name: 'Platform' }).click();
  await page.getByRole('link', { name: 'Documentation Guidance for' }).click();
  await expect(page.locator('#content')).toContainText('Admin Documentation');
  await expect(page.locator('#content')).toContainText('Setup');
  await expect(page.locator('#content')).toContainText('Installation');
  await expect(page.locator('#content')).toContainText('Security');
  await expect(page.locator('#content')).toContainText('Subdirectory Setup');
  await expect(page.locator('#content')).toContainText('Multiple Instances');
  await expect(page.locator('#content')).toContainText('Content Storage Format');
  await expect(page.locator('#content')).toContainText('Maintenance');
  await expect(page.locator('#content')).toContainText('Updates');
  await expect(page.locator('#content')).toContainText('Commands');
  await expect(page.locator('#content')).toContainText('Backup & Restore');
  await expect(page.locator('#content')).toContainText('Debugging');
  await expect(page.locator('#content')).toContainText('System CLI');
  await expect(page.locator('#content')).toContainText('Filesystem Permissions');
  await expect(page.locator('#content')).toContainText('Authentication');
  await expect(page.locator('#content')).toContainText('OpenID Connect');
  await expect(page.locator('#content')).toContainText('SAML 2.0');
  await expect(page.locator('#content')).toContainText('LDAP');
  await expect(page.locator('#content')).toContainText('Third Party & Social');
  await expect(page.locator('#content')).toContainText('Configuration');
  await expect(page.locator('#content')).toContainText('Email & Webhooks');
  await expect(page.locator('#content')).toContainText('Visual Customisation');
  await expect(page.locator('#content')).toContainText('Language & Locale');
  await expect(page.locator('#content')).toContainText('File Uploads');
  await expect(page.locator('#content')).toContainText('Caching & Sessions');
  await expect(page.locator('#content')).toContainText('PDF Rendering');
  await expect(page.locator('#content')).toContainText('UTF8mb4/Emoji Support');
  await expect(page.locator('#content')).toContainText('Hacking BookStack');
  await expect(page.locator('#content')).toContainText('Other Configuration');
  await expect(page.getByRole('heading', { name: 'User Documentation' })).toBeVisible();
  await expect(page.locator('#content')).toContainText('Getting Started');
  await expect(page.locator('#content')).toContainText('Content Overview');
  await expect(page.locator('#content')).toContainText('Organising Content');
  await expect(page.locator('#content')).toContainText('Getting Around');
  await expect(page.locator('#content')).toContainText('Common Functions');
  await expect(page.locator('#content')).toContainText('Searching Content');
  await expect(page.locator('#content')).toContainText('Default (WYSIWYG) Editor');
  await expect(page.locator('#content')).toContainText('Markdown Editor');
  await expect(page.locator('#content')).toContainText('Attachments');
  await expect(page.locator('#content')).toContainText('Drawings & Diagrams');
  await expect(page.locator('#content')).toContainText('Exporting & Importing');
  await expect(page.locator('#content')).toContainText('Advanced Features');
  await expect(page.locator('#content')).toContainText('Content Tags');
  await expect(page.locator('#content')).toContainText('Page Templates');
  await expect(page.locator('#content')).toContainText('Roles & Permissions');
  await expect(page.locator('#content')).toContainText('Reusing Page Content');
  await expect(page.locator('#content')).toContainText('Page Permalinks');
  });

  test('show blog', async ({ page }) => {
  await page.getByRole('link', { name: 'Platform' }).click();
  await page.getByRole('link', { name: 'Our Blog Get the latest' }).click();
  await expect(page).toHaveURL('https://www.bookstackapp.com/blog/');
  await expect(page.locator('h1')).toContainText('BookStack Blog');
  });


  test('show detail bookStack hacks', async ({ page }) => {
  await page.getByRole('link', { name: 'Platform' }).click();
  await page.getByRole('link', { name: 'Hacks Unsupported hacks that' }).click();
  await expect(page).toHaveURL('https://www.bookstackapp.com/hacks/');
  await expect(page.locator('h1')).toContainText('BookStack Hacks');
});
});
