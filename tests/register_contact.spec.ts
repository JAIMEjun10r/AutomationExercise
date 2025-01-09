require('dotenv').config()
import { test } from '../support/index';


test.beforeEach(async ({page}) => {
  await page.goto('/')
})
test('It should not be possible to register a user with an existing email', async ({ page }) => {
  await page.registerContact.registerExistEmail(process.env.CORRECT_USER, process.env.CORRECT_EMAIL)
  
});

test('Contact us form', async ({ page }) => {
  await page.registerContact.btnContactUs()
  await page.registerContact.fillingFields()
  await page.registerContact.inputFile()
});

// test('Register user with an existing email', async({page}) => {
//   await page.registerContact.signupLoginHome()
// });


