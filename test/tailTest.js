const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepStrictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

  it('returns [] for []', () => {
    assert.deepStrictEqual(tail([]), [])
  });

  it('returns [] for ["Yo Yo"]', () => {
    assert.deepStrictEqual(tail(["Yo Yo"]), [])
  });
});