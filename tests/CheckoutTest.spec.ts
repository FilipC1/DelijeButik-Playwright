import { test } from './BaseTest';

test('Checkout stranica', async ({

  kategorijaStranica,
  proizvodStranica,
  korpaStranica,
  checkoutStranica

}) => {

  await kategorijaStranica.otvoriStranicuKategorije();
  await kategorijaStranica.otvoriPrviProizvod();
  await proizvodStranica.proveriStranicuProizvoda();
  await proizvodStranica.dodajProizvodUKorpu();
  await proizvodStranica.otvoriKorpu();
  await korpaStranica.proveriProizvodUKorpi();
  await korpaStranica.otvoriCheckout();
  await checkoutStranica.proveriCheckoutStranicu();
});