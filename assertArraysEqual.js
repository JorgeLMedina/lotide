const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arr1, arr2) {
  let passed = `✅✅✅Assertion Passed: ${arr1} === ${arr2}`;
  let failed = `🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`;
  if (eqArrays(arr1, arr2)) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

module.exports = assertArraysEqual;