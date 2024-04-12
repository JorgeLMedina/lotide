const assert = require("chai").assert;
const assertObjectsEqual = require("../assertObjectsEqual");

describe("#assertObjectsEqual", () => {
  it('returns "undefined" when it compares { color: "red", size: "medium" } and { size: "medium", color: "red" }', () => {
    assert.strictEqual(assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red" }), undefined);
  });

  it('returns "undefined" when it compares { color: "red", size: "medium" } and { size: "medium", color: "red", sleeveLength: "long" }', () => {
    assert.strictEqual(assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red", sleeveLength: "long" }), undefined);
  });
});