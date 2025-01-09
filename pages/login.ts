import { Page, expect } from "@playwright/test";


const elementsToCheck = [
    { name: 'Login to your account', role: 'heading' },
    { name: 'New User Signup!', role: 'heading' },
    { name: 'Signup', role: 'button' },
    { name: 'Login', role: 'button' }
];


export class Login {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async loginUser(email: string, password: string) {
        await this.page.getByRole('link', { name: ' Signup / Login' }).click();

        for (const item of elementsToCheck) {
            const element = this.page.getByRole(item.role as 'heading' | 'button', { name: item.name });
            await expect(element).toBeVisible();
        }

        await this.page.locator('[data-qa="login-email"]').fill(email)
        await this.page.locator('[data-qa="login-password"]').fill(password)
        await this.page.getByRole('button', { name: 'Login' }).click()

        try {
            await expect(this.page.getByText(`Logged in as ${process.env.CORRECT_USER}`)).toBeVisible();
        } catch {
            await expect(this.page.getByText('Your email or password is incorrect')).toBeVisible();
        }

    

    }

    async validateEmailIsRequired() {
        await this.page.getByRole('link', { name: ' Signup / Login' }).click();

        const emailInput = this.page.locator('[data-qa="login-email"]');
        const passwordInput = this.page.locator('[data-qa="login-password"]')

        await expect(emailInput).toHaveAttribute('required', '');
        await expect(passwordInput).toHaveAttribute('required', '')
    }

    async logout() {
        await this.page.getByRole('link', { name: ' Logout' }).click()
        await expect(this.page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
    }
}