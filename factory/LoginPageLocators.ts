export class LoginPageLocators {
  static readonly LOGIN_PAGE = {
    TRADE_NATION_LOGO: ".css-91y5a",
    LANGUAGE_DROPDOWN: ".css-1ihxa0f",
    SIGN_UP_TEXT: ".css-1shz266",
    OR_TEXT: ".css-haou7p",
    LOGIN_TEXT: ".css-1gvu3z1",
    ALREADY_HAVE_AN_ACCOUNT_TEXT: "#signuplogin p",
    LOGIN_HERE_LINK: "#signuplogin a",
    LOGIN_TO_YOUR_ACCOUNT_TEXT: ".css-10yojrc",
    DONT_HAVE_AN_ACCOUNT_TEXT: "#loginsignup",
    SIGNUP_LINK: "#loginsignup a",
    SOCIAL_LOGIN_GOOGLE: "#logingoogle",
    GOOGLE_HEADING_TEXT: "#headingText",
    GOOGLE_EMAIL_FIELD: "#identifierId",
    EMAIL_NEXT_BUTTON: "#identifierNext",
    GOOGLE_PASSWORD_FIELD: "input[name='Passwd']",
    PASSWORD_NEXT_BUTTON: "#passwordNext",
    INVALID_PASSWORD_MESSAGE: "#c0",
  } as const;
}
