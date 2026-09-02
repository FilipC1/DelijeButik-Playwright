import { test } from './BaseTest';

test('Otvaranje kategorije Magneti', async ({
  kategorijaStranica
}) => {

  await kategorijaStranica.otvoriStranicuKategorije();
  await kategorijaStranica.proveriStranicuKategorije();
  await kategorijaStranica.proveriNaslovKategorije('Магнети');
  await kategorijaStranica.proveriDaProizvodPostoji();
});