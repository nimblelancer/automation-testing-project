import { SELECTORS, Env } from "../../utils/constants";

class InventoryPage {
  // Element getter
  public get pageTitle() {
    return $(SELECTORS.Inventory.inventoryTitle);
  }

  public get inventoryItems() {
    return $$(SELECTORS.Inventory.inventoryItem);
  }

  public get addToCartButtons() {
    return $$(SELECTORS.Inventory.addToCartButton);
  }

  public get sortDropdown() {
    return $(SELECTORS.Inventory.sortDropdown);
  }

  public get cartBadge() {
    return $(SELECTORS.Inventory.cartBadge);
  }

  public get itemPrices() {
    return $$(SELECTORS.Inventory.itemPrice);
  }

  // Action
  public async isLoaded() {
    return this.pageTitle.waitForDisplayed({ timeout: Env.SHORT_TIMEOUT });
  }

  public async addFirstItemToCart() {
    await this.addToCartButtons[0].click();
  }

  public async addItemToCartByIndex(index: number) {
    const buttons = await $$(SELECTORS.Inventory.addItemButton);
    if (buttons[index]) await buttons[index].click();
  }

  public async getCartCount(): Promise<string> {
    return await this.cartBadge.getText();
  }

  public async sortBy(value: string) {
    await this.sortDropdown.selectByAttribute("value", value);
  }

  public async getAllItemPrices(): Promise<number[]> {
    const priceElements = await this.itemPrices;
    const prices = [];
    for (const element of priceElements) {
      const text = await element.getText();
      prices.push(parseFloat(text.replace("$", "")));
    }
    return prices;
  }
}

export default new InventoryPage();
