const RegPage = require('../pages/reg.page')
const { Given, When, Then } = require('cucumber');
const assert = require('assert');

//const RegPage = new RegPage();

Given('I am on https:\/\/test.datagardener.com website', async function () {
  await RegPage.open()
  await browser.pause(5000)
  //var title = await RegPage.getTitle()
  //assert.deepEqual(title,'Data Gardener')

});

When('I click on creat account link', async function () {
  await RegPage.selectcreatacc();
});

Then('I click individual account type', async function () {
  await RegPage.selectindvulacc();
});

When('I enter my full name {string},unique email address,password {string},confirm password {string},and postal code {string}',
  async function (fullNameVal, passwordVal, confirmPasswordVal, postalcodeVal) {

    var unique = new Date().getTime()
    var emailAddressVal = unique + "@mailinator.com"

    RegPage.signup(fullNameVal, emailAddressVal, passwordVal, confirmPasswordVal, postalcodeVal);

    await browser.pause(5000)
  });


When('I enter my full name {string},Email address {string},password {string},confirm password {string},and postal code {string}',
  async function (fullNameVal, emailAddressVal, passwordVal, confirmPasswordVal, postalcodeVal) {

    RegPage.signup(fullNameVal, emailAddressVal, passwordVal, confirmPasswordVal, postalcodeVal);

    await browser.pause(5000)
  });

When('I click on sign up link', async function () {
  await RegPage.selectSignup()
});

Then('Pop up messege {string} appears', async function (htr) {
  var signup = await browser.$('body > app-root > app-freesubscription > div > div > div > div:nth-child(2) > div > img')
  await signup.waitForDisplayed(30000)
})



Then('A message appears can\'t sign up, Email already exists', async function () {
  //var signup = await browser.$('body > app-root > app-createaccount > div > div > form > div > div.card > div.ui-g-12.pad-b-0 > button > span')
  //await signup.waitForDisplayed(50000)
  //await signup.click()
  browser.pause(5000);
  var errorText = await RegPage.getSignupErrorText();
  assert.deepEqual(errorText, "Can't SignUp, Email Already Exists");
});
