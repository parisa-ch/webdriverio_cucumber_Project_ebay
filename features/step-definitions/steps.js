const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page.js');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async function (page) {
    await pages[page].open();
    await LoginPage.loginPage();
});

When(/^I login with (.*) and (.*)$/, async function (username, password) {
    await LoginPage.login(username,password);
    console.log(`Logged in successfully...................`);
});

Then(/^I should search a (.*)$/, async function (keyword) {
    await LoginPage.search(keyword);
});

Then(/^I should count the search results$/, async function () {
    await LoginPage.countResult();
});
