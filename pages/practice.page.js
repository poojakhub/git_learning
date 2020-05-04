//const LoginPage = require('./page')
const Page = require('./page')
//const assert = require('assert')
class Practice extends Page {

  async dateEle() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[1]/div/ul/li[5]/h4/a') }
  async landRegistryEle() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/ng-component/div/div[2]/div/div/div[2]/a/p-card/div/div/div[1]') }
  async dateFromEle() { return await browser.$('/html/body/app-root/app-main/div/div/div[2]/div/app-land-registry/div/div/app-filter-sidebar/div/div[1]/div/div[2]/div[2]/div/div/div/div/div[1]/p-calendar/span/input') }
  async monthArrowEle() { return await browser.$('/html/body/div/div/div[1]/div/select[1]') }
  async yearArrowEle() { return await browser.$('/html/body/div/div/div[1]/div/select[2]') }
  async dateSelectEle() { return await browser.$('/html/body/div/div/div[2]/table/tbody/tr[1]/td[1]/a') }


  async dateEleClick() {
    var dateEle = await this.dateEle()
    await dateEle.click()
  }
  async landRegistryClick() {
    var landRegistryEle = await this.landRegistryEle()
    await landRegistryEle.click()

  }
  async dateFromClick() {
    var dateFromEle = await this.dateFromEle()
    await dateFromEle.click()
  }


  async monthArrowClick(Month) {
    var monthArrowEle = await this.monthArrowEle()
    await monthArrowEle.click()
    await browser.pause(4000)
    await monthArrowEle.selectByVisibleText(Month)

  }
  async monthSelect(Month) {
    var monthArrowEle = await this.monthArrowEle()
    await monthArrowEle.selectByVisibleText(Month)
  }

  async yearArrowClick(Year) {
    var yearArrowEle = await this.yearArrowEle()
    await yearArrowEle.click()
    await browser.pause(4000)
    await yearArrowEle.selectByVisibleText(Year)


  }
  async yearSelect(Year) {
    var yearArrowEle = await this.yearArrowEle()
    await yearArrowEle.selectByVisibleText(year)

  }

  async dateSelect(Date) {
    var dateSelectEle = await this.dateSelectEle()
    await dateSelectEle.click()
  }








}
module.exports = new Practice()