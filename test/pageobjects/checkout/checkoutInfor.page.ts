import { SELECTORS } from "../../utils/constants";

class CheckoutInfoPage {

  // Element getter
  public get firstName() {
    return $(SELECTORS.Checkout.firstnameInput);
  }
  public get lastName() {
    return $(SELECTORS.Checkout.lastnameInput);
  }
  public get postalCode() {
    return $(SELECTORS.Checkout.postalCodeInput);
  }
  public get continueButton() {
    return $(SELECTORS.Checkout.continueButton);
  }
  public get cancelButton() {
    return $(SELECTORS.Checkout.cancelButton);
  }
  public get errorMessage() {
    return $(SELECTORS.Checkout.errorMessage);
  }

  // Action
  public async fillInfo(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.postalCode.setValue(postalCode);
    await this.continueButton.click();
  }

  public async cancelCheckout() {
    await this.cancelButton.click();
  }

  public async getErrorMessage(): Promise<string> {
    return await this.errorMessage.getText();
  }
}

export default new CheckoutInfoPage();
