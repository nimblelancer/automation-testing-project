import { SELECTORS } from "../../utils/constants";

class CheckoutOverviewPage {

  // Element getter
  public get finishButton() {
    return $(SELECTORS.Checkout.finishButton);
  }
  public get confirmationMsg() {
    return $(SELECTORS.Checkout.completeHeader);
  }

  public get continueShoppingButton(){
    return $(SELECTORS.Checkout.continueShoppingButton)
  }

  // Action
  public async finishCheckout() {
    await this.finishButton.click();
  }

  public async isConfirmationDisplayed() {
    return this.confirmationMsg.waitForDisplayed();
  }
}

export default new CheckoutOverviewPage();
