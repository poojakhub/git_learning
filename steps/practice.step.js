const { When, Then } = require('cucumber')
const Practice = require('../pages/practice.page')
//const LoginPage = require('../pages/login.page')
//const assert = require('assert')


Then('I select the LandRegistry option', async function () {
  await Practice.landRegistryClick()
  await browser.pause(4000)

});
When('I select the date so From and To option must be available', async function () {
  await Practice.dateEleClick()
  await browser.pause(5000)
});

Then('I click on From, date table must be displayed', async function () {

  await Practice.dateFromClick()
  await browser.pause(3000)

});
When('I click on small arrow next to month option ,list of month must be displayed', async function () {
  //await Practice.monthArrowClick()
  await browser.pause(4000)
});

Then('I select the month-{string} , which must be displayed into the box', async function (Month) {
  //await Practice.monthSelect(Month)
  //await browser.pause(3000)
  await Practice.monthArrowClick(Month)
  await browser.pause(4000)

});
When('I click on small arrow next to the year, list of year must be displayed', async function () {
  // await Practice.yearArrowClick()
  await browser.pause(3000)
});
Then('I select the year-{string} , which must be displayed into the box', async function (Year) {
  // await Practice.yearSelect(Year)
  await Practice.yearArrowClick(Year)
  await browser.pause(4000)
});
When('I select the date-{int} from the table ,table must be disapper and full date must be displayed into the From option', async function (Date) {
  await Practice.dateSelect(Date)
  await browser.pause(7000)
});















