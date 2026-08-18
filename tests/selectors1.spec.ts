import test from "@playwright/test";
test ('learn ways of selecting selectors' , async({page})=>{
    await page.goto("https://www.youtube.com/")
    await page.locator('[name="search_query"]').fill("Playwright");
    await page.locator('.ytSearchboxComponentSearchButton').click();
    //await page.waitForTimeout(3000)
})