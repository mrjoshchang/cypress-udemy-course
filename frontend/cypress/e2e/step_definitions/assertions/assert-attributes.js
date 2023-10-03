import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";

/**
 * Checks that the attribute is present
 */
Then(
  /^the "([^"]*)" should( not)? have the attribute "([^"]*)"$/,
  function (elementName, negate, expectedAttr) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).should(`${negate ? "not." : ""}have.attr`, expectedAttr);
    });
  },
);

/**
 * Check the attribute value
 */
Then(
  /^the "([^"]*)" should( not)? have the "([^"]*)" attribute value "([^"]*)"$/,
  function (elementName, negate, attributeName, attributeValue) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).should(
        `${negate ? "not." : ""}have.attr`,
        attributeName,
        attributeValue,
      );
    });
  },
);

Then(
  /^the "(\d+(?:st|nd|rd|th))" "([^"]*)" should( not)? have the "([^"]*)" attribute value "([^"]*)"$/,
  function (ordinal, elementName, negate, attributeName, attributeValue) {
    getElementLocator(elementName);
    const index = Number(ordinal.replace(/(st|nd|rd|th)/g, "")) - 1;

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element)
        .eq(index)
        .should(
          `${negate ? "not." : ""}have.attr`,
          attributeName,
          attributeValue,
        );
    });
  },
);

/**
 * Check the css value
 */
Then(
  /^the "([^"]*)" should( not)? have the "([^"]*)" css value "([^"]*)"$/,
  function (elementName, negate, attributeName, attributeValue) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).should(
        `${negate ? "not." : ""}have.css`,
        attributeName,
        attributeValue,
      );
    });
  },
);

Then(
  /^the "(\d+(?:st|nd|rd|th))" "([^"]*)" should( not)? have the "([^"]*)" css value "([^"]*)"$/,
  function (ordinal, elementName, negate, attributeName, attributeValue) {
    getElementLocator(elementName);
    const index = Number(ordinal.replace(/(st|nd|rd|th)/g, "")) - 1;

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element)
        .eq(index)
        .should(
          `${negate ? "not." : ""}have.css`,
          attributeName,
          attributeValue,
        );
    });
  },
);
