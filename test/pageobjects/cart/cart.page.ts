import { SELECTORS } from "../../utils/constants";

class CartPage {
  // Element getter
  public get cartLink() {
    return $(SELECTORS.Cart.shoppingCartLink);
  }
  public get cartItems() {
    return $$(SELECTORS.Cart.cartItem);
  }
  public get itemPrices() {
    return $$(SELECTORS.Inventory.itemPrice);
  }

  public get totalPrice() {
    return $(SELECTORS.Cart.totalPrice);
  }

  public get removeButtons() {
    return $$(SELECTORS.Cart.removeButton);
  }

  public get checkoutButton() {
    return $(SELECTORS.Cart.checkoutButton);
  }

  //Action
  public async openCart() {
    await this.cartLink.click();
  }

  public async getCartItemCount() {
    return (await this.cartItems).length;
  }

  public async getItemPrices(): Promise<number[]> {
    const priceElems = await this.itemPrices;
    const prices = [];
    for (const el of priceElems) {
      const text = await el.getText();
      prices.push(parseFloat(text.replace("$", "")));
    }
    return prices;
  }

  public async getTotalPrice(): Promise<number> {
    const text = await this.totalPrice.getText();
    const match = text.match(/\$([\d.]+)/);
    return match ? parseFloat(match[1]) : 0;
  }

  public async removeFirstItem() {
    const buttons = this.removeButtons;
    if ((await buttons.length) > 0) await buttons[0].click();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}

export default new CartPage();
