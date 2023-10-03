import React from "react";
import Greeting from "./Greeting";

describe("<Greeting />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Greeting name="Tester" />);
    cy.get("p").should("have.text", "Hello, Tester");
  });
});
