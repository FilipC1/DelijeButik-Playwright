import { test } from './BaseTest';

test('Dodavanje proizvoda u korpu', async ({
  kategorijaStranica,
  proizvodStranica,
  korpaStranica
}) => {

  await kategorijaStranica.otvoriStranicuKategorije();
  await kategorijaStranica.otvoriPrviProizvod();
  await proizvodStranica.proveriStranicuProizvoda();
  await proizvodStranica.dodajProizvodUKorpu();
  await proizvodStranica.otvoriKorpu();
  await korpaStranica.proveriProizvodUKorpi();
});


test('Uklanjanje proizvoda iz korpe', async ({
  kategorijaStranica,
  proizvodStranica,
  korpaStranica
}) => {

  await kategorijaStranica.otvoriStranicuKategorije();
  await kategorijaStranica.otvoriPrviProizvod();
  await proizvodStranica.proveriStranicuProizvoda();
  await proizvodStranica.dodajProizvodUKorpu();
  await proizvodStranica.otvoriKorpu();
  await korpaStranica.proveriProizvodUKorpi();
  await korpaStranica.ukloniProizvod();
  await korpaStranica.proveriDaJeKorpaPrazna();
});