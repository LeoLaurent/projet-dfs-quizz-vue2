var fs = require('fs');

const url = 'http://localhost:8080/quizz/5fa1ef16635171317b40559c/questions';

const {By, Key} = require('selenium-webdriver');

const webdriver = require('selenium-webdriver');



describe('Questions test', () => {

    beforeEach(() => {
        require('chromedriver');
        browser = new webdriver.Builder().forBrowser('chrome').build()
    }, 1000);

    test('empty', async () => {
        await browser.get(url);
        await browser.findElement(By.id("send-quizz")).click();
        webdriver.wait(function () {
            return webdriver.isElementPresent(browser.findElement(By.id("error-form")));
        }, 1000);
        var erreur = await browser.findElement(By.id("error-form"));
        expect(erreur.length).toBe(1)
    }, 1000);


    afterEach(async () => {
        await browser.quit()
    })
});