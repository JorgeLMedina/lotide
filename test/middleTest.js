const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepStrictEqual(middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepStrictEqual(middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepStrictEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("make sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = middle(words);
    assert.deepStrictEqual(result, ["world"]);
    assert.strictEqual(words.length, 3);
  });
});