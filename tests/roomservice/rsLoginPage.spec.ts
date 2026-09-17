// import { test, expect } from '@playwright/test';
import { test, expect } from '../../utils/fixtures';
import { rsLoginPage } from '../../pages/roomservice/rsLoginPage'

test('login using POM', async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');
    // const loginPage = new rsLoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page.getByText('Products')).toBeVisible();
});
test('invalid password shows error', async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');
    //  const loginPage = new rsLoginPage(page);
    await loginPage.login('standard_user', 'wrong_password');
    await expect(page.getByText('Epic sadface')).toBeVisible();
});