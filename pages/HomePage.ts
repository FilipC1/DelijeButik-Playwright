import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage.ts';

export class HomePage extends BasePage {

  readonly logo: Locator;
  readonly poljePretrage: Locator;
  readonly dugmePretrage: Locator;
  readonly linkKorpe: Locator;
  readonly linkNaloga: Locator;
  readonly linkProdavnice: Locator;
  readonly linkOdece: Locator;

  constructor(page: Page) {
    super(page);

    this.logo = page.locator('header img').first();
    this.poljePretrage = page.locator('input[placeholder*="Претражи"]').first();
    this.dugmePretrage = page.locator('button[type="submit"], input[type="submit"]').first();
    this.linkKorpe = page.locator('xpath=//a[contains(@href,"cart") or contains(@href,"korpa")]').first();
    this.linkNaloga = page.locator('xpath=//a[contains(.,"Пријава") or contains(.,"Регистрација")]').first();
    this.linkProdavnice = page.locator('xpath=//a[contains(normalize-space(),"Продавница")]').first();
    this.linkOdece = page.locator('xpath=//a[contains(normalize-space(),"Одећа")]').first();
  }

  async otvoriPocetnuStranicu() {
    await this.otvoriStranicu('/');
    await this.proveriDaJeElementVidljiv(this.logo);
  }

  async pretraziProizvod(nazivProizvoda: string) {
    await this.unesiTekst(this.poljePretrage,nazivProizvoda);
    await this.poljePretrage.press('Enter');
  }

  async otvoriKorpu() {
    await this.klikniElement(this.linkKorpe);
  }

  async otvoriStranicuNaloga() {
    await this.klikniElement(this.linkNaloga);
  }

  async otvoriProdavnicu() {
    await this.klikniElement(this.linkProdavnice);
  }

  async otvoriKategorijuOdeca() {
    await this.klikniElement(this.linkOdece);
  }

  async proveriPocetnuStranicu() {
    await this.proveriDaJeElementVidljiv(this.logo);
    await this.proveriDaJeElementVidljiv(this.poljePretrage);
    await this.proveriDaJeElementVidljiv(this.linkKorpe);
  }


  
}