const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  };
  return true;
};

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  let countTrue = 0;
  for (const element of keys1) {
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      if (eqArrays(object1[element], object2[element]) === false) {
        return false;
      } else {
        countTrue++;
      }
    } else if (object1[element] !== object2[element]) {
      return false;
    } else if (object1[element] === object2[element]) {
      countTrue++;
    }
  }
  if (countTrue < keys1.length) {
    return false;
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  let passed = `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  let failed = `🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  if (eqObjects(actual, expected)) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

// Test 01
const shirtObject = {
  color: "red",
  size: "medium"
};
const anotherShirtObject = {
  size: "medium",
  color: "red"
};
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long"
};

assertObjectsEqual(shirtObject, anotherShirtObject);