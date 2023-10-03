import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";

When(
  /^I (check|uncheck) the "([^"]*)" (radio button|checkbox)$/,
  function (isChecked, elementName) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      if (isChecked === "check") cy.get(element).check();
      if (isChecked === "uncheck") cy.get(element).uncheck();
    });
  },
);
