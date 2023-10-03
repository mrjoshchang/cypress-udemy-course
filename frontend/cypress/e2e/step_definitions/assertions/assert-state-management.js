import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(
  /^I verify "([^"]*)" should( not)? equal (-?\d+)$/,
  function (varName, negate, varNumber) {
    if (!negate) expect(this[varName]).to.equal(varNumber);
    else expect(this[varName]).to.not.equal(varNumber);
  },
);

Then(
  /^I verify "([^"]*)" should( not)? equal "([^"]*)"$/,
  function (varName, negate, varValue) {
    if (!negate) expect(this[varName]).to.equal(varValue);
    else expect(this[varName]).to.not.equal(varValue);
  },
);
