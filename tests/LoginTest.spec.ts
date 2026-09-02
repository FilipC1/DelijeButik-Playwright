import { test, expect } from './BaseTest';
import { PodaciTesta } from './CustomerTest';

test(
  'Neuspešan login sa pogrešnim podacima',
  async ({ page, loginStranica }) => {

    await loginStranica.otvoriLoginStranicu();
    await expect(page.locator('body')).toBeVisible();
    await loginStranica.proveriLoginStranicu();
    await loginStranica.prijava(PodaciTesta.pogresnoKorisnickoIme,PodaciTesta.pogresnaLozinka);
    await loginStranica.proveriPorukuGreske();
    await expect(page.locator('.woocommerce-error')).toBeVisible();
  }
);