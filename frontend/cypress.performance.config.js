const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const fs = require("fs");
var getDirName = require("path").dirname;

module.exports = defineConfig({
  projectId: "c4ax8t",
  env: {
    omitFiltered: true,
    filterSpecs: true,
  },
  e2e: {
    baseUrl: "http://localhost:3000/",
    chromeWebSecurity: false,
    specPattern: "**/*.{feature,cy.js}",
    screenshotsFolder: "cypress/snapshots/actual",
    trashAssetsBeforeRuns: true,
    video: false,
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      // cypress-axe
      on("task", {
        log(message) {
          console.log(message);

          return null;
        },
        table(message) {
          console.table(message);

          return null;
        },
      });
      // cypress-audit/lighthouse
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse((lighthouseReport) => {
          console.log("---- Writing lighthouse report to disk ----");
          // console.log(lighthouseReport);
          const path = `cypress/reports/lighthouse/${lighthouseReport.lhr.requestedUrl.replace(
            "http://localhost:3000/",
            ""
          )}.html`;
          fs.mkdir(getDirName(path), { recursive: true }, function (err) {
            if (err) return cb(err);

            fs.writeFile(path, lighthouseReport.report, (error) => {
              error
                ? console.log(error)
                : console.log("Report created successfully");
            });
          });
        }),
      });
    },
  },
});
