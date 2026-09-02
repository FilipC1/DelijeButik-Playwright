import { test } from './BaseTest';

import { PodaciTesta } from './CustomerTest';

test('Pretraga proizvoda', async ({
  pocetnaStranica,
  pretragaStranica
}) => {

  await pocetnaStranica.otvoriPocetnuStranicu();
  await pocetnaStranica.pretraziProizvod(PodaciTesta.trazeniProizvod);
  await pretragaStranica.proveriStranicuPretrage();
  await pretragaStranica.proveriRezultatePretrage();
  await pretragaStranica.proveriBrojRezultata();
});