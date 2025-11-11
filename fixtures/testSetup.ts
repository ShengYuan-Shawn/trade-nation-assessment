import { test } from "@playwright/test";
import { CommonUtils } from "../utils/commonUtils";
import { MarketPage } from "../pages/marketPage";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";

export interface TestFixtures {
  commonUtils: CommonUtils;
  marketPage: MarketPage;
  homePage: HomePage;
  loginPage: LoginPage;
  url: string;
}

export const testSetup = test.extend<TestFixtures>({
  commonUtils: async ({ page }, use) => {
    const commonUtils = new CommonUtils(page);
    await page.context().clearCookies();
    await use(commonUtils);
  },

  marketPage: async ({ page }, use) => {
    const marketPage = new MarketPage(page);
    await use(marketPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

testSetup.afterEach(async ({ page, context }) => {
  await page.close();
  await context.close();
});
