var fs = require('fs');

const url = 'http://localhost:8080/quizz/5fa1ef16635171317b40559c';

const {By, Key} = require('selenium-webdriver');

const webdriver = require('selenium-webdriver');


describe('Leaderboard test', () => {

    beforeEach(() => {
        require('chromedriver');
        browser = new webdriver.Builder().forBrowser('chrome').build()
    }, 1000000000000);

    test('it renders', async () => {
        await browser.get(url);
        const title = await browser.getTitle();
        expect(title).toContain('squizz');
    });

    test('can start the quizz', async () => {
        await browser.get(url);
        await driver.findElement(By.css("v-text-field__slot")).sendKeys("testdenom");
        await browser.findElement(By.name("button")).click()
    });

    afterEach(async () => {
        await browser.quit()
    })
});