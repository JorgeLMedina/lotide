const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it('returns { Martha: 2, Julia: 1, John: 1 } for ["Martha", "Julia", "John", "Martha, "John", "Sebastian", "Pamela"] and { John: true, Julia: true, Martha: true, Pamela: false }', () => {
    assert.deepStrictEqual(countOnly(["Martha", "Julia", "John", "Martha", "John", "Sebastian", "Pamela"], { John: true, Julia: true, Martha: true, Pamela: false }), { Martha: 2, Julia: 1, John: 2 });
  });

  it('returns { pepper: 2, cheese: 3 } for ["pepper", "pepperoni", "mushroom", "cheese", "cheese", "pepper", "cheese"] and { pepper: true, mushroom: false, cheese: true, pepperoni: false }', () => {
    assert.deepStrictEqual(countOnly(["pepper", "pepperoni", "mushroom", "cheese", "cheese", "pepper", "cheese"], { pepper: true, mushroom: false, cheese: true, pepperoni: false }), { pepper: 2, cheese: 3 });
  });

  it('returns { paper: 2, sissors: 1, rock: 1 } for ["paper", "paper", "blank", "sissors", "glue", "glue", "rock"] and { paper: true, sissors: true, rock: true, glue: false }', () => {
    assert.deepStrictEqual(countOnly(["paper", "paper", "blank", "sissors", "glue", "glue", "rock"], { paper: true, sissors: true, rock: true, glue: false }), { paper: 2, sissors: 1, rock: 1 });
  });
});