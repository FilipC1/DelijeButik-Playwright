import { Page, Locator, expect } from '@playwright/test';

export class BasePage {

  constructor(protected page: Page) {}

  async otvoriStranicu(url: string) {
    await this.page.goto(url);
  }

  async klikniElement(locator: Locator) {
    await locator.click();
  }

  async unesiTekst(locator: Locator, tekst: string) {
    await locator.fill(tekst);
  }

  async proveriDaJeElementVidljiv(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async proveriDaElementSadrziTekst(locator: Locator, tekst: string) {
    await expect(locator).toContainText(tekst);
  }

  async proveriUrlStranice(url: string) {
    await expect(this.page).toHaveURL(url);
  }

}