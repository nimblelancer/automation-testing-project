import CartPage from "../pageobjects/cart/cart.page";
import InventoryPage from "../pageobjects/inventory/inventory.page";
import LoginPage from "../pageobjects/login/login.page";
import { Routes, TestUser } from "../utils/constants";

describe("Cart Feature", () => {
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login(TestUser.VALID_USERNAME, TestUser.VALID_PASSWORD);
    await InventoryPage.addFirstItemToCart();
    await browser.refresh();
  });

  it("TC12: Verify cart item after adding product", async () => {
    await CartPage.openCart();
    const count = await CartPage.getCartItemCount();
    expect(count).toBeGreaterThan(0);
  });

  // Pending Test
  it("TC13: Verify total price in cart");

  it("TC14: Remove item from cart and verify it is removed", async () => {
    await InventoryPage.addFirstItemToCart();
    await CartPage.openCart();
    const initialCount = await CartPage.getCartItemCount();
    await CartPage.removeFirstItem();
    const updatedCount = await CartPage.getCartItemCount();
    expect(updatedCount).toBe(initialCount - 1);
  });

  it("TC15: Navigate from cart to checkout", async () => {
    await CartPage.openCart();
    await CartPage.clickCheckout();
    const url = await browser.getUrl();
    expect(url).toContain(Routes.CHECKOUT);
  });
});
