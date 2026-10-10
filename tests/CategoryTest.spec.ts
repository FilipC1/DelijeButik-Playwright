import { test } from './BaseTest';

test('Otvaranje kategorije Salovi', async ({
  kategorijaStranica
}) => {

  await kategorijaStranica.otvoriStranicuKategorije();
  await kategorijaStranica.proveriStranicuKategorije();
  await kategorijaStranica.proveriNaslovKategorije('Шалови');
  await kategorijaStranica.proveriDaProizvodPostoji();
});