import { Before } from "@badeball/cypress-cucumber-preprocessor";

Before({ tags: "@beforeScenario" }, () => {
  // This hook will be executed before scenarios tagged with @beforeScenario.
  cy.log("Before Scenario Hook");
});
