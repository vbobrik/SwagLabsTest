const puppeteer = require('puppeteer');
const expect = require('expect.js');
const LoginPage = require('./LoginPage');
const USER_CREDS ='standard_user/secret_sauce';
const URL = 'https://www.saucedemo.com/';
const URL_PRODUCTS = 'https://www.saucedemo.com/inventory.html';


describe('Log in Swag', function () {
    let browser, page;
    before( async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto(URL);
    }
    )

    after ( async () => {
            await browser.close();
        }
    )
    
    it('Login form appears', async () => {
        const loginPage = new LoginPage(page);
        
        let username = await loginPage.checkPlaceholder(loginPage.loginFieldElement);
        let password = await loginPage.checkPlaceholder(loginPage.passwordFieldElement);
        let button = await loginPage.checkValue(loginPage.buttonElement);

        expect(username).equal('Username');
        expect(password).equal('Password');
        expect(button).equal('Login');
    }),

    it('Login as a standart user', async () => {
        const loginPage = new LoginPage(page);
        
        await loginPage.fillForm(loginPage.loginFieldElement, USER_CREDS.split('/')[0]);
        await loginPage.fillForm(loginPage.passwordFieldElement, USER_CREDS.split('/')[1]);
        await page.click(loginPage.buttonElement);

        expect(await page.url()).equal(URL_PRODUCTS);
    })
})