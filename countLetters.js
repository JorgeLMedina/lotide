//Function prints a message to the console indicating if given pair of primitive values are equal
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function (string) {
  const count = {};
  for (const letter of string) {
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  return count;
};

const countLettersObj = countLetters("lighthouse in the house");

assertEqual(countLettersObj["h"], 4);
assertEqual(countLettersObj["i"], 2);
assertEqual(countLettersObj["a"], 1);
assertEqual(countLettersObj["w"], undefined);
assertEqual(countLettersObj["o"], 1);