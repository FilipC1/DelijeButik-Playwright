import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {

  readonly naslovPretrage: Locator;
  readonly rezultatiPretrage: Locator;
  readonly prviProizvod: Locator;
  readonly naslovPrvogProizvoda: Locator;
  readonly porukaNemaRezultata: Locator;

  constructor(page: Page) {
    super(page);


    this.naslovPretrage = page.locator('h1').first();
    this.rezultatiPretrage = page.locator('a[href*="/product/"]');
    this.prviProizvod = page.locator('a[href*="/product/"]').first();
    this.naslovPrvogProizvoda = page.locator('.woocommerce-loop-product__title').first();
    this.porukaNemaRezultata = page.locator('.woocommerce-info, .woocommerce-no-products-found').first();
  }


  async proveriStranicuPretrage() {
    await expect(this.page).toHaveURL(/s=/);
  }

  async proveriRezultatePretrage() {
    await expect(this.rezultatiPretrage.first()).toBeVisible();
  }

  async proveriBrojRezultata() {
    const brojRezultata = await this.rezultatiPretrage.count();
    expect(brojRezultata).toBeGreaterThan(0);
  }

  async otvoriPrviProizvod() {
    await this.prviProizvod.click();
  }


  async proveriPorukuNemaRezultata() {
    await expect(this.porukaNemaRezultata).toBeVisible();
  }


  
}