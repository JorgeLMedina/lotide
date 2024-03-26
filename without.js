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
  let passed = `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  let failed = `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  if (eqArrays(arr1, arr2)) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

const without = function (source, itemsToRemove) {
  const newArr = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
};

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
/*
const without = function (source, itemsToRemove) {
  const newArr = [];
  for (let element of source) {
    for (let item of itemsToRemove) {
      if (element !== item) {
        newArr.push(element);
      }
    }
  }
  console.log(newArr);
};
*/