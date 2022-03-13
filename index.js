const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder()
        .forBrowser('chrome')
        // uncomment line below to use the docker container
        .usingServer("http://localhost:4444")
        // uncomment line below to use local web browser
        // .forBrowser('safari')
        .build();
    try {
        await driver.get('https://www.youtube.com'); // => Navigate to Url
        console.log(await driver.getTitle()); // => "Google"
        console.log(await (await driver.getCapabilities()).getBrowserName()); // => Browser used, "safari, chrome etc"

        // In case of running the test locally on Safari, please uncomment the following 3 lines
        // let acceptBtn = await driver.findElement(By.linkText('I agree'));
        // let okAccBtn = acceptBtn.findElement(By.xpath("./.."));
        // await okAccBtn.click();

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
        await driver.sleep(200);
        console.log(await driver.getTitle()); // gets page title

    } finally {
        driver.quit();
    }
})();