const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it('returns "true" for { color: "red", size: "medium" } and { size: "medium", color: "red" }', () => {
    assert.strictEqual(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red" }), true);
  });

  it('returns "false" for { color: "red", size: "medium" } and { size: "medium", color: "red", sleeveLength: "long" }', () => {
    assert.strictEqual(eqObjects({ color: "red", size: "medium" }, { size: "medium", color: "red", sleeveLength: "long" }), false);
  });

  it('returns "true" for { colors: ["red", "blue"], size: "medium" } and { size: "medium", colors: ["red", "blue"] }', () => {
    assert.strictEqual(eqObjects({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"] }), true);
  });

  it('returns "false" for { colors: ["red", "blue"], size: "medium" } and { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }', () => {
    assert.strictEqual(eqObjects({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }), false);
  });
});


/* // Test 01
const shirtObject = {
  color: "red",
  size: "medium"
};
const anotherShirtObject = {
  size: "medium",
  color: "red"
};
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long"
};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// Test 02
console.log(`
---------------------------------------
`);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false */