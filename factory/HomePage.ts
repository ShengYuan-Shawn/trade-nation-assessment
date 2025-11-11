export class HomePageLocators {
    static readonly HOME_PAGE = {
        COOKIES_BANNER: "#onetrust-banner-sdk",
        COOKIES_POLICY: "#onetrust-policy-text",
        COOKIES_POLICY_URL: ".ot-cookie-policy-link",
        COOKIES_SETTINGS_BUTTON: "#onetrust-pc-btn-handler",
        COOKIES_ACCEPTED_BUTTON: "#onetrust-accept-btn-handler",
        NAVIGATION_BAR: "[data-testid='header']",
        TRADE_NATION_LOGO: "[data-testid='logo']",
        SIGNUP_LOGIN_BUTTON: ".cc-button-cta",
    } as const;
}

export type HomaPageKey = keyof typeof HomePageLocators.HOME_PAGE;