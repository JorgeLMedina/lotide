const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it('returns "drama" for { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" } and "The Wire"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('returns "undefined" for { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" } and "That\'s \'70s Show"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That's '70s Show"), undefined);
  });

  it('returns "comedy" for { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" } and "Brooklyn Nine-Nine"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it('returns "sci_fi" for { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" } and "The Expanse"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

  it('returns "undefined" for { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" } and "The Office"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Office"), undefined);
  });
});