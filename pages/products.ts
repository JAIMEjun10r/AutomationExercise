import { Page, expect } from "@playwright/test";

const textsToCheck = ['Rs.', 'Quantity:', 'Availability:', 'Condition:', 'Brand:'];

export class productsMenu {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async clickingMenuproducts() {
        await this.page.getByRole('link', { name: ' Products' })
            .click()
        await expect(this.page).toHaveURL(/.*products/)
        await expect(this.page.getByRole('heading', { name: 'All Products' })).toBeVisible()
    }

    async viewProduct() {
        await this.page.locator('a[href="/product_details/1"]')
            .click()
    }

    async viewProductsDetails() {
        const categoryElement = this.page.locator('div.product-information p:has-text("Category")')
        await expect(categoryElement).toBeVisible()
        for (const text of textsToCheck) {
            const element = this.page.getByText(text)
            await expect(element).toBeVisible()
        }
    }

    async searchingProduct(product) {
        await this.page.getByPlaceholder('Search Product')
            .fill(product)
        await this.page.locator('#submit_search')
            .click()
        const seacrhedProductsH2 = this.page.getByRole('heading', { name: 'Searched Products' })
        const confirmingSearchedProduct = this.page.getByText(product).first()
        await expect(seacrhedProductsH2).toBeVisible()
        await expect(confirmingSearchedProduct).toContainText(product)
    }

    async adding_product () {
        const ver = this.page.getByRole('link', { name: ' View Product' })
        await ver.scrollIntoViewIfNeeded()
        await this.page.locator('.product-overlay').hover()
        await this.page.getByText('Add to cart')
            .nth(1)
            .click()
        await expect(this.page.getByText(' Added! Your product has')).toBeVisible()
        
        
        // await this.page.locator('[data-product-id="2"]').hover()
    }
}

