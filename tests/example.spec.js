// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Incorrect-Title-To-Fail-Test/);
  // ---> this place ^ should be pointed in the output stream if the test fails <-----------------------------------------------------------
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // ---> this line is pointed incorrectly in the output stream if the test fails while the currentsReport is imported in the playwright.config.js
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
