import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";

Then(
  /^the "([^"]*)" should( not)? be visible$/,
  function (elementName, negate) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).should(`${negate ? "not." : ""}be.visible`);
    });
  }
);

Then(/^the "([^"]*)" should( not)? exist$/, function (elementName, negate) {
  getElementLocator(elementName);

  cy.get("@elementLocator").should("exist", { timeout: 10000 });
  cy.get("@elementLocator").then((element) => {
    cy.get(element).should(`${negate ? "not." : ""}exist`);
  });
});
