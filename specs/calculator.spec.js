'use strict';

module.exports = {
  'Test calculator add' : function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('//div[contains(@class,"App-intro")]', 10000)
      .click('//div[contains(@class,"numberPad")]/button[1]')
      .click('//div[contains(@class,"operationPad")]/button[contains(@id, "+")]')
      .click('//div[contains(@class,"numberPad")]/button[7]')
      .click('//div[contains(@class,"operationPad")]/button[contains(@id, "=")]')
      .assert.containsText('//div[contains(@class,"display")]', '8')
  },

  'Test calculator subtract' : function (browser) {
    browser
      .waitForElementPresent('//div[contains(@class,"App-intro")]', 10000)
      .click('//div[contains(@class,"numberPad")]/button[1]')
      .click('//div[contains(@class,"operationPad")]/button[contains(@id, "-")]')
      .click('//div[contains(@class,"numberPad")]/button[7]')
      .click('//div[contains(@class,"operationPad")]/button[contains(@id, "=")]')
      .assert.containsText('//div[contains(@class,"display")]', '-6')
  },

  'Test calculator multiply' : function (browser) {
    browser
      .waitForElementPresent('//div[contains(@class,"App-intro")]', 10000)
      .click('//div[contains(@class,"numberPad")]/button[1]')
      .click('//div[contains(@class,"operationPad")]/button[contains(@id, "*")]')
      .click('//div[contains(@class,"numberPad")]/button[7]')
      .click('//div[contains(@class,"operationPad")]/button[contains(@id, "=")]')
      .assert.containsText('//div[contains(@class,"display")]', '7')
      .end();
  }
};