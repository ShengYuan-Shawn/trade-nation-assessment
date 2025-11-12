export class HomePageLocators {
  static readonly HOME_PAGE = {
    COOKIES_BANNER: "#onetrust-banner-sdk",
    COOKIES_POLICY: "#onetrust-policy-text",
    COOKIES_POLICY_URL: ".ot-cookie-policy-link",
    COOKIES_SETTINGS_BUTTON: "#onetrust-pc-btn-handler",
    COOKIES_ACCEPTED_BUTTON: "#onetrust-accept-btn-handler",
    NAVIGATION_BAR: "[data-testid='header']",
    TRADE_NATION_LOGO: "[data-testid='logo']",
    SIGNUP_LOGIN_BUTTON:
      "//div[contains(@class, 'e1fz6aqz14')]/following-sibling::a[contains(@id, 'cc-button-cta')]",
  } as const;
}
