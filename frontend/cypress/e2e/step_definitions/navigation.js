import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am on the "([^"]*)" page$/, function (page) {
  cy.fixture("config/pages").then((urls) => {
    cy.visit(urls[page].path);
  });
});

When(/^I am directed to the "([^"]*)" page$/, function (pageUrlPath) {
  cy.fixture("config/pages").then((urls) => {
    try {
      const newPage = new RegExp(urls[pageUrlPath].regex);

      cy.location().should((loc) => {
        expect(loc.pathname).match(newPage);
      });
    } catch {
      throw Error(
        `❌ There is no page mapping for "${pageUrlPath}" in pages.json ❌`,
      );
    }
  });
});

When(/^I refresh the page$/, function () {
  cy.reload();
});
