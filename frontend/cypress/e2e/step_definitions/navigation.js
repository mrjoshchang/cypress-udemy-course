import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I am on the "([^"]*)" page$/, function (page) {
  cy.fixture('config/pages').then((urls) => {
    cy.visit(urls[page].path);
  });
});
