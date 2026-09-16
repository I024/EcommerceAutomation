import { test, expect } from '@playwright/test';
import { rshomePage } from '../../pages/roomservice/rshomePage';



test('Navigate to Sofas via Furniture menu', async ({ page }) => {
    const homepage = new rshomePage(page);
    await homepage.open()
    await homepage.clickFurnitureMenu();


});
