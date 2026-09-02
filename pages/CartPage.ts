import { Page, Locator, expect } from '@playwright/test';

import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  readonly proizvodUKorpi: Locator;

  readonly dugmeUkloni: Locator;

  readonly dugmeCheckout: Locator;

  readonly porukaPraznaKorpa: Locator;

  constructor(page: Page) {

    super(page);

    this.proizvodUKorpi = page.locator('.cart_item').first();
    this.dugmeUkloni = page.locator('a.remove').first();
    this.dugmeCheckout = page.locator('.checkout-button').first();
    this.porukaPraznaKorpa = page.locator('.cart-empty').first();

  }

  async proveriProizvodUKorpi() {
    await expect(this.proizvodUKorpi).toBeVisible();
  }

  async ukloniProizvod() {
    await this.dugmeUkloni.click();
  }

  async proveriDaJeKorpaPrazna() {
    await expect(this.porukaPraznaKorpa).toBeVisible();
  }

  async otvoriCheckout() {
    await this.dugmeCheckout.click();
  }

}