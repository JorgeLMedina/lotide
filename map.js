// Functions copied from other files to verify equality
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

// Main content of this exercise
// Function executes a callback function for every element in a given array
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  } return results;
};

// Test cases
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);

const words1 = ["car", "asteroid", "raspberry", "reptile", "oracle"];
assertArraysEqual(map(words1, word => word[0]), ["c", "a", "r", "r", "o"]);
assertArraysEqual(map(words1, word => word[0]), ["a", "l", "r", "r", "o"]);

const words2 = ["potato", "eagle", "paper", "eruption"];
assertArraysEqual(map(words2, word => word[0]), ["p", "e", "p", "e"]);
assertArraysEqual(map(words2, word => word[0]), ["a", "l", "r", "r", "o"]);

const words3 = ["elegant", "snake", "punch", "night"];
assertArraysEqual(map(words3, word => word[0]), ["e", "s", "p", "n"]);
assertArraysEqual(map(words3, word => word[0]), ["a", "l", "r", "r", "o"]);

