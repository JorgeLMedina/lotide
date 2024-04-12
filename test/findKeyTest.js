const assert = require("chai").assert;
const findKey = require("../findKey");

describe("#findKey", () => {
  it('returns "noma" for { "Blue Hill": { stars: 1 }, Akaleri: { stars: 3 }, noma: { stars: 2 }, elBulli: { stars: 3 }, Ora: { stars: 2 }, Akelarre: { stars: 3 }, } and (x) => x.stars === 2', () => {
    assert.strictEqual(findKey({ "Blue Hill": { stars: 1 }, Akaleri: { stars: 3 }, noma: { stars: 2 }, elBulli: { stars: 3 }, Ora: { stars: 2 }, Akelarre: { stars: 3 } }, (x) => x.stars === 2), "noma");
  });

  it('returns "threeTons" for { "Sedan": { wheels: 4 }, threeTons: { wheels: 6 }, suv: { wheels: 4 }, trailer: { wheels: 10 }, coupe: { wheels: 4 }, gt: { wheels: 4 } } and x => x.wheels === 6', () => {
    assert.strictEqual(findKey({ "Sedan": { wheels: 4 }, threeTons: { wheels: 6 }, suv: { wheels: 4 }, trailer: { wheels: 10 }, coupe: { wheels: 4 }, gt: { wheels: 4 } }, x => x.wheels === 6), "threeTons");
  });

  it('returns "bacteria" for { "mammal": { legs: 4 }, insect: { legs: 6 }, bird: { legs: 2 }, reptile: { legs: 4 }, bacteria: { legs: 0 }, fungi: { legs: 0 } } and x => x.legs === 0', () => {
    assert.strictEqual(findKey({ "mammal": { legs: 4 }, insect: { legs: 6 }, bird: { legs: 2 }, reptile: { legs: 4 }, bacteria: { legs: 0 }, fungi: { legs: 0 } }, x => x.legs === 0), "bacteria");
  });
});