import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";

Then(
  /^the "([^"]*)" dropdown should have the values:$/,
  function (selectName, expectedValues) {
    getElementLocator(selectName);
    const options = expectedValues.transpose().rawTable[0];

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).invoke("val").should("deep.equal", options);
    });
  }
);
