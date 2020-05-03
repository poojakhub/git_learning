// import Page from './page'
const Page = require('./page')

class HomePage extends Page {

    // async sidebarID(){return await browser.$('#sidebar');}

    // async isSidenavBarVisible(){

    //     var sidebarVisible = await this.sidebarID();
    //     var isVisible = await sidebarVisible.isDisplayed();
    //     return isVisible;

    // }
    
    async logoutElement() { 
        return await browser.$('body > app-root > app-main > div > div > div.layout-main > app-breadcrumb > div > div > a[title=Logout]')
    }

    async isLogoutElementVisible() {
        var logoutEle = await this.logoutElement();
        return await logoutEle.isDisplayed();
    }

};

module.exports = new HomePage();