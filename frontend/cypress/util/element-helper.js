import * as commonMapping from "../fixtures/config/mappings/common.json";

export function getElementLocator(elementKey, elementAlias = "elementLocator") {
  cy.location().then((currentPage) => {
    const urlPath = currentPage.pathname;
    let mapFile;

    cy.fixture("config/pages.json").then((pages) => {
      mapFile = Object.keys(pages).find((key) => {
        return new RegExp(pages[key].regexp).test(currentPage.pathname);
      });

      if (mapFile) {
        cy.fixture(`config/mappings/${mapFile}.json`).then(async function (
          pageMapping
        ) {
          if (pageMapping[elementKey] !== undefined) {
            cy.wrap(pageMapping[elementKey].toString()).as(elementAlias);
            return pageMapping[elementKey].toString();
          } else if (commonMapping[elementKey] !== undefined) {
            cy.wrap(commonMapping[elementKey].toString()).as(elementAlias);
            return commonMapping[elementKey].toString();
          } else {
            throw new Error(
              `❌ There is no mapping for this element: "${elementKey}" in the "${mapFile}.json" file ❌`
            );
          }
        });
      } else {
        throw new Error(
          `❌ There is no mapping for this page: "${urlPath}" ❌`
        );
      }
    });
  });
}
