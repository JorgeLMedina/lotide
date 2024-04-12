const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it('returns [1, 11] for letter "i" in "lighthouse in the house"', () => {
    const result = letterPositions("lighthouse in the house");
    assert.deepStrictEqual(result.i, [1, 11])
  });

  it('returns [9, 16, 22] for letter "e" in "lighthouse in the house"', () => {
    const result = letterPositions("lighthouse in the house");
    assert.deepStrictEqual(result.e, [9, 16, 22])
  });

  it('returns [3, 5, 15, 18] for letter "h" in "lighthouse in the house"', () => {
    const result = letterPositions("lighthouse in the house");
    assert.deepStrictEqual(result.h, [3, 5, 15, 18])
  });

  it('returns [12] for letter "n" in "lighthouse in the house"', () => {
    const result = letterPositions("lighthouse in the house");
    assert.deepStrictEqual(result.n, [12])
  });
});