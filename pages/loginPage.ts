import { Locator, Page, expect } from "@playwright/test";
import { LoginPageLocators } from "../factory/LoginPageLocators";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    const Login = LoginPageLocators.LOGIN_PAGE;

    this.page = page;
  }
}
