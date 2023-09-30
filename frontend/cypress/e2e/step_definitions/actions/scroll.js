import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";

When(/^I scroll into view: "([^"]*)"$/, function (elmentName) {
  getElementLocator(elmentName);

  cy.get("@elementLocator").should("exist", { timeout: 10000 });
  cy.get("@elementLocator").then((element) => {
    cy.get(element).scrollIntoView({ ensureScrollable: false });
  });
});
