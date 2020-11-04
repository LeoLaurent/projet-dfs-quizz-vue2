var fs = require('fs');

const url= "localhost:8080"
const {By, Key} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');

describe('Add Quizz', () => {
    beforeEach(() => {
        require('chromedriver');
        browser =  new webdriver.Builder().forBrowser('chrome').build()
    })

    test('au bon endroit', async () => {
        await browser.get(url)
        const title = await browser.getTitle()
        expect(title).toContain('squizz')
    });

    test('ajouter une question', async () => {
        await browser.get(url)
        const listB = browser.findElements(By.css("pregunta"))
        await browser.findElement(By.id("ajouter")).click
        const listA= browser.findElements(By.css("pregunta"))
        expect(length(listA)).toBe(length(listB)+1)
    });

    test('retirer une question', async () => {
        await browser.get(url)
        const listB = browser.findElements(By.css("pregunta"))
        await browser.findElement(By.css("effaceur")).click
        const listA= browser.findElements(By.css("pregunta"))
        expect(length(listA)).toBe(length(listB)-1)
    });

    afterEach(async () => {
        await browser.quit()
    })

})
