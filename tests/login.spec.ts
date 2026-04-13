import test, { expect } from "@playwright/test";

test.describe('login and logout process', () => {

    test.beforeEach(async({page}) => {
        await page.goto("https://www.saucedemo.com/");

        await page.getByPlaceholder("Username").fill('standard_user');
        await page.getByPlaceholder("Password").fill('secret_sauce');

        await page.locator("//input[@name='login-button']").click();

    })
    test('loginProcess', async({page}) => {
        

        await expect(page).toHaveURL(/inventory/);
    })

    test('logout process', async({page})=> {
        await page.getByRole('button', {name: 'Open Menu'}).click();
        await page.getByRole('link', {name: 'Logout'}).click();
        await expect(page.getByPlaceholder("Username")).toBeVisible();


    })

   
})