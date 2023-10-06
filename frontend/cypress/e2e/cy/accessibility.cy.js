import { terminalLog } from "../../util/axe-helper";

describe("Accessibility stuff ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/playground/buttons");
    cy.injectAxe();
  });

  // Basic usage
  it("Has no detectable a11y violations on load", () => {
    // Test the page at initial load
    cy.checkA11y(null, null, terminalLog);
  });
});
