import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";

Then(
  /^the "([^"]*)" should( not)? contain the text "([^"]*)"$/,
  function (elementName, negate, expectedString) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).should(
        `${negate ? "not." : ""}contain.text`,
        expectedString
      );
    });
  }
);

Then(
  /^the "(\d+(?:st|nd|rd|th))" "([^"]*)" should( not)? contain the text "([^"]*)"$/,
  function (ordinal, elementName, negate, expectedString) {
    getElementLocator(elementName);
    const index = Number(ordinal.replace(/(st|nd|rd|th)/g, "")) - 1;

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element)
        .eq(index)
        .should(`${negate ? "not." : ""}contain.text`, expectedString);
    });
  }
);

Then(
  /^the "([^"]*)" should( not)? have the text "([^"]*)"$/,
  function (elementName, negate, expectedString) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).should(
        `${negate ? "not." : ""}have.text`,
        expectedString
      );
    });
  }
);

Then(
  /^the "(\d+(?:st|nd|rd|th))" "([^"]*)" should( not)? have the text "([^"]*)"$/,
  function (ordinal, elementName, negate, expectedString) {
    getElementLocator(elementName);
    const index = Number(ordinal.replace(/(st|nd|rd|th)/g, "")) - 1;

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element)
        .eq(index)
        .should(`${negate ? "not." : ""}have.text`, expectedString);
    });
  }
);

Then(
  /^the "([^"]*)" should( not)? have the value "([^"]*)"$/,
  function (elementName, negate, expectedString) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).should(
        `${negate ? "not." : ""}have.value`,
        expectedString
      );
    });
  }
);

Then(
  /^the "([^"]*)" should( not)? contain the text:$/,
  function (elementName, negate, expectedString) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).should(
        `${negate ? "not." : ""}contain.text`,
        expectedString
      );
    });
  }
);
