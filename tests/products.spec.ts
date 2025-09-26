require('dotenv').config()
import { test } from '../support/index';

test.beforeEach(async ({page}) => {
    await page.goto('/')
    await page.products_menu.clickingMenuproducts()
})

test('View product details', async( {page}) => {
    await page.products_menu.viewProduct()
    await page.products_menu.viewProductsDetails()
});

test('Search product', async({ page }) => {
    await page.products_menu.searchingProduct('Blue Top')
});


// test('Add products in cart', async({page}) => {
//     await page.products_menu.searchingProduct('Blue Top')
//     await page.products_menu.adding_product()
// });