const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const nodePolyfills =
  require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  env: {
    omitFiltered: true,
    filterSpecs: true,
  },
  e2e: {
    baseUrl: "http://localhost:3000/",
    chromeWebSecurity: false,
    hideXHRInCommandLog: true,
    projectId: "c4ax8t",
    numTestsKeptInMemory: 10,
    reporter: "mocha-junit-reporter",
    reporterOptions: {
      jenkinsMode: true,
      mochaFile: "cypress/reports/test-result-[hash].xml",
      rootSuiteTitle: "Cypress",
      suiteTitleSeparatedBy: ".", // suites separator, default is space (' '), or period ('.') in jenkins mode
      testsuitesTitle: true,
      toConsole: false,
      useFullSuiteTitle: true,
    },
    retries: {
      runMode: 0,
      openMode: 0,
    },
    specPattern: "**/*.feature",
    trashAssetsBeforeRuns: true,
    video: false,
    viewportHeight: 800,
    viewportWidth: 1200,
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber()); //For cypress cucumber preprocessor
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
});
