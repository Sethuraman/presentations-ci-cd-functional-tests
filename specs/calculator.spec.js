'use strict';

module.exports = {
  'Test calculator add' : function (browser) {
    browser
      .url('http://localhost:3001/')
      .waitForElementPresent('//div[contains(@class,"App-intro")]', 10000)
      .click('//div[contains(@class,"numberPad")]/button[1]')
      .click('//div[contains(@class,"operationPad")]/button[1]')
      .click('//div[contains(@class,"numberPad")]/button[7]')
      .click('//div[contains(@class,"operationPad")]/button[5]')
      .assert.containsText('//div[contains(@class,"display")]', '8')
  },

  'Test calculator subtract' : function (browser) {
    browser
      .waitForElementPresent('//div[contains(@class,"App-intro")]', 10000)
      .click('//div[contains(@class,"numberPad")]/button[1]')
      .click('//div[contains(@class,"operationPad")]/button[2]')
      .click('//div[contains(@class,"numberPad")]/button[7]')
      .click('//div[contains(@class,"operationPad")]/button[5]')
      .assert.containsText('//div[contains(@class,"display")]', '-6')
  },

  'Test calculator multiply' : function (browser) {
    browser
      .waitForElementPresent('//div[contains(@class,"App-intro")]', 10000)
      .click('//div[contains(@class,"numberPad")]/button[1]')
      .click('//div[contains(@class,"operationPad")]/button[3]')
      .click('//div[contains(@class,"numberPad")]/button[7]')
      .click('//div[contains(@class,"operationPad")]/button[5]')
      .assert.containsText('//div[contains(@class,"display")]', '7')
      .end();
  }
};