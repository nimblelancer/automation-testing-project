import { $ } from "@wdio/globals";
import BasePage from "../base.page";
import { EMPTY_STRING, SELECTORS } from "../../utils/constants";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
  // Element getter
  public get inputUsername() {
    return $(SELECTORS.LoginPage.usernameInput);
  }

  public get inputPassword() {
    return $(SELECTORS.LoginPage.passwordInput);
  }

  public get btnSubmit() {
    return $(SELECTORS.LoginPage.loginButton);
  }

  public get btnLogout() {
    return $(SELECTORS.Menu.logoutButton);
  }

  public get btnToggle() {
    return $(SELECTORS.Menu.toggleButton);
  }

  public get btnResetAppState(){
    return $(SELECTORS.Menu.resetAppState);
  }

  // Action
  public async login(username: string, password: string) {
    const userNameTask = this.inputUsername.setValue(username);
    const passwordTask = this.inputPassword.setValue(password);
    await Promise.all([userNameTask, passwordTask]);
    await this.btnSubmit.click();
  }

  public async logout() {
    await this.btnToggle.click();
    await browser.pause(500);
    await this.btnLogout.click();
  }

  public async getErrorMessage() {
    return await $(SELECTORS.LoginPage.errorMessage).getText();
  }

  public async resetAppState(){
    await this.btnToggle.click();
    await this.btnResetAppState.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open(EMPTY_STRING);
  }
}

export default new LoginPage();
