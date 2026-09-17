import { test as base } from '@playwright/test';
import { rsLoginPage } from '../pages/roomservice/rsLoginPage';



type Fixtures = {
    loginPage: rsLoginPage;
};


export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {

        await use(new rsLoginPage(page));

    },


});

export { expect } from '@playwright/test';