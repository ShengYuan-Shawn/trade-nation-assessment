import { Locator, Page, expect } from "@playwright/test";
import { LoginPageLocators } from "../factory/LoginPageLocators";
import { faker } from "@faker-js/faker";

export class LoginPage {
  readonly page: Page;
  readonly tradeNationLogo: Locator;
  readonly languageDropdown: Locator;
  readonly signupText: Locator;
  readonly orText: Locator;
  readonly loginText: Locator;
  readonly alreadyHaveAnAccountText: Locator;
  readonly loginHereLink: Locator;
  readonly loginToYourAccountText: Locator;
  readonly dontHaveAnAccountText: Locator;
  readonly signupLink: Locator;
  readonly socialLoginGoogle: Locator;
  readonly googleHeadingText: Locator;
  readonly googleEmailInput: Locator;
  readonly emailNextButton: Locator;
  readonly googlePasswordInput: Locator;
  readonly passwordNextButton: Locator;
  readonly invalidPasswordError: Locator;

  private static readonly INVALID_PASSWORD_ERROR =
    'Wrong password. Try again or click "Forgot password?" for more options.';

  constructor(page: Page) {
    const Login = LoginPageLocators.LOGIN_PAGE;

    this.page = page;
    this.tradeNationLogo = page.locator(Login.TRADE_NATION_LOGO);
    this.languageDropdown = page.locator(Login.LANGUAGE_DROPDOWN);
    this.signupText = page.locator(Login.SIGN_UP_TEXT);
    this.orText = page.locator(Login.OR_TEXT);
    this.loginText = page.locator(Login.LOGIN_TEXT);
    this.alreadyHaveAnAccountText = page.locator(
      Login.ALREADY_HAVE_AN_ACCOUNT_TEXT
    );
    this.loginHereLink = page.locator(Login.LOGIN_HERE_LINK);
    this.loginToYourAccountText = page.locator(
      Login.LOGIN_TO_YOUR_ACCOUNT_TEXT
    );
    this.dontHaveAnAccountText = page.locator(Login.DONT_HAVE_AN_ACCOUNT_TEXT);
    this.signupLink = page.locator(Login.SIGNUP_LINK);
    this.socialLoginGoogle = page.locator(Login.SOCIAL_LOGIN_GOOGLE);
    this.googleHeadingText = page.locator(Login.GOOGLE_HEADING_TEXT);
    this.googleEmailInput = page.locator(Login.GOOGLE_EMAIL_FIELD);
    this.emailNextButton = page.locator(Login.EMAIL_NEXT_BUTTON);
    this.googlePasswordInput = page.locator(Login.GOOGLE_PASSWORD_FIELD);
    this.passwordNextButton = page.locator(Login.PASSWORD_NEXT_BUTTON);
    this.invalidPasswordError = page.locator(Login.INVALID_PASSWORD_MESSAGE);
  }

  async verifySignupPage() {
    await expect(this.tradeNationLogo).toBeVisible();
    await expect(this.languageDropdown).toBeVisible();

    await expect(this.signupText).toBeVisible();
    await expect(this.orText).toBeVisible();
    await expect(this.loginText).toBeVisible();
  }

  async clickLoginHere() {
    await expect(this.alreadyHaveAnAccountText).toBeVisible();
    await expect(this.alreadyHaveAnAccountText).toContainText(
      "Already have an account?"
    );

    await expect(this.loginHereLink).toBeVisible();
    await expect(this.loginHereLink).toContainText("Log in here");

    await Promise.all([
      this.page.waitForURL("https://tradenation.com/login", {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      }),
      this.loginHereLink.click(),
    ]);

    const currentURL = this.page.url();
    expect(currentURL).toBe("https://tradenation.com/login");
  }

  async verifyLoginPage() {
    await expect(this.loginToYourAccountText).toBeVisible();
    await expect(this.dontHaveAnAccountText).toBeVisible();
    await expect(this.signupLink).toBeVisible();
  }

  async loginWithGoogle(email: string) {
    await expect(this.socialLoginGoogle).toBeVisible();
    await expect(this.socialLoginGoogle).toContainText("Log in with Google");

    await this.socialLoginGoogle.click();
    await this.page.waitForLoadState("domcontentloaded", { timeout: 30000 });

    await expect(this.googleHeadingText).toBeVisible();
    await expect(this.googleHeadingText).toContainText("Sign in");

    this.inputEmail(email);

    await expect(this.emailNextButton).toBeVisible();
    await expect(this.emailNextButton).toContainText("Next");

    await this.emailNextButton.click();
    await this.page.waitForLoadState("domcontentloaded", { timeout: 30000 });

    await this.page.waitForTimeout(10000);
    
    await expect(this.googleHeadingText).toBeVisible();
    await expect(this.googleHeadingText).toContainText("Welcome");

    // Login With Dummy Password
    this.inputPassword(faker.internet.password({ length: 8 }));

    await expect(this.passwordNextButton).toBeVisible();
    await expect(this.passwordNextButton).toContainText("Next");

    await this.passwordNextButton.click();
    await this.page.waitForLoadState("domcontentloaded", { timeout: 30000 });

    await expect(this.invalidPasswordError).toBeVisible();
    await expect(this.invalidPasswordError).toContainText(
      LoginPage.INVALID_PASSWORD_ERROR
    );
  }

  private async inputEmail(email: string) {
    await expect(this.googleEmailInput).toBeVisible();
    await this.googleEmailInput.fill(email);
  }

  private async inputPassword(password: string) {
    await expect(this.googlePasswordInput).toBeVisible();
    await this.googlePasswordInput.fill(password);
  }
}
