import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";

When(
  /^in the "([^"]*)" iframe, I click the "([^"]*)" (button|input|link)$/,
  function (iframeName, elementName) {
    getElementLocator(iframeName, "frameLocator");
    getElementLocator(elementName);

    cy.get("@frameLocator").should("exist", { timeout: 10000 });
    cy.get("@frameLocator").then((frame) => {
      cy.get("@elementLocator").then((element) => {
        cy.get(frame)
          .its("0.contentDocument")
          .its("body")
          .find(element)
          .click();
      });
    });
  }
);

When(
  /^in the "([^"]*)" iframe, I fill in the "([^"]*)" input with "([^"]*)"$/,
  function (iframeName, elementName, inputTxt) {
    getElementLocator(iframeName, "frameLocator");
    getElementLocator(elementName);

    cy.get("@frameLocator").should("exist", { timeout: 10000 });
    cy.get("@frameLocator").then((frame) => {
      cy.get("@elementLocator").then((element) => {
        cy.get(frame)
          .its("0.contentDocument")
          .its("body")
          .find(element)
          .type(inputTxt);
      });
    });
  }
);
