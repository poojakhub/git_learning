// import LoginPage from '../pages/login.page'
const LoginPage = require('../pages/login.page')
// import HomePage from '../pages/home.page'
const HomePage = require ('../pages/home.page')

const { Given, When, Then } = require('cucumber')
const assert = require ('assert');

Given('I am on dataGardener website', async function () {
  await LoginPage.open();
  await browser.pause(5000)

  // var title = await LoginPage.getTitle();
  // assert.deepEqual(title, "log in | Product | Data Gardener");
});

Then('A login form should appear', async function () {
  var isVisible = await LoginPage.isLoginFormDisplayed()
  assert.deepEqual(isVisible, true);
 });

When('I enter {string} and {string}', async function (username, password) {
  await LoginPage.login(username, password);
  await browser.pause(5000)
});


Then('I should see home screen', async function () {
  var isVisible = await HomePage.isLogoutElementVisible();
  assert.deepEqual(isVisible, true);

 
  var logoutBtn = await browser.$('body > app-root > app-main > div > div > div.layout-main > app-breadcrumb > div > div > a:nth-child(2)')
  await logoutBtn.click();
  await browser.pause(10000);
});