import { test } from "@playwright/test";
import { testSetup } from "../../fixtures/testSetup";

test.describe("Trade Nation Login Page", () => {
  testSetup(
    "Test 2 - Google Invalid Login",
    async ({ commonUtils, loginPage, homePage }) => {
      await commonUtils.goTo("https://tradenation.com");
      await homePage.acceptCookiesIfVisible();
      await homePage.clickSignupButton();
      await loginPage.verifySignupPage();
      await loginPage.clickLoginHere();
      await loginPage.verifyLoginPage();
      await loginPage.loginWithGoogle("shengyuan1103@gmail.com");
      await commonUtils.captureScreenshot();
    }
  );
});
