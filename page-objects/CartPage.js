class CartPage {
    constructor(page) {
      this.page = page;
      this.cartCount = '.shopping_cart_badge';
    }
  
    async getCartCount() {
      return await this.page.locator(this.cartCount).innerText();
    }
  }
  
  module.exports = CartPage;
  