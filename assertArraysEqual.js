const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  let passed = `✅✅✅Assertion Passed: ${arr1} === ${arr2}`;
  let failed = `🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`;
  if (eqArrays(arr1, arr2)) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3]);