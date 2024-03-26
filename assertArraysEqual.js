const assertArraysEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let checker = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      checker++;
    }
  };
  if (checker === 0) {
    return true;
  } else {
    return false;
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3]), true);