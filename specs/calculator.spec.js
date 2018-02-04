'use strict';
module.exports = {

  'Test calculator add' : function (browser) {
    console.log('testing - '+browser.launchUrl)
    browser
      .url(browser.launchUrl)
      .useXpath()
      .waitForElementPresent('//div[contains(@class,"App-intro")]', 10000)
      .click('//div[contains(@class,"numberPad")]/button[1]')
      .click('//div[contains(@class,"operationPad")]/button[contains(@id, "+")]')
      .click('//div[contains(@class,"numberPad")]/button[7]')
      .click('//div[contains(@class,"operationPad")]/button[contains(@id, "=")]')
      .pause(1000)
      .assert.containsText('//div[contains(@class,"display")]', '8')
      .end()
  },

  'Test calculator subtract' : function (browser) {
    browser
      .url(browser.launchUrl)
      .useXpath()
      .waitForElementPresent('//div[contains(@class,"App-intro")]', 10000)
      .click('//div[contains(@class,"numberPad")]/button[1]')
      .click('//div[contains(@class,"operationPad")]/button[contains(@id, "-")]')
      .click('//div[contains(@class,"numberPad")]/button[7]')
      .click('//div[contains(@class,"operationPad")]/button[contains(@id, "=")]')
      .pause(1000)
      .assert.containsText('//div[contains(@class,"display")]', '-6')
      .end()
  },

  'Test calculator multiply' : function (browser) {
    browser
      .url(browser.launchUrl)
      .useXpath()
      .waitForElementPresent('//div[contains(@class,"App-intro")]', 10000)
      .click('//div[contains(@class,"numberPad")]/button[1]')
      .click('//div[contains(@class,"operationPad")]/button[contains(@id, "*")]')
      .click('//div[contains(@class,"numberPad")]/button[7]')
      .click('//div[contains(@class,"operationPad")]/button[contains(@id, "=")]')
      .pause(1000)
      .assert.containsText('//div[contains(@class,"display")]', '7')
      .end();
  }
};