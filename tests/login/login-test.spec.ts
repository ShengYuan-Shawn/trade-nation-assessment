import { test } from "@playwright/test";
import { testSetup } from "../../fixtures/testSetup";

test.describe("Trade Nation Login Page", () => {
  testSetup(
    "Test 2 - Google Invalid Login",
    async ({ commonUtils, marketPage, homePage }) => {
      await commonUtils.goTo("https://tradenation.com/");
    }
  );
});
