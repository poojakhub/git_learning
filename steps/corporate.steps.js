const { Given, When, Then } = require('cucumber')
const assert = require('assert')
//const Login = require('../pages/login.page')
const Dashboard = require('../pages/dashboard.page')
const Corporate = require('../pages/corporate.page')






When('I click on corporate land', async function () {
  var corporateLand = await Dashboard.corporateLand()
  await corporateLand.click()
  await browser.pause(1000)
});



When('I apply price filters between {string} and {string}', async function (min, max) {
  var price = await Corporate.price()
  var minCost = await Corporate.minCost()
  var maxCost = await Corporate.maxCost()
  var applyPrice = await Corporate.applyPrice()
  var applyFilter = await Corporate.applyFilter()

  await price.click()
  await minCost.setValue(min)
  await maxCost.setValue(max)
  await applyPrice.click()
  await applyFilter.click()


});



Then('I should see results with price between {string} and {string}', async function (min, max) {
  var priceAmount = await Corporate.priceAmount()
  var priceAmountText = await priceAmount.getText()
  var priceAmountNum = parseInt(priceAmountText.replace(',',''))
  console.log("price",priceAmountText)
  assert(priceAmountNum >= min)
  assert(priceAmountNum <= max)
  await browser.pause(3000)

});
