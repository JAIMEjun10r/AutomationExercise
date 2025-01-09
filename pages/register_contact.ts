import { Page, expect } from "@playwright/test"
import { gerarEmailAleatorio, gerarNomeAleatorio } from "../helper/helper";

const header: string[] = ['Home', ' Products', 'Cart', 'Signup / Login', 'Test Cases', 'API Testing', 'Video Tutorials', 'Contact us']
const nomegerado = gerarNomeAleatorio()
const emailgerado = gerarEmailAleatorio()

export class RegisterContact {
    readonly page: Page
    constructor(page: Page) {
        this.page = page;
    }

    async registerExistEmail(name: string, email: string) {
        for (const item of header) {
            const element = this.page.locator('#header li').filter({ hasText: item });
            await expect(element).toBeVisible();
        }

        await this.page.getByRole('link', { name: ' Signup / Login' }).click()
        await this.page.locator('[data-qa="signup-name"]').fill(name)
        await this.page.locator('[data-qa="signup-email"]').fill(email)
        await this.page.getByRole('button', { name: 'Signup' }).click()
        await expect(this.page.getByText('Email Address already exist!')).toBeVisible();
    }

    async btnContactUs() {
        for (const item of header) {
            const element = this.page.locator('li').filter({ hasText: item });
            await expect(element).toBeVisible();
        }
        await this.page.getByRole('link', { name: ' Contact us' }).click()

    }

    async fillingFields() {
        await expect(this.page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible()
        await this.page.getByPlaceholder('Name').fill(nomegerado)
        await this.page.getByPlaceholder('Email', { exact: true }).fill(emailgerado)
        await this.page.getByPlaceholder('Subject').fill('any')
        await this.page.getByPlaceholder('Your Message Here').fill('When you learn something with passion, you’re unlikely to forget it')

    }

    async inputFile() {
        await this.page.locator('input[type="file"]').setInputFiles('./support/Bilu.txt')
        await this.page.waitForTimeout(1000)
        
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('Press OK to proceed!');
            await dialog.accept();
          });
        
        await this.page.getByRole('button', { name: 'Submit' }).click();

        await expect(this.page.locator('#contact-page').getByText('Success! Your details have')).toBeVisible();

    }

    // async signupLoginHome() {
    //     await this.page.getByRole('link', { name: ' Signup / Login' }).click();
    // }


}