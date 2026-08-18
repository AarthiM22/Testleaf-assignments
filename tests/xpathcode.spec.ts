import test from "@playwright/test";
test('Learn Xpath', async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('//form[@id="login_form"]//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('//form[@id="login_form"]//input[@id="Login"]').click()
    //await page.locator('//input[@id="password"]/parent::form').fill('TestLeaf@2025')
    await page.locator('//form//input[@id="password"]').fill('TestLeaf@2025');
    await page.locator('//form[@id="login_form"]//input[@value="Log In"]').click()
})