import { test, expect } from '@playwright/test';

test.use({ storageState: 'auth.json' });

test('cart check', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

});