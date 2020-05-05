const Page = require('./page')

class accountCategory extends Page {
    
    async getCompaniesDataEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > ng-component > div > div.ui-g-12.mainDashboardSection > div > div > div:nth-child(1) > a > p-card > div > div')}
    async getOnAccountsCategoryEle() {return await browser.$('#ui-accordiontab-15-content > div > li:nth-child(7) > a')}
    async getOnNoAccountsFieldEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div.p-col-12.p-lg-6 > div > ul > li:nth-child(1) > p > a')}
    async getOnApplyFilterEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div.p-col-12.text-right > button > span')}
    async getOnResultFoundEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-record-list > div > p-table > div > div.ui-table-caption.ui-widget-header.ng-star-inserted > div > div > h3')}
    async getOnCompanyCategoryEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-record-list > div > p-table > div > div.ui-table-caption.ui-widget-header.ng-star-inserted > div > div > div > p-multiselect > div > div.ng-tns-c14-93.ui-multiselect-trigger.ui-state-default.ui-corner-right > span')}
    async getCompanyCategorycolumnEle() {return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-search-company-data > div > div > app-record-list > div > p-table > div > div.ui-table-caption.ui-widget-header.ng-star-inserted > div > div > div > p-multiselect > div > div.ng-trigger.ng-trigger-overlayAnimation.ng-tns-c14-93.ui-multiselect-panel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div.ui-multiselect-items-wrapper > ul > p-multiselectitem:nth-child(5) > li > span')}


    async clickOnAccountCategoryEle() {
        var accountsCategoryLink = await this.getOnAccountsCategoryEle()
       await accountsCategoryLink.waitForDisplayed(50000)
        await accountCategoryLink.click()
    }

    async clickOnNoAccountsEle() {
        var noAccountLink = await this.getOnNoAccountsFieldEle()
       await noAccountLink.waitForDisplayed(50000)
        await noAccountLink.click()
    }

    async clickOnApplyFilterEle() {
        var applyFilterLink = await this.getOnApplyFilterEle()
        await applyFilterLink.waitForDisplayed(50000)
        await applyFilterLink.click()
    }

    async resultFoundEleIsDisplayed() {
        var resultFoundLink = await this.getOnResultFoundEle()
        await resultFoundLink.waitForDisplayed(50000)
    }

    async clickOnCompanyCategoryEle() {
        var companyCategoryLink = await this.getOnCompanyCategoryEle()
        await companyCategoryLink.waitForDisplayed(50000)
        await companyCategoryLink.click()
    }

    async selectCompanyCategoryColumn() {
        var companyCategoryColumn = await this.getCompanyCategorycolumnEle() 
        await companyCategoryColumn.waitForDisplayed(50000)
        await companyCategoryColumn.click()
    }

}
module.exports = new accountCategory();