import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";
const chaiSorted = require("chai-sorted");
chai.use(chaiSorted);

Then(
  /^the "([^"]*)" table should( not)? have the headers:$/,
  function (tableName, negate, headersTable) {
    getElementLocator(tableName);
    const headers = headersTable.raw()[0];

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(`${element} th`).each(($el) => {
        if (!negate) expect(headers).includes($el.text().trim());
        else {
          expect(headers).to.not.include($el.text().trim());
        }
      });
    });
  }
);

Then(
  /^the "([^"]*)" table should( not)? include the rows?:$/,
  function (tableName, negate, dataRow) {
    getElementLocator(tableName);
    const numOfRowsToCheck = dataRow.rows().length;

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get("@elementLocator").then((element) => {
      cy.get(element)
        .find("tr")
        .then((trs) => {
          const actualTableRows = [[]];
          Cypress.$(trs).each((_, tr) => {
            const row = [];
            const tds = Cypress.$(tr).find("td");
            Cypress.$(tds).each((_, td) => {
              row.push(td.innerText);
            });
            actualTableRows.push(row);
          });

          for (
            let dataTableIndex = 0;
            dataTableIndex < numOfRowsToCheck;
            dataTableIndex++
          ) {
            const expectedRow = dataRow.rows()[dataTableIndex];

            if (negate) {
              expect(JSON.stringify(actualTableRows)).to.not.include(
                JSON.stringify(expectedRow)
              );
            } else {
              expect(JSON.stringify(actualTableRows)).to.include(
                JSON.stringify(expectedRow)
              );
            }
          }
        });
    });
  }
);

Then(
  /^the "([^"]*)" text column should be sorted in (ascending|descending) order$/,
  function (columnName, sortType) {
    cy.contains("th", columnName)
      .invoke("index")
      .then((index) => {
        cy.get(`table td:nth-child(${index + 1})`).then(($cells) => {
          const names = Cypress._.map($cells, ($cell) => $cell.innerText);
          if (sortType === "ascending") {
            expect(names).to.be.ascending;
          }
          if (sortType === "descending") {
            expect(names).to.be.descending;
          }
        });
      });
  }
);

Then(
  /^the "([^"]*)" number column should be sorted in (ascending|descending) order$/,
  function (columnName, sortType) {
    cy.contains("th", columnName)
      .invoke("index")
      .then((index) => {
        cy.get(`table td:nth-child(${index + 1})`).then(($cells) => {
          const names = Cypress._.map($cells, ($cell) =>
            parseFloat($cell.innerText)
          );
          if (sortType === "ascending") {
            expect(names).to.be.ascending;
          }
          if (sortType === "descending") {
            expect(names).to.be.descending;
          }
        });
      });
  }
);
