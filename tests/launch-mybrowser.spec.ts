import { firefox, test }from "@playwright/test";

test("launch firefox", async()=>{
    const browser = await firefox.launch({headless : false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.youtube.com")
    await page.waitForTimeout(3000)
    console.log(await page.title());
});