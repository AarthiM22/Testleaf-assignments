import test from "@playwright/test";
test('Learn CSS selector', async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('[type="submit"]').click()
    await page.locator('.password').fill('TestLeaf@2025')
    await page.locator('[value="Log In"]').click()

})