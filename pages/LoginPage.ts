import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  readonly korisnickoIme: Locator;
  readonly lozinka: Locator;
  readonly dugmePrijava: Locator;
  readonly naslovPrijave: Locator;
  readonly porukaGreske: Locator;
  readonly zapamtiMeCheckbox: Locator;
  readonly linkZaboravljenaLozinka: Locator;

  constructor(page: Page) {
    super(page);

    this.korisnickoIme = page.locator('input[name="username"]');
    this.lozinka = page.locator('input[name="password"]');
    this.dugmePrijava = page.locator('xpath=//button[@name="login"]');
    this.naslovPrijave = page.locator('xpath=//h2[contains(normalize-space(),"Пријава") or contains(normalize-space(),"Prijava")]').first();
    this.porukaGreske = page.locator('.woocommerce-error').first();
    this.zapamtiMeCheckbox = page.locator('input[name="rememberme"]');
    this.linkZaboravljenaLozinka = page.locator('xpath=//a[contains(@href,"lost-password")]').first();
  }


  async otvoriLoginStranicu() {
    await this.page.goto('/my-account/');
    await expect(this.korisnickoIme).toBeVisible();
  }

  async unesiKorisnickoIme(korisnik: string) {
    await this.korisnickoIme.fill(korisnik);
  }

  async unesiLozinku(lozinka: string) {
    await this.lozinka.fill(lozinka);
  }


  async klikniDugmePrijava() {
    await this.dugmePrijava.click();
  }


  async prijava(korisnik: string, lozinka: string) {
    await this.korisnickoIme.fill(korisnik);
    await this.lozinka.fill(lozinka);
    await this.dugmePrijava.click();
  }

  async proveriLoginStranicu() {
    await expect(this.korisnickoIme).toBeVisible();
    await expect(this.lozinka).toBeVisible();
    await expect(this.dugmePrijava).toBeVisible();
  }

  async proveriPorukuGreske() {
    await expect(this.porukaGreske).toBeVisible();
  }

  async proveriTekstPorukeGreske(ocekivanaPoruka: string) {
    await expect(this.porukaGreske).toContainText(ocekivanaPoruka);
  }


  async cekirajZapamtiMe() {
    await this.zapamtiMeCheckbox.check();
  }

  async proveriDaJeZapamtiMeCekirano() {
    await expect(this.zapamtiMeCheckbox).toBeChecked();
  }

  async klikniZaboravljenaLozinka() {
    await this.linkZaboravljenaLozinka.click();
  }

  async proveriStranicuZaboravljenaLozinka() {
    await expect(this.page).toHaveURL(/lost-password/);
  }


  
}