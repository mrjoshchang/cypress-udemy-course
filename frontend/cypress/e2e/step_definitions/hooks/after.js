import { After } from "@badeball/cypress-cucumber-preprocessor";

After({ tags: "@afterScenario" }, () => {
  // This hook will be executed before scenarios tagged with @afterScenario.
  cy.log("After Scenario Hook");
});
