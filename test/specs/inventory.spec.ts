import InventoryPage from "../pageobjects/inventory/inventory.page";
import LoginPage from "../pageobjects/login/login.page";
import { TestUser } from "../utils/constants";

describe("Inventory Feature", () => {
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login(TestUser.VALID_USERNAME, TestUser.VALID_PASSWORD);
    await LoginPage.resetAppState();
    await browser.refresh();
  });

  it("TC08: Display products after login", async () => {
    await expect(InventoryPage.pageTitle).toBeDisplayed();
    const items = await InventoryPage.inventoryItems;
    expect(items.length).toBeGreaterThan(0);
  });

  it("TC09: Add item to cart", async () => {
    await InventoryPage.addFirstItemToCart();
  });

  it('TC10: Add multiple items to cart and verify count', async () => {
    await InventoryPage.addItemToCartByIndex(0);
    await InventoryPage.addItemToCartByIndex(1);
    const count = await InventoryPage.getCartCount();
    expect(Number(count)).toBe(2);
  });

  it('TC11: Sort products by price (low to high)', async () => {
      await InventoryPage.sortBy('lohi');
      const prices = await InventoryPage.getAllItemPrices();
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).toEqual(sorted);
  });
});
