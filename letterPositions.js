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

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("lighthouse in the house").n, [12]);