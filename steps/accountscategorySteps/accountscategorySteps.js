// import LoginPage from '../pages/login.page'
const accountsCategory = require('../../pages/accountcategorypages/accountcategory.page')
// import HomePage from '../pages/home.page'
const HomePage = require ('../../pages/home.page')

const { Given, When, Then } = require('cucumber')
const assert = require ('assert');

// Then('I should see home screen', async function () {
//      await accountsCategory.selectOnHomeScreenEle()     
//     var value = await homeScreenLink.isDisplayed()
//     assert.deepequal(true, value)
//      var actual = await homeScreenLink.isDisplayed()
//     return actual
//  });

 When('I click on companies data', async function () {
     await accountsCategory.clickOnCompanyData()
     await browser.pause(10000)
});


When('I click on category', async function () {
    await accountsCategory.clickOnCategoryEle()
    //await browser.pause(10000)
});

When('I click on private limited company', async function () {
    await accountsCategory.clickOnPtvCompanyEle()
    //await browser.pause(10000)
});

When('I click on apply filter button', async function () {
    await accountsCategory.clickOnApplyFilterEle();
    await browser.pause(10000)
});

Then('Results screen should appear', async function() {
    var actual = await accountsCategory.resultFoundEleIsDisplayed();
    assert.deepEqual(true, actual)
    //await browser.pause(10000)
});

When('I add column \'Company Category\'', async function () {
    await accountsCategory.clickOnCompanyCategoryEle();
    await browser.pause(10000)
});

Then('\'Company Category\' column should appear' , async function () {
    await accountsCategory.selectCompanyCategoryColumn();
});

When('For all reacords the category should be {string}', async function (category) {
   await accountsCategory.selectCompanyRecordsEle(category);
   await  accountsCategory.pause();
});
