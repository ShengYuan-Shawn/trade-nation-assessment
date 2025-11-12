import { Locator, Page, expect } from "@playwright/test";
import { HomePageLocators } from "../factory/HomePageLocators";

export class HomePage {
  readonly page: Page;
  readonly cookiesBanner: Locator;
  readonly cookiesPolicy: Locator;
  readonly cookiesPolicyURL: Locator;
  readonly cookiesSettingsButton: Locator;
  readonly cookiesAcceptButton: Locator;
  readonly navigationBar: Locator;
  readonly tradeNationLogo: Locator;
  readonly signupLoginButton: Locator;

  private static readonly COOKIES_POLICY_TEXT =
    "We use Cookies to improve your experience on our website. Cookies tell us which parts of the site you visit, help us display relevant ads (on our site and others), and give us insights into your behaviour. See our";

  constructor(page: Page) {
    const Home = HomePageLocators.HOME_PAGE;

    this.page = page;
    this.cookiesBanner = page.locator(Home.COOKIES_BANNER);
    this.cookiesPolicy = page.locator(Home.COOKIES_POLICY);
    this.cookiesPolicyURL = page.locator(Home.COOKIES_POLICY_URL);
    this.cookiesSettingsButton = page.locator(Home.COOKIES_SETTINGS_BUTTON);
    this.cookiesAcceptButton = page.locator(Home.COOKIES_ACCEPTED_BUTTON);
    this.navigationBar = page.locator(Home.NAVIGATION_BAR);
    this.tradeNationLogo = page.locator(Home.TRADE_NATION_LOGO);
    this.signupLoginButton = page.locator(Home.SIGNUP_LOGIN_BUTTON);
  }

  async acceptCookiesIfVisible() {
    if (await this.cookiesBanner.isVisible({ timeout: 10000 })) {
      await expect(
        this.cookiesPolicy,
        "Cookies policy not visible!"
      ).toBeVisible();
      await expect(this.cookiesPolicy).toContainText(
        HomePage.COOKIES_POLICY_TEXT
      );

      await expect(
        this.cookiesPolicyURL,
        "Cookies policy URL not visible!"
      ).toBeVisible();
      await expect(this.cookiesPolicyURL).toContainText("cookie policy");

      await expect(
        this.cookiesSettingsButton,
        "Cookies settings buttons not visible!"
      ).toBeVisible();
      await expect(this.cookiesSettingsButton).toContainText("Cookie settings");

      await expect(
        this.cookiesAcceptButton,
        "Accept all cookies button not visible!"
      ).toBeVisible();
      await expect(this.cookiesAcceptButton).toContainText(
        "Accept all cookies"
      );

      await this.cookiesAcceptButton.click();
      await expect(this.cookiesBanner).not.toBeVisible();
    }
  }

  async clickTradeNationLogo() {
    await expect(this.navigationBar, "Nav-bar not visible!").toBeVisible();
    await expect(this.tradeNationLogo, "Logo not visible!").toBeVisible();

    await Promise.all([
      this.page.waitForURL("https://tradenation.com/", {
        waitUntil: "networkidle",
        timeout: 30000,
      }),
      this.tradeNationLogo.click(),
    ]);

    const currentURL = this.page.url();
    expect(currentURL).toBe("https://tradenation.com/");
  }

  async verifyHomePageTitle() {
    const pageTitle = await this.page.title();
    expect(pageTitle).toContain("Trade Nation – Low-Cost CFD and Forex Broker");

    console.log(`Current Page Title: ${pageTitle}`);
  }

  async clickSignupButton() {
    await expect(this.navigationBar, "Nav-bar not visible!").toBeVisible();
    await expect(
      this.signupLoginButton,
      "Signup / Login button not visible!"
    ).toBeVisible();

    await Promise.all([
      this.page.waitForURL("https://tradenation.com/signup/welcome", {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      }),
      this.signupLoginButton.click(),
    ]);

    const currentURL = this.page.url();
    expect(currentURL).toBe("https://tradenation.com/signup/welcome");
  }
}
