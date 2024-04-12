const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;