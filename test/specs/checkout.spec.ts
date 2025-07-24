import CartPage from "../pageobjects/cart/cart.page";
import InventoryPage from "../pageobjects/inventory/inventory.page";
import LoginPage from "../pageobjects/login/login.page";
import CheckoutInforPage from "../pageobjects/checkout/checkoutInfor.page";
import CheckoutOverviewPage from "../pageobjects/checkout/checkoutOveriew.page";
import { Messages, Routes, TestUser } from "../utils/constants";


describe('Checkout Feature', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login(TestUser.VALID_USERNAME, TestUser.VALID_PASSWORD);
        await InventoryPage.addFirstItemToCart();
        await CartPage.openCart();
        await CartPage.clickCheckout();
    });

    it('TC16: Checkout with valid information', async () => {
        await CheckoutInforPage.fillInfo(TestUser.FIRST_NAME, TestUser.LAST_NAME, TestUser.POSTAL_CODE);
        await CheckoutOverviewPage.finishCheckout();
        const confirmationMsg = await CheckoutOverviewPage.confirmationMsg.getText();
        await expect(confirmationMsg).toContain(Messages.CHECKOUT_SUCCESS);
    });

    it('TC17: Missing checkout info shows error', async () => {
        await CheckoutInforPage.fillInfo(TestUser.EMPTY, TestUser.LAST_NAME, TestUser.POSTAL_CODE);
        const errorMsg = await CheckoutInforPage.getErrorMessage();
        expect(errorMsg).toContain(Messages.FIRST_NAME_REQUIRED);
    });

    it('TC18: Cancel checkout and return to inventory', async () => {
        await CheckoutInforPage.cancelCheckout();
        await CheckoutOverviewPage.continueShoppingButton.click();
        const url = await browser.getUrl();
        expect(url).toContain(Routes.INVENTORY);
    });

    it('TC19: Verify order complete page content', async () => {
        await CheckoutInforPage.fillInfo(TestUser.FIRST_NAME, TestUser.LAST_NAME, TestUser.POSTAL_CODE);
        await CheckoutOverviewPage.finishCheckout();
        const thankYou = await CheckoutOverviewPage.confirmationMsg.getText();
        expect(thankYou).toContain(Messages.CHECKOUT_SUCCESS);
    });
});
