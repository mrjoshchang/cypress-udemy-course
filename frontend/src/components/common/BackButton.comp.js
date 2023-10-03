import React from "react";
import BackButton from "./BackButton";

describe("<BackButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BackButton />);
    cy.get('[data-cy="Back"]').should("have.text", "Back");
    cy.get('[data-cy="Back"]').should("have.attr", "href", "/playground");
    cy.get('[data-cy="Back"]').should("have.css", "color", "rgb(0, 0, 238)");
    // cy.get('[data-cy="Back"]').should(
    //   "have.css",
    //   "font",
    //   '16px "Times New Roman"'
    // );
  });
});
