import { test as setup, chromium, expect } from "@playwright/test";

async function globalSetup() {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://sistema.sisobras.dev')
    await page.getByPlaceholder('Digite seu email...').fill('master@master.com')
    await page.getByPlaceholder('Insira uma senha...').fill('123456')
    await page.getByRole('button', { name: 'Entrar' }).click()
    await page.waitForURL('https://sistema.sisobras.dev')
    const ObrasHeader = page.getByRole('heading', { name: 'Obras' })
    await expect(ObrasHeader).toBeVisible()
    await page.context().storageState({ path: "./playwright/.auth/auth.json" })
}

export default globalSetup;