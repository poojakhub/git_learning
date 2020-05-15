const { When, Then } = require('cucumber')
const Surveyors = require('../pages/surveyors_structural.page')
const assert = require('assert')

When('I click on landregistry, filter options open', async function () {
  await Surveyors.landRegistryEleClick()
  await browser.pause(5000)
});
Then('I select the surrey county', async function () {
  await Surveyors.countyEleClick()
  await browser.pause(5000)
  //await Surveyors.waitForDisplayed(5000)
  await Surveyors.searchIconEleClick()
  await browser.pause(4000)
});
Then('I select the Old build', async function () {
  await Surveyors.buildTypeEleClick()
  await browser.pause(2000)
  await Surveyors.oldBuildEleClick()
  await browser.pause(2000)
});
Then('I select the Detached property option', async function () {
  await Surveyors.propertyTypeClick()
  await browser.pause(2000)
  await Surveyors.detachedEleClick()
  await browser.pause(3000)
});
Then('Apply filter button is clicked', async function () {
  await Surveyors.applyFilterEleClick()
  await browser.pause(3000)
});
Then('The result found must be matched with our applied filter criteria.', async function () {
  await Surveyors.resultTable()
  await browser.pause(3000)
});


