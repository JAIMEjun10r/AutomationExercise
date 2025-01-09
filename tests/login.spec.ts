require('dotenv').config()
import { test } from '../support/index';


test.beforeEach(async ({page}) => {
  await page.goto('/')
})
test('Login User with correct credentials', async ({ page }) => {
  await page.login.loginUser(process.env.CORRECT_EMAIL, process.env.CORRECT_PASSWORD)

});

test('Login user with incorrect credentials', async({page}) => {
  await page.login.loginUser('as@gmail.com', 'cudeapito')
});

test('Login user with correct email and wrong password', async({page})  => {
  await page.login.loginUser(process.env.CORRECT_EMAIL, '123456qw')
});

test('It is not possible to log in without filling in the email and password fields', async({page}) => {
  await page.login.validateEmailIsRequired()
});

test('Logout user', async({page}) => {
  await page.login.loginUser(process.env.CORRECT_EMAIL, process.env.CORRECT_PASSWORD)
  await page.login.logout()
});

