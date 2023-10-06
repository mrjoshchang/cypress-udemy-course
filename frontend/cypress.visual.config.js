const { defineConfig } = require("cypress");
const fs = require("fs");
// const getCompareSnapshotsPlugin = require("cypress-visual-regression/dist/plugin");
const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");

module.exports = defineConfig({
  env: {
    omitFiltered: true,
    filterSpecs: true,
    // failSilently: false,
    // ALWAYS_GENERATE_DIFF: false,
    // SNAPSHOT_BASE_DIRECTORY: "cypress/snapshots/base",
    // SNAPSHOT_DIFF_DIRECTORY: "cypress/snapshots/diff",
    // type: "actual",
    FAILURE_THRESHOLD: 0.0,
    RETRY_OPTIONS: {
      log: true,
      limit: 2, // max number of iterations
      timeout: 10000, // time limit in ms
      delay: 1000, // delay before next iteration, ms
    },
    JSON_REPORT: {
      FILENAME: "cypress_visual_report", // default "report_[datetime].json"
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000/",
    chromeWebSecurity: false,
    specPattern: "**/*.{feature,cy.js}",
    screenshotsFolder: "cypress/snapshots/actual",
    trashAssetsBeforeRuns: true,
    video: false,
    async setupNodeEvents(on, config) {
      // visual

      getCompareSnapshotsPlugin(on, config);
    },
  },
});
