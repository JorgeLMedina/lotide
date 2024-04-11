const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns 'true' if it compares [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns 'true' if it compares [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });
});