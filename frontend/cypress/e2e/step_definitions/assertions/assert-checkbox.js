import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";

Then(
  /^the "([^"]*)" (radio button|checkbox) should( not)? be checked$/,
  function (elementName, _elementType, negate) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).should(`${negate ? "not." : ""}be.checked`);
    });
  }
);
