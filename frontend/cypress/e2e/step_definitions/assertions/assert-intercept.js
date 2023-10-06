import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "../../../util/element-helper";
import { getObjectWithMatchingPartialKeys } from "../../../util/object-helper";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

Then(
  /^I click "([^"]*)", intercept, and verify "(GET|POST|PUT|DELETE)" "([^"]*)" contains:$/,
  async function (elementName, method, url, responseInfo) {
    const objectArray = responseInfo.hashes();

    const uniqueAlias = generateString(10);
    cy.intercept(method, url).as(uniqueAlias);
    const elementLocator = await getElementLocator(elementName);

    cy.get(elementLocator).click({ force: true });
    cy.wait(`@${uniqueAlias}`, { timeout: 10000 }).then(
      async ({ response }) => {
        for (const indexedObject of objectArray) {
          const foundEntries = getObjectWithMatchingPartialKeys(
            response.body,
            await JSON.parse(indexedObject["objectToFind"])
          );
          if (foundEntries.length === 0) {
            throw new Error(
              `🧨 Did not find expected response object: ${JSON.stringify(
                indexedObject["objectToFind"]
              )} in response body: ${JSON.stringify(response.body)} 🧨 `
            );
          } else {
            for (const foundEntry of foundEntries) {
              expect(foundEntry).to.deep.contain(
                await JSON.parse(indexedObject["objectToFind"])
              );
            }
          }
        }
      }
    );
  }
);
