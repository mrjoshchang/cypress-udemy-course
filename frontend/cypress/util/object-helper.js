export function getObjectWithMatchingPartialKeys(array, object) {
  return array.filter(function (o) {
    return Object.keys(object).every(function (k) {
      return k in o && object[k] === o[k];
    });
  });
}
