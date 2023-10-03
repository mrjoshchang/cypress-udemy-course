import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";

When(
  /^I select "([^"]*)" from the "([^"]*)" dropdown$/,
  function (option, dropdownName) {
    getElementLocator(dropdownName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).select(option);
    });
  },
);

When(
  /^from the "([^"]*)" dropdown I select:$/,
  function (selectName, optionsTable) {
    getElementLocator(selectName);

    const options = optionsTable.transpose().rawTable[0];

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).select(options);
    });
  },
);
