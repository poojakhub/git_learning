const Page = require('../../pages/page')
const assert = require ('assert');

class accountsCategory extends Page {
    
    //async homeScreenEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > app-breadcrumb > div > ul > li:nth-child(1) > a')}
    async getCompaniesDataEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > ng-component > div > div.ui-g-12.mainDashboardSection > div > div > div:nth-child(1) > a > p-card > div > div > div.ui-card-content')}
    async getCategoryEle() {return await browser.$('#ui-accordiontab-0-content > div > li:nth-child(4) > a')}
    async getPtvComanyEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div.p-col-12.p-lg-6 > div > ul > li:nth-child(1) > p > a')}
    async getApplyFilterEle() {return await browser.$('div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div.p-col-12.text-right > button.ui-button-inline.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only > span')}
    async getResultFoundEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-record-list > div > p-table > div > div.ui-table-caption.ui-widget-header.ng-star-inserted > div > div > h3')}
    async getCompanyCategoryEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-record-list > div > p-table > div > div.ui-table-caption.ui-widget-header.ng-star-inserted > div > div > div > p-multiselect > div > div.ui-multiselect-label-container > span')}
    async getCompanyCategorycolumnEle() {return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-search-company-data/div/div/app-record-list/div/p-table/div/div[1]/div/div/div/p-multiselect/div/div[4]/div[2]/ul/p-multiselectitem[5]/li')}
    async getCompanyRecordsEle() {return await browser.$$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-record-list > div > p-table > div > div.ui-table-scrollable-wrapper.ng-star-inserted > div > div.ui-table-scrollable-body > table > tbody > tr > td:nth-child(10)')}

    //  async selectOnHomeScreenEle() {
    //  var homeScreenLink = await this.homeScreenIsEle()
    //  await homeScreenLink.waitForDisplayed(10000)
     
    //  }

    async clickOnCompanyData() {
        var companyDataLink = await this.getCompaniesDataEle()
        await companyDataLink.waitForDisplayed(10000)
         await companyDataLink.click()
     }

    async clickOnCategoryEle() {
        var accountsCategoryLink = await this.getCategoryEle()
        await accountsCategoryLink.waitForDisplayed(10000)
        await accountsCategoryLink.click()
    }

    async clickOnPtvCompanyEle() {
        var noAccountLink = await this. getPtvComanyEle()
       await noAccountLink.waitForDisplayed(50000)
        await noAccountLink.click()
    }

    async clickOnApplyFilterEle() {
        var applyFilterLink = await this.getApplyFilterEle()
        await applyFilterLink.scrollIntoView()
        await applyFilterLink.waitForDisplayed(10000)
        await applyFilterLink.click()
        await browser.pause(10000)
    }

    async resultFoundEleIsDisplayed() {
        var resultFoundLink = await this.getResultFoundEle()
        await resultFoundLink.waitForDisplayed(50000)
        return await resultFoundLink.isDisplayed()
    }

    async clickOnCompanyCategoryEle() {
        var companyCategoryLink = await this.getCompanyCategoryEle()
        await companyCategoryLink.waitForDisplayed(50000)
        await companyCategoryLink.click()
    }

    async selectCompanyCategoryColumn() {
        var companyCategoryColumn = await this.getCompanyCategorycolumnEle() 
        await companyCategoryColumn.waitForDisplayed(50000)
        //await companyCategoryColumn.selectByVisibleText('Company category')
        //await companyCategoryColumn.scrollToView()
        await companyCategoryColumn.click()
        await browser.pause(20000)
    }

    async selectCompanyRecordsEle(category) {
        var companyRecods = await this.getCompanyRecordsEle()
       for (let index = 0; index < companyRecods.length; index++) {
           const element = companyRecods[index];
           const companyRecordsResult = await element.getText()
           assert.deepEqual(category, companyRecordsResult)
       }
       
       
        await browser.pause(10000)
    }

}
module.exports = new  accountsCategory();