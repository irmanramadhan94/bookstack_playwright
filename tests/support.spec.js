import { test, expect } from '@playwright/test';

test.describe('support', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

test('show detail documentation page', async ({ page }) => {
  await page.getByRole('link', { name: 'Support', exact: true }).click();
  await page.getByRole('link', { name: 'Documentation Get support' }).click();
  await expect(page).toHaveURL('https://www.bookstackapp.com/docs/');
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
    
test('show detail support plans', async ({ page }) => {
  await page.getByRole('link', { name: 'Support', exact: true }).click();
  await page.getByRole('link', { name: 'Our Support Services' }).click();
  await expect(page.locator('h1')).toContainText('Support for BookStack');
  await expect(page.getByRole('main')).toContainText('BookStack support is provided at few different tiers depending on what might suit you or your business. Our official paid support services are provided by HTTP Functions Ltd.');
  await expect(page.getByRole('main')).toContainText('Community Support');
  await expect(page.getByRole('main')).toContainText('Free');
  await expect(page.getByRole('main')).toContainText('Available via GitHub, Discord or Reddit');
  await expect(page.getByRole('main')).toContainText('Open use of documentation and YouTube guidance');
  await expect(page.getByRole('main')).toContainText('No assurance of response, support or resolution');
  await expect(page.getByRole('main')).toContainText('Professional Support Plan');
  await expect(page.getByRole('main')).toContainText('£450 /year');
  await expect(page.getByRole('main')).toContainText('Email / Help-desk based support');
  await expect(page.getByRole('main')).toContainText('Covers installation and updating issues');
  await expect(page.getByRole('main')).toContainText('High priority triage and handling of bug and issue reports');
  await expect(page.getByRole('main')).toContainText('Supports development & maintenance of the open source platform');
  await expect(page.getByRole('main')).toContainText('Enterprise Support Plan');
  await expect(page.getByRole('main')).toContainText('£4,500 /year');
  await expect(page.getByRole('main')).toContainText('Includes everything in the Professional Support Plan');
  await expect(page.getByRole('main')).toContainText('Highest priority handling of support requests');
  await expect(page.getByRole('main')).toContainText('Highest priority handling of support requests');
  await expect(page.getByRole('main')).toContainText('Active assistance for API integrations & platform extension');
  await expect(page.getByRole('main')).toContainText('Feature and road-map discussion with the core project maintainer');
  await expect(page.getByRole('main')).toContainText('Zoom/Teams/Meet/Discord based video support & advice (Up to 10 hours per year)');
  await expect(page.getByRole('main')).toContainText('Proceed »');
  await expect(page.getByRole('main')).toContainText('Already have a support plan? Login to the support portal here');
  await expect(page.getByRole('main')).toContainText('VAT is not included in current pricing although may be chargeable in the future. Full terms and conditions of support services can be found here.');
    });
    

test('show detail danate page', async ({ page }) => {
  await page.getByRole('link', { name: 'Support', exact: true }).click();
  await page.getByRole('link', { name: 'Donate Provide financial' }).click();
  await expect(page.locator('h1')).toContainText('Donate to BookStack');
  await page.getByText('BookStack is Open Source').click();
  await expect(page.getByRole('main')).toContainText('BookStack is Open Source software and the code & platform is provided totally without cost. The project was started as a passion project in free time, but has grown to require a lot of time to maintain the project and support the community. Donations provide financial support to keep time & focus on the project to help ongoing progress & development.');
    });

test('show video on peertube', async ({ page }) => {
  await page.getByRole('link', { name: 'Support', exact: true }).click();
  const newTabPromise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Videos on PeerTube Find our' }).click();
  const newTab = await newTabPromise;
  await newTab.waitForLoadState();
  await newTab.goto('https://foss.video/c/bookstack/videos');
  await expect(newTab.getByRole('link', { name: 'Foss.video', exact: true })).toBeVisible();
});

test('redirect to guide on youtube', async ({ page }) => {
  await page.getByRole('link', { name: 'Support', exact: true }).click();
  const popupPromise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'YouTube', exact: true }).click();
  const popup = await popupPromise;
  await popup.waitForLoadState();
  await expect(popup).toHaveURL('https://www.youtube.com/c/BookStackApp');
  await expect(popup.locator('body')).toContainText('BookStack');
});
    
test('redirect to github issue', async ({ page }) => {
  await page.getByRole('link', { name: 'Support', exact: true }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'GitHub Issues Find or report' }).click();
  const page3 = await page3Promise;
  await expect(page3.locator('#repository-container-header')).toContainText('BookStackApp');
  await expect(page3.getByRole('strong')).toContainText('BookStack');
});
});