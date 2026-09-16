import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class rshomePage extends BasePage {
    readonly page: Page;
    readonly mainMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.mainMenu = page.getByRole('navigation', { name: 'Main menu' });
    }
    async open() {
        await this.page.goto('https://www.roomservice360.com/', { waitUntil: 'domcontentloaded' });
    }

    async clickFurnitureMenu() {
        await this.mainMenu.getByText('Furniture', { exact: true }).click();
    }



}