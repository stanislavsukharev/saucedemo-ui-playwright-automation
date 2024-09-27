const { test, expect } = require('@playwright/test');
const LoginPage = require('../page-objects/LoginPage');

test('User can log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');

  // Ensure user is redirected to the inventory page
  await expect(page).toHaveURL('/inventory.html');
});
