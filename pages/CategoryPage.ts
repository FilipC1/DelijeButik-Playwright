import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoryPage extends BasePage {

  readonly linkProizvoda: Locator;
  readonly naslovKategorije: Locator;

  constructor(page: Page) {
    super(page);

    this.linkProizvoda = this.page.locator(
  '//a[contains(@href,"/product/sal-ljubav-si-mi-jedina/")]'
).first();
    this.naslovKategorije = page.locator('xpath=//*[self::h1 or self::h2][contains(normalize-space(),"Шалови")]').first();
  }

  async otvoriStranicuKategorije() {
    await this.page.goto('https://www.delijebutik.com/product-category/ostalo/salovi/');
  }

  async proveriStranicuKategorije() {
    await expect(this.page).toHaveURL(/salovi/);
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