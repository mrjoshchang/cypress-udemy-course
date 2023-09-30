import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I set "([^"]*)" to (\d+)$/, function (varName, number) {
  this.setTo(varName, number);
});

Given(/^I set "([^"]*)" to "([^"]*)"$/, function (varName, strValue) {
  this.setTo(varName, strValue);
});

When(/^I increment the "([^"]*)" by (-?\d+)$/, function (varName, number) {
  this.incrementBy(varName, number);
});

When(/^I decrement the "([^"]*)" by (-?\d+)$/, function (varName, number) {
  this.decrementBy(varName, number);
});
