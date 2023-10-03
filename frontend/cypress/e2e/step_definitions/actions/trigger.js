import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";
import "cypress-real-events";

When(
  /^I trigger a "(mouseup|mousedown)" event on "([^"]*)"$/,
  function (eventType, elementName) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element).trigger(eventType);
    });
  },
);

When(
  /^I trigger a real "(hover)" event on "([^"]*)"$/,
  function (eventType, elementName) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      switch (eventType) {
        case "hover":
          cy.get(element).realHover({
            pointer: "mouse",
            position: "center",
            scrollBehavior: "center",
          });
          break;
        default:
          throw Error(`❌Invalid event type: ${eventType}❌`);
      }
    });
  },
);
