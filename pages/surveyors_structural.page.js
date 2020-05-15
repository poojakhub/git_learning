const Page = require('./page')
const assert = require('assert')
class Surveyors extends Page {
    async landRegistryEle() { return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > ng-component > div > div.ui-g-12.mainDashboardSection > div > div > div:nth-child(2) > a > p-card > div > div > div.ui-card-title.ng-star-inserted') }
    async applyButton() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[2]/div/div/div/div/div[2]/p-button/button/span') }
    async filterOptions() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[1]/div') }
    async countyEle() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[1]/div/ul/li[9]/h4/a') }
    async searchIconEle() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[2]/div/div/p-listbox/div/div[2]/div/input') }
    async surreyOption() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[2]/div/div/p-listbox/div/div[3]/ul/li[8]/span') }
    //async surreyOption() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[2]/div/div/p-listbox/div/div[3]/ul/li[2]/span') }
    //async surreyOption(){return await browser.$('body > app-root > app-main > div > div > div.layout-main > div > app-land-registry > div > div > app-filter-sidebar > div > div.fixedSidebarPanel.panelRight > div > div:nth-child(2) > div.p-col-12.p-lg-6 > div > div > p-listbox > div > div.ui-listbox-list-wrapper > ul > li.ui-listbox-item.ui-corner-all.ui-state-highlight.ng-star-inserted')}
    async buildTypeEle() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[1]/div/ul/li[10]/h4/a') }
    async oldBuildEle() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[2]/div/div/p-listbox/div/div[3]/ul/li[1]/span') }
    async propertyTypeEle() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[1]/div/ul/li[12]/h4/a') }
    async detachedEle() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[2]/div/div/p-listbox/div/div[3]/ul/li[1]/span') }
    async applyFilterEle() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[4]/button[2]/span') }
    async resultTableEle() { return await browser.$$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-record-list/div/p-table/div/div[2]/div/div[2]/table/tbody/tr') }
    async selectResultDataEle() { return await browser.$$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-record-list/div/p-table/div/div[2]/div/div[2]/table/tbody/tr/td[1]/p-tablecheckbox/div/div[2]') }


    async landRegistryEleClick() {
        var landRegiEle = await this.landRegistryEle()
        await landRegiEle.click()
    }
    async applyButtonClick() {
        var applyButton = await this.applyButton()
        await applyButton.click()
    }
    async selectOption() {
        var filterOptions = await this.filterOptions()
    }
    async countyEleClick() {
        var countyEle = await this.countyEle()
        await countyEle.click()

    }

    async searchIconEleClick() {
        var searchIconEle = await this.searchIconEle()
        //await searchIconEle.waitForDisplayed()
        await browser.pause(5000)
        await searchIconEle.click()
        await searchIconEle.setValue('surrey')
        await browser.pause(3000)
        var surreyOption = await this.surreyOption()
        await surreyOption.click()

    }
    async buildTypeEleClick() {
        var buildTypeEle = await this.buildTypeEle()
        await buildTypeEle.click()

    }
    async oldBuildEleClick() {
        var oldBuildEle = await this.oldBuildEle()
        await oldBuildEle.click()
    }
    async propertyTypeClick() {
        var propertyTypeEle = await this.propertyTypeEle()
        await propertyTypeEle.click()
    }
    async detachedEleClick() {

        var detachedEle = await this.detachedEle()
        await detachedEle.click()
    }
    async applyFilterEleClick() {
        var applyFilterEle = await this.applyFilterEle()
        await applyFilterEle.click()
    }
    async resultTable() {
        var resultTableEle = await this.resultTableEle()
        for (var i = 0; i < resultTableEle.length - 70; i++) {
            // var resultTableEle = await this.resultTableEle()

            var detachedResult = await resultTableEle[i].$('./td[2]')
            var detachedResultTxt = await detachedResult.getText()
            assert.deepEqual(detachedResultTxt, 'Detached')
            await browser.pause(300)

            var oldBuildResult = await resultTableEle[i].$('./td[5]')
            var oldBuildResultTxt = await oldBuildResult.getText()
            assert.deepEqual(oldBuildResultTxt, 'Old Build')
            await browser.pause(300)

            var countyResult = await resultTableEle[i].$('./td[13]')
            var countyResultTxt = await countyResult.getText()
            assert.deepEqual(countyResultTxt, 'Surrey')
            await browser.pause(300)

        }
    }


    async selecResultData() {
        //var selectResultDataEle = await this.selectResultDataEle()
        for (var i = 0; i <= 2; i++) {
            var selectResultDataEle = await this.selectResultDataEle()
            await selectResultDataEle[i].click()
            await browser.pause(2000)
        }



    }






}
module.exports = new Surveyors