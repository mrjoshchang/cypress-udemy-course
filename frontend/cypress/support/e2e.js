// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-axe";
import "@cypress-audit/lighthouse/commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// cypress/support/e2e.ts
beforeEach(function () {
  const world = {
    counter: 0,
    foo: "",

    setTo(varName, value) {
      this[varName] = value;
    },

    incrementBy(varName, number) {
      this[varName] += number;
    },

    decrementBy(varName, number) {
      this[varName] = this[varName] - number;
    },
  };

  Object.assign(this, world);
});
