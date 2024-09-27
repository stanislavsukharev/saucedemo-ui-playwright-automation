const { test, expect } = require('@playwright/test');
const InventoryPage = require('../page-objects/InventoryPage');
const CartPage = require('../page-objects/CartPage');
const LoginPage = require('../page-objects/LoginPage');

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
});

test('Check inventory page after login', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const isVisible = await inventoryPage.isFirstProductVisible();
  await expect(isVisible).toBe(true);
});

test('Add item to cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addFirstProductToCart();
  
  // Verify the cart count reflects 1 item
  const cartPage = new CartPage(page);
  const cartCount = await cartPage.getCartCount();
  await expect(cartCount).toBe('1');
});
