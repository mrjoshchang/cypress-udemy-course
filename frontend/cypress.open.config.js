const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const fs = require("fs");
var getDirName = require("path").dirname;

const cucumber = require("cypress-cucumber-preprocessor").default;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const nodePolyfills =
  require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

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
          console.log(lighthouseReport);
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
      // For cypress cucumber preprocessor
      on("file:preprocessor", cucumber());
      await addCucumberPreprocessorPlugin(on, config); // to allow json to be produced
      // To use esBuild for the bundler when preprocessing
      on(
        "file:preprocessor",
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },

  component: {
    specPattern: "**/*.comp.js",
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
