import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

  readonly naslovProizvoda: Locator;
  readonly dugmeDodajUKorpu: Locator;
  readonly brojProizvodaUKorpi: Locator;

  constructor(page: Page) {
    super(page);

    this.naslovProizvoda = page.locator('h1.product_title').first();
    this.dugmeDodajUKorpu = page.locator('#product-5924 button[name="add-to-cart"]');
    this.brojProizvodaUKorpi = page.locator('xpath=//*[contains(normalize-space(),"1 артикал") or contains(normalize-space(),"1 артикла")]').first();
  }


  async proveriStranicuProizvoda() {
    await expect(this.naslovProizvoda).toBeVisible();
  }

  async dodajProizvodUKorpu() {
    await expect(this.dugmeDodajUKorpu).toBeVisible();
    await this.dugmeDodajUKorpu.click();
    await expect(this.brojProizvodaUKorpi).toBeVisible();
  }

  async otvoriKorpu() {
    await this.page.goto('https://www.delijebutik.com/cart-4/');
  }


  
}