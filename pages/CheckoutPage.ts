import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

  readonly poljeIme: Locator;

  constructor(page: Page) {
    super(page);

    this.poljeIme = page.locator('#billing_first_name');
  }

  async proveriCheckoutStranicu() {

    await expect(this.page).toHaveURL(/checkout/);
    await expect(this.poljeIme).toBeVisible();
  }



}