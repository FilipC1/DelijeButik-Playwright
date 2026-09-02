import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { CategoryPage } from '../pages/CategoryPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type Fixtures = {
  loginStranica: LoginPage;
  pocetnaStranica: HomePage;
  pretragaStranica: SearchPage;
  kategorijaStranica: CategoryPage;
  proizvodStranica: ProductPage;
  korpaStranica: CartPage;
  checkoutStranica: CheckoutPage;
};

const test = base.extend<Fixtures>({

  loginStranica: async function ({ page }, use) {
    await use(new LoginPage(page));
  },

  pocetnaStranica: async function ({ page }, use) {
    await use(new HomePage(page));
  },

  pretragaStranica: async function ({ page }, use) {
    await use(new SearchPage(page));
  },

  kategorijaStranica: async function ({ page }, use) {
    await use(new CategoryPage(page));
  },

  proizvodStranica: async function ({ page }, use) {
    await use(new ProductPage(page));
  },

  korpaStranica: async function ({ page }, use) {
    await use(new CartPage(page));
  },

  checkoutStranica: async function ({ page }, use) {
    await use(new CheckoutPage(page));
  }

});

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.delijebutik.com/');
});

export { test, expect };