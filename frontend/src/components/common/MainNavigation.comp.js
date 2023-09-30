import React from "react";
import MainNavigation from "./MainNavigation";

describe("<MainNavigation />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MainNavigation />);
    cy.get("li").eq(0).should("have.text", "Home");
    cy.get("a").eq(0).should("have.attr", "href", "/");

    cy.get("li").eq(1).should("have.text", "Playground");
    cy.get("a").eq(1).should("have.attr", "href", "/playground");

    cy.get("li").eq(2).should("have.text", "About");
    cy.get("a").eq(2).should("have.attr", "href", "/about");

    cy.get("li").eq(3).should("have.text", "Contact");
    cy.get("a").eq(3).should("have.attr", "href", "/contact");
  });
});
