const Page = require('./page')

class RegPage extends Page {

    async creatacc() { return await browser.$('body > app-root > app-login > div > div > form > div > div:nth-child(3) > p > a') }
    async indvulacc() { return await browser.$('body > app-root > app-signup > div > div > div.card > form > div > div.ui-g-12.actionBtns > a.chooseIndividualBtn') }
    async fullName() {return await browser.$('body > app-root > app-createaccount > div > div > form > div > div.card > div:nth-child(3) > span > input')}
    async emailaddress() {return await browser.$('body > app-root > app-createaccount > div > div > form > div > div.card > div:nth-child(4) > span > input')}
    async password() {return await browser.$('body > app-root > app-createaccount > div > div > form > div > div.card > div:nth-child(5) > span > input')}
    async confirmpassword() {return await browser.$('body > app-root > app-createaccount > div > div > form > div > div.card > div:nth-child(6) > span > input')}
    async postalcode() {return await browser.$('body > app-root > app-createaccount > div > div > form > div > div.card > div:nth-child(7) > span > p-autocomplete > span > input')}
    async getSignupEle() { return await browser.$('body > app-root > app-createaccount > div > div > form > div > div.card > div.ui-g-12.pad-b-0 > button')}
    async getCantSignupEle() { return await browser.$('body > app-root > app-createaccount > div > div > form > div > div.card > p-messages > div > ul > li > span')}
    
    open() {
        super.open('https://test.datagardener.com/login');
    }
    async selectcreatacc() {
        var creatacc = await this.creatacc()
        await creatacc.click()
    }

    async selectindvulacc() {
        var indvulacc = await this.indvulacc()
        await indvulacc.click()
    }
    
    async signup(fullNameVal, emailAddressVal, passwordVal, confirmPasswordVal, postalcodeVal) {

        var fullNameEle = await this.fullName()
        await fullNameEle.setValue(fullNameVal)
    
        var emailaddressEle = await this.emailaddress()
        await emailaddressEle.setValue(emailAddressVal)
    
        var passwordEle = await this.password()
        await passwordEle.setValue(passwordVal)
    
        var confirmpasswordEle = await this.confirmpassword()
        await confirmpasswordEle.setValue(confirmPasswordVal)
    
        var postalcodeEle = await this.postalcode()
        await postalcodeEle.setValue(postalcodeVal)
    }

    async selectSignup() {
        var signupEle = await this.getSignupEle()
        await signupEle.click()
    }

    async getSignupErrorText()
    {
        var cantSignupEle = await this.getCantSignupEle();
        return cantSignupEle.getText();
    }
}

module.exports = new RegPage();