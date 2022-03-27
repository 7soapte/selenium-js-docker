const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .usingServer("http://localhost:4444")
        .build();
    try {
        await driver.get('https://www.youtube.com'); // => Navigate to Url
        console.log(await driver.getTitle()); // => "Google"
        console.log(await (await driver.getCapabilities()).getBrowserName()); // => Browser used, "safari, chrome etc"

        let searchInput = await driver.findElement(By.tagName('body'));
        searchInput.sendKeys(Key.TAB);
        await driver.sleep(1000);
        searchInput.sendKeys(Key.TAB);
        await driver.sleep(1000);
        searchInput.sendKeys(Key.TAB);
        await driver.sleep(200);
        searchInput.sendKeys("Universitatea UTM"); // search entry on youtube
        await driver.sleep(200);
        searchInput.sendKeys(Key.ENTER); // start search
        await driver.sleep(5000);
        console.log(await driver.getTitle()); // gets page title

    } finally {
        driver.quit();
    }
})();