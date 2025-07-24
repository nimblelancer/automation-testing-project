import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login/login.page'
import { Env, Messages, Routes, TestUser } from '../utils/constants'

describe('Login Feature', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });

    it('TC01: Valid Login', async () => {
        await LoginPage.login(TestUser.VALID_USERNAME, TestUser.VALID_PASSWORD)
        const url = await browser.getUrl();
        expect(url).toContain(Routes.INVENTORY);
    });

    it('TC02: Invalid Username Login', async () => {
        await LoginPage.login(TestUser.INVALID_USERNAME, TestUser.VALID_PASSWORD)
        const errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).toContain(Messages.LOGIN_FAILED);
    });

    it('TC03: Invalid Password Login', async () => {
        await LoginPage.login(TestUser.VALID_USERNAME, TestUser.INVALID_PASSWORD)
        const errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).toContain(Messages.LOGIN_FAILED);
    });

    it('TC04: Locked Out User', async () => {
        await LoginPage.login(TestUser.LOCKED_OUT_USERNAME, TestUser.VALID_PASSWORD)
        const errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).toContain(Messages.LOCKED_OUT_USER);
    });

    it('TC05: Should logout successfully and redirect to login page', async () => {
        await LoginPage.login(TestUser.VALID_USERNAME, TestUser.VALID_PASSWORD);
        const url = await browser.getUrl();
        expect(url).toContain(Routes.INVENTORY);

        await LoginPage.logout();
        const url_logged = await browser.getUrl();
        expect(url_logged).toEqual(Env.BASE_URL);
    });

    // Retry Test
    it('TC06: Retry Login If It Fails', async function () {
        this.retries(2);
        await LoginPage.login(TestUser.INVALID_USERNAME, TestUser.VALID_PASSWORD)
        const errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).toContain(Messages.LOGIN_FAILED);
    });

    it('TC07: Verify login page UI elements', async () => {
        await expect(await LoginPage.inputUsername).toBeDisplayed();
        await expect(await LoginPage.inputPassword).toBeDisplayed();
        await expect(await LoginPage.btnSubmit).toBeClickable();
    });

})


