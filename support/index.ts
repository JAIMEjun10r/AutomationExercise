import { test as base } from '@playwright/test';
import { Login } from '../pages/login';
import { RegisterContact } from '../pages/register_contact';
import { productsMenu } from '../pages/products';

const test = base.extend<{ page: any }>({
    page: async ({ page }, use) => {
      page.login = new Login(page);
      page.registerContact = new RegisterContact(page)
      page.products_menu = new productsMenu(page)
  
      await use(page); 
    }
  });
  
export { test };