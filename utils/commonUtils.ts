import { Page } from "@playwright/test";

export class CommonUtils {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goTo(url: string) {
    await this.page.goto(url, {
      waitUntil: "networkidle",
      timeout: 30000,
    });
  }

  async captureScreenshot() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const screenshotName = `screenshots_${timestamp}`;
    await this.page.screenshot({
      path: `screenshots/${screenshotName}.png`,
      fullPage: true,
    });
  }
}
