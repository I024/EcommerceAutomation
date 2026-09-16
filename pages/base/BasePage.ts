import { Page, Locator, expect } from "@playwright/test";
export abstract class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(path: string = '') {
        await this.page.goto(path);
    }

    async verifyURL(expectedRegex: RegExp) {
        await expect(this.page).toHaveURL(expectedRegex);
    }

    async scrollElement(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    async acceptCookiesIfPresent(cookieButtonLocator: Locator) {
        try {
            if (await cookieButtonLocator.isVisible({ timeout: 4000 })) {
                await cookieButtonLocator.click();
            }
        } catch {

        }
    }


    async waitForNetworkStable() {
        await this.page.waitForLoadState('networkidle');
    }
}


