import React from "react";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter />);
    cy.get("p").should("have.text", "Count: 0");
    cy.get('[data-cy="increment"]').should("have.text", "Increment");
    cy.get('[data-cy="increment"]').click();
    cy.get("p").should("have.text", "Count: 1");
    cy.get('[data-cy="increment"]').click();
    cy.get('[data-cy="increment"]').click();
    cy.get("p").should("have.text", "Count: 3");
  });
});
