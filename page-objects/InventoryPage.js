class InventoryPage {
    constructor(page) {
      this.page = page;
      this.firstProduct = '.inventory_item';
      this.cartCount = '.shopping_cart_badge';
      this.menuButton = '#react-burger-menu-btn';
      this.logoutButton = '#logout_sidebar_link';
    }
  
    async isFirstProductVisible() {
      const firstProductLocator = this.page.locator(this.firstProduct).first();
      return await firstProductLocator.isVisible();
    }
  
    async addFirstProductToCart() {
      await this.page.locator(this.firstProduct).first().locator('button').click();
    }
  
    async logout() {
      await this.page.click(this.menuButton);
      await this.page.click(this.logoutButton);
      await this.page.waitForURL('/');
    }
  }
  
  module.exports = InventoryPage;
  