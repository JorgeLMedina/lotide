const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it('returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5] and x => x < 0', () => {
    assert.deepStrictEqual(takeUntil(([1, 2, 5, 7, 2, -1, 2, 4, 5]), x => x < 0), [1, 2, 5, 7, 2]);
  });

  it('returns ["I\'ve", "been", "to", "Hollywood"] for ["I\'ve", "been", "to", "Hollywood", ",", "I\'ve", "been", "to", "Redwood"] and x => x === \',\'', () => {
    assert.deepStrictEqual(takeUntil((["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]), x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });

  it('returns ["I\'ve", "been"] for ["I\'ve", "been", "to", "Hollywood", ",", "I\'ve", "been", "to", "Redwood"] and x => x === \'to\'', () => {
    assert.deepStrictEqual(takeUntil((["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]), x => x === 'to'), ["I've", "been"]);
  });
});