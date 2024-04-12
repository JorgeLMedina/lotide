const assert = require("chai").assert;
const map = require("../map");

describe("#map", () => {
  it('returns ["c", "a", "r", "r", "o"] for ["car", "asteroid", "raspberry", "reptile", "oracle"] and word => word[0]', () => {
    assert.deepStrictEqual(map(["car", "asteroid", "raspberry", "reptile", "oracle"], word => word[0]), ["c", "a", "r", "r", "o"]);
  });
  it('returns ["p", "e", "p", "e"] for ["potato", "eagle", "paper", "eruption"] and word => word[0]', () => {
    assert.deepStrictEqual(map(["potato", "eagle", "paper", "eruption"], word => word[0]), ["p", "e", "p", "e"]);
  });
  it('returns ["e", "s", "p", "n"] for ["elegant", "snake", "punch", "night"] and word => word[0]', () => {
    assert.deepStrictEqual(map(["elegant", "snake", "punch", "night"], word => word[0]), ["e", "s", "p", "n"]);
  });
});