const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');


defineSupportCode(({Given, When, Then}) => {
  Given(/^I open Asos's homepage$/, () => {
    const asos = client.page.asoshomepage(); //name of the page.js
    return asos.navigate(); //navigates to url specified in page.js
  });
  When(/^the page has loaded$/, () => {
    const asos = client.page.asoshomepage(); //name of the page.js
    return asos.waitForElementVisible('body', 3000)
  });
  Then(/^the title is "(.*)"$/, (text) => {
    return client.assert.title(text)
  });
  Then(/^the url contains Asos$/, () => {
    return client.assert.urlContains('asos')
  });
});
