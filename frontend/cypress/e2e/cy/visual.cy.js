describe("Visual stuff", () => {
  after(() => {
    cy.task("generateReport");
  });
  it("playground full page", () => {
    cy.visit("/playground");
    cy.compareSnapshot("playground-page");
  });

  it("navbar", () => {
    cy.visit("/playground");
    cy.get("[class*='MainNavigation_header']").compareSnapshot("main-nav");
  });
});
