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

const flatten = function (complexArr) {
  const wholeArr = [];
  for (let arrElement of complexArr) {
    if (!Array.isArray(arrElement)) {
      wholeArr.push(arrElement);
    } else {
      for (let subElement of arrElement) {
        wholeArr.push(subElement);
      }
    }
  }
  return wholeArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));