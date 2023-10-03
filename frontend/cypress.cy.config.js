const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    chromeWebSecurity: false,
    hideXHRInCommandLog: true,
    numTestsKeptInMemory: 10,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: false,
      json: true,
    },
    retries: {
      runMode: 0,
      openMode: 0,
    },
    specPattern: "**/*.cy.js",
    trashAssetsBeforeRuns: true,
    video: false,
    viewportHeight: 800,
    viewportWidth: 1200,
    async setupNodeEvents(on, config) {},
  },
});
