const Page = require('../../pages/page')

class accountsCategory extends Page {
    
    //async homeScreenEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > app-breadcrumb > div > ul > li:nth-child(1) > a')}
    async getCompaniesDataEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > ng-component > div > div.ui-g-12.mainDashboardSection > div > div > div:nth-child(1) > a > p-card > div > div > div.ui-card-content')}
    async getAccountsCategoryEle() {return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-search-company-data/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[1]/div/ul/li[1]/h4/p-accordion/div/p-accordiontab/div[2]/div/li[7]/a')}
    async getNoAccountsFieldEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div.p-col-12.p-lg-6 > div > ul > li:nth-child(1) > p > a')}
    async getApplyFilterEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div.p-col-12.text-right > button > span')}
    async getResultFoundEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-record-list > div > p-table > div > div.ui-table-caption.ui-widget-header.ng-star-inserted > div > div > h3')}
    async getCompanyCategoryEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-record-list > div > p-table > div > div.ui-table-caption.ui-widget-header.ng-star-inserted > div > div > div > p-multiselect > div > div.ng-tns-c14-93.ui-multiselect-trigger.ui-state-default.ui-corner-right > span')}
    async getCompanyCategorycolumnEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-record-list > div > p-table > div > div.ui-table-caption.ui-widget-header.ng-star-inserted > div > div > div > p-multiselect > div > div.ng-trigger.ng-trigger-overlayAnimation.ng-tns-c14-93.ui-multiselect-panel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div.ui-multiselect-items-wrapper > ul > p-multiselectitem:nth-child(5) > li > span')}


    //  async selectOnHomeScreenEle() {
    //  var homeScreenLink = await this.homeScreenIsEle()
    //  await homeScreenLink.waitForDisplayed(10000)
     
    //  }

    async clickOnCompanyData() {
        var companyDataLink = await this.getCompaniesDataEle()
        await companyDataLink.waitForDisplayed(10000)
         await companyDataLink.click()
     }

    async clickOnAccountCategoryEle() {
        var accountsCategoryLink = await this.getAccountsCategoryEle()
       // await accountsCategoryLink.scrollToView()
       await accountsCategoryLink.waitForDisplayed(10000)
        await accountsCategoryLink.click()
    }

    async clickOnNoAccountsEle() {
        var noAccountLink = await this.getNoAccountsFieldEle()
       await noAccountLink.waitForDisplayed(50000)
        await noAccountLink.click()
    }

    async clickOnApplyFilterEle() {
        var applyFilterLink = await this.getApplyFilterEle()
        await applyFilterLink.waitForDisplayed(10000)
        await applyFilterLink.click()
    }

    async resultFoundEleIsDisplayed() {
        var resultFoundLink = await this.getResultFoundEle()
        await resultFoundLink.waitForDisplayed(50000)
    }

    async clickOnCompanyCategoryEle() {
        var companyCategoryLink = await this.getCompanyCategoryEle()
        await companyCategoryLink.waitForDisplayed(50000)
        await companyCategoryLink.click()
    }

    async selectCompanyCategoryColumn() {
        var companyCategoryColumn = await this.getCompanyCategorycolumnEle() 
        await companyCategoryColumn.waitForDisplayed(50000)
        await companyCategoryColumn.click()
    }

}
module.exports = new  accountsCategory();