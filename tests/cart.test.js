const { test, expect } = require('@playwright/test');
const InventoryPage = require('../page-objects/InventoryPage');
const CartPage = require('../page-objects/CartPage');
const LoginPage = require('../page-objects/LoginPage');

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
});

test('User can view cart after adding items', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addFirstProductToCart();
  
  // Open the cart and verify the count
  const cartPage = new CartPage(page);
  await page.click('.shopping_cart_link'); // Assuming this is the cart link
  const cartCount = await cartPage.getCartCount();
  await expect(cartCount).toBe('1');
});
