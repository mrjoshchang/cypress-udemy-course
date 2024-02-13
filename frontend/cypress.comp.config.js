const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportingPageTitle: "Component Test Results",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    screenshotsFolder: "cypress/reports/html",
    specPattern: "src/**/*.comp.js",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
