import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";

When(
  /^I click "([^"]*)" and the alert should contain the text "([^"]*)"$/,
  function (alertBtn, alertText) {
    getElementLocator(alertBtn);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).click({ force: true });
    });
    cy.on("window:alert", (t) => {
      expect(t).to.equal(alertText);
    });
  },
);

When(
  /^I click "([^"]*)" and the confirm alert should contain the text "([^"]*)"$/,
  function (alertBtn, alertText) {
    getElementLocator(alertBtn);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).click({ force: true });
    });

    cy.on("window:confirm", (t) => {
      expect(t).to.equal(alertText);
    });
  },
);

When(
  /^I click "([^"]*)" and fill in the the prompt alert with "([^"]*)"$/,
  function (alertBtn, promptInput) {
    getElementLocator(alertBtn);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.window().then((win) => {
        cy.stub(win, "prompt").returns(promptInput);
        cy.get(element).click({ force: true });
      });

      cy.on("window:alert", (t) => {
        expect(t).to.equal(`You entered: ${promptInput}`);
      });
    });
  },
);
