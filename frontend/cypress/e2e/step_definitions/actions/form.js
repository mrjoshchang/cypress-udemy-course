import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";

When(/^I fill in the form:$/, function (formData) {
  const data = formData.raw();

  data.forEach((inputData) => {
    getElementLocator(inputData[0]);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      if (
        element.includes("input") &&
        !element.includes("type='radio'") &&
        !element.includes("type='checkbox'")
      ) {
        cy.get(element).type(inputData[1]);
      } else if (element.includes("select")) {
        cy.get(element).select(inputData[1]);
      } else if (element.includes("[type='radio']")) {
        cy.get(element).check();
      } else if (element.includes("[type='checkbox']")) {
        cy.get(element).check();
      }
    });
  });
});

When(/^I submit the "([^"]*)" form$/, function (elementName) {
  getElementLocator(elementName);

  cy.get("@elementLocator").should("exist", { timeout: 10000 });
  cy.get("@elementLocator").then((element) => {
    cy.get(element).submit();
  });
});
