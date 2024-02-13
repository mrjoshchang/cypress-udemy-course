describe("Lighthouse stuff ", () => {
  it("/playground desktop", function () {
    cy.visit("http://localhost:3000/playground");
    const thresholds = {
      performance: 50,
      accessibility: 50,
      "best-practices": 50,
      seo: 50,
      pwa: 25,
    };

    const lighthouseOptions = {
      /* ... your lighthouse options */
      formFactor: "desktop",
      screenEmulation: { disabled: true },
    };

    const lighthouseConfig = {
      settings: { output: "html" },
      extends: "lighthouse:default",
      //If output is not specified, then the json report will be generated
      /* ... your lighthouse configs */
    };

    cy.lighthouse(thresholds, lighthouseOptions, lighthouseConfig);
  });
});
