// import Page from './page'
const Page = require('./page')

class LoginPage extends Page {

    async loginBtn() {return await browser.$('#navb > form > button')}

    async usernameEle() {return await browser.$('body > app-root > app-login > div > div > form > div > div.card > div:nth-child(3) > span > input')}

    async passwordEle() {return await browser.$('body > app-root > app-login > div > div > form > div > div.card > div:nth-child(4) > span > input')}
    
    async loginBtnEle() {return await browser.$('body > app-root > app-login > div > div > form > div > div.card > div.ui-g-12.pad-b-0 > button > span')}

    async open() {await super.open('https://test.datagardener.com/login')}
   
    async selectLogin() {
        let loginBtn = await this.loginBtn();
        await loginBtn.click();
    }

    async login(username, password) {
        var usernameInputField = await this.usernameEle();
        var passwordInputField = await this.passwordEle();
        var loginButton = await this.loginBtnEle();

        await usernameInputField.setValue(username)
        await passwordInputField.setValue(password)
        await loginButton.click();
    }

    async isLoginFormDisplayed() {
        var loginFormUsername = await this.usernameEle();
        var isVisibleOnUI = await loginFormUsername.isDisplayed();
        return isVisibleOnUI;
    }
};

module.exports = new LoginPage();