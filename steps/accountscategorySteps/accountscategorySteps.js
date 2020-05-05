// import LoginPage from '../pages/login.page'
const accountsCategory = require('../pages/login.page')
// import HomePage from '../pages/home.page'
const HomePage = require ('../pages/home.page')

const { Given, When, Then } = require('cucumber')
const assert = require ('assert');


When('I click on companies data', async function () {
    await accountsCategory.clickOnAccountCategoryEle();
});

When('I click on Accounts category', async function () {
    await accountsCategory.clickOnAccountCategoryEle();
});

And('I select no accounts field', async function () {
    await accountsCategory.clickOnNoAccountsEle();
});

And('I click on apply filter button', async function () {
    await accountsCategory.getOnApplyFilterEle();
});

Then('Results screen should appear', async function() {
    await accountsCategory. resultFoundEleIsDisplayed();
});

When('I add column \'Company Category\'', async function () {
    await accountsCategory.clickOnCompanyCategoryEle();
});

Then('\'Company Category\' column should appear' , async function () {
    await accountsCategory.selectCompanyCategoryColumn();
});

//Then('For all reacords the category should be \'Accounts\'', async function () {
   // await accountsCategory.();
//}
