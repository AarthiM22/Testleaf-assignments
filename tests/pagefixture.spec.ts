import test from "@playwright/test";
test('learn Page fiXture', async({page})=>{
await page.goto("https://www.youtube.com/")
})
