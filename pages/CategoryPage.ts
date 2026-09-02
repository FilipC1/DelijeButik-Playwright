import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoryPage extends BasePage {

  readonly linkProizvoda: Locator;
  readonly naslovKategorije: Locator;

  constructor(page: Page) {
    super(page);

    this.linkProizvoda = page.locator('xpath=//a[contains(@href,"/product/magnet-d-gumeni/")]').first();
    this.naslovKategorije = page.locator('xpath=//*[self::h1 or self::h2][contains(normalize-space(),"Магнети")]').first();
  }

  async otvoriStranicuKategorije() {
    await this.page.goto('https://www.delijebutik.com/product-category/ostalo/magneti/');
  }

  async proveriStranicuKategorije() {
    await expect(this.page).toHaveURL(/magneti/);
  }

  async proveriNaslovKategorije(ocekivaniNaslov: string) {
    await expect(this.naslovKategorije).toContainText(ocekivaniNaslov);
  }

  async proveriDaProizvodPostoji() {
    await expect(this.linkProizvoda).toBeVisible();
  }

  async otvoriPrviProizvod() {
    await expect(this.linkProizvoda).toBeVisible();
    await this.linkProizvoda.click();
  }

  
}