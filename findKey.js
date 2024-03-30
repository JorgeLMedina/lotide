// Functions prints out if 2 given primitive values are or not equal
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

// Function takes an object and a callback, scans the object and returns
//  the first key similar to the callback result.
const findKey = function (obj, cb) {
  for (let key in obj) {
    if (cb(obj[key])) {
      return key;
    }
  }
};

// Test cases
const test1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

console.log(test1);

const test2 = {
  "Sedan": { wheels: 4 },
  threeTons: { wheels: 6 },
  suv: { wheels: 4 },
  trailer: { wheels: 10 },
  coupe: { wheels: 4 },
  gt: { wheels: 4 },
}

const test3 = {
  "mammal": { legs: 4 },
  insect: { legs: 6 },
  bird: { legs: 2 },
  reptile: { legs: 4 },
  bacteria: { legs: 0 },
  fungi: { legs: 0 },
}

assertEqual(findKey(test2, x => x.wheels === 10), "trailer");
assertEqual(findKey(test2, x => x.wheels === 6), "threeTons");
assertEqual(findKey(test3, x => x.legs === 0), "bacteria");