import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";

When(/^I upload "([^"]*)" at "([^"]*)"$/, function (filename, elementName) {
  getElementLocator(elementName);

  cy.get("@elementLocator").should("exist", { timeout: 10000 });
  cy.get("@elementLocator").then((element) => {
    cy.get(element).selectFile(`cypress/fixtures/uploads/${filename}`, {
      force: true,
    });
  });
});
