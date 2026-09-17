import { test as setup } from '@playwright/test';
import { rsLoginPage } from '../../pages/roomservice/rsLoginPage';
import testData from '../../data/testData.json';


setup('Login Setup', async ({ page }) => {
    const loginPage = new rsLoginPage(page);
    await page.goto(
        'https://www.saucedemo.com/'
    );

    await loginPage.login(
        testData.login.username,
        testData.login.password
    );
    await page.waitForURL(
        '**https://www.saucedemo.com/inventory.html**'
    );
    await page.context().storageState({
        path: 'auth.json'
    });


});