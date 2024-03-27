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

const middle = function (newArr) {
  const arrLength = newArr.length;
  if (arrLength < 3) {
    return [];
  } else if (arrLength % 2 !== 0) {
    return [newArr[Math.floor(arrLength / 2)]];
  } else {
    return [newArr[arrLength / 2 - 1], newArr[arrLength / 2]];
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);