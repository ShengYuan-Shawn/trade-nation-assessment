import { Locator, Page, expect } from "@playwright/test";
import { MarketPageLocators } from "../factory/MarketPageLocators";

export class MarketPage {
  readonly page: Page;
  readonly tradeTheMarketText: Locator;
  readonly thatMoveText: Locator;

  constructor(page: Page) {
    const Forex = MarketPageLocators.FOREX_PAGE;

    this.page = page;
    this.tradeTheMarketText = page.locator(Forex.TRADE_THE_MARKET_TEXT);
    this.thatMoveText = page.locator(Forex.THAT_MOVE_TEXT);
  }

  async verifyForexPage() {
    await expect(this.tradeTheMarketText).toBeVisible();
    await expect(this.tradeTheMarketText).toContainText("Trade the markets");

    await expect(this.thatMoveText).toBeVisible();
    await expect(this.thatMoveText).toContainText("that move");

    const pageTitle = await this.page.title();
    expect(pageTitle).toContain(
      "Popular Markets to Trade With Us — Trade Nation"
    );
  }
}
