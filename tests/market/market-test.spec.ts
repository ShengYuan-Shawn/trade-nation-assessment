import { test } from "@playwright/test";
import { testSetup } from "../../fixtures/testSetup";

test.describe("Trade Nation Markets Page", () => {
  testSetup(
    "Test 1 - Trade Nation Home Page",
    async ({ commonUtils, marketPage, homePage }) => {
      await commonUtils.goTo("https://tradenation.com/markets/#forex");
      await homePage.acceptCookies();
      await marketPage.verifyForexPage();
      await homePage.clickTradeNationLogo();
      await homePage.verifyHomePageTitle();
    }
  );
});
