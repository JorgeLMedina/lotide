const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("returns { l: 1, a: 2, t: 1 } for 'lata'", () => {
    assert.deepStrictEqual(countLetters("lata"), { l: 1, a: 2, t: 1 });
  });

  it("returns { h: 1, o: 2, l: 1, a: 2, m: 1, i: 1, g: 1 } for 'hola amigo'", () => {
    assert.deepStrictEqual(countLetters("hola amigo"), { h: 1, o: 2, l: 1, a: 2, m: 1, i: 1, g: 1 });
  });

  it("returns { p: 1, a: 3, t: 2 } for 'patata'", () => {
    assert.deepStrictEqual(countLetters("patata"), { p: 1, a: 3, t: 2 });
  });
});