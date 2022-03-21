require('chromedriver');
const assert = require('assert');
const {Builder, By, withTagName} = require('selenium-webdriver');

const url = "https://www.atlantbh.com/contact/"
const inputMailXpathLocator = "//input[@id='form-input-mail']"
const inputNameXpathLocator = "//input[@id='form-input-text']"
const formButtonXpathLocator = "//input[@id='form-button']"



describe('Checkout Relative Locators', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get(url);
    });


    it('Locate Contact Us button with help of toRightOf() method...', async function() {

        let inputName = driver.findElement(By.xpath(inputNameXpathLocator))
        let contactUsButton = await driver.findElement(withTagName("input").toRightOf(inputName));

        let contactUsButtonValue = await contactUsButton.getAttribute("value");
        assert.equal(contactUsButtonValue, "Contact us");

        console.log("   I have found Contact Us button on the page...");
    });


    it('Locate Name input field with help of toLeftOf() method', async function() {
       
        let formButton = driver.findElement(By.xpath(formButtonXpathLocator))
        let inputName = await driver.findElement(withTagName("input").toLeftOf(formButton));

        let emailLabelText = await inputName.getAttribute("placeholder");
        assert.equal(emailLabelText, "Enter your name")

        console.log("   I have found Email label on the page...");
        
    });


    it('Locate Input field Label mixing above() and toRightOf() methods...', async function() {
      
        let inputMail = driver.findElement(By.xpath(inputMailXpathLocator))
        let inputName = driver.findElement(By.xpath(inputNameXpathLocator))

        let inputLabel = await driver.findElement(withTagName("label")
            .above(inputName)
            .toRightOf(inputMail));

        let inputLabelText = await inputLabel.getText();
        assert.equal(inputLabelText, "Your name:")

        console.log("   I have found Input label on the page...");

    });


    it('Locate Input field Label using near() method...', async function() {
      
        let inputName = driver.findElement(By.xpath(inputNameXpathLocator))
        let inputLabel = await driver.findElement(withTagName("label").near(inputName));

        let inputLabelText = await inputLabel.getText();
        assert.equal(inputLabelText, "Your name:")

        console.log("   I have found Input label on the page...");

    });


    after(() => driver && driver.quit());
})