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
    if (letter !== " ") {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

// Test cases for lower case-only strings
const countLettersObj = countLetters("lighthouse in the house");

assertEqual(countLettersObj["h"], 4);
assertEqual(countLettersObj["i"], 2);
assertEqual(countLettersObj["a"], 1);
assertEqual(countLettersObj["w"], undefined);
assertEqual(countLettersObj["o"], 1);

console.log(" ");

// Test for upper case-only strings
const countLettersObj2 = countLetters("Lighthouse in The House");

assertEqual(countLettersObj2["h"], 4);
assertEqual(countLettersObj2["i"], 2);
assertEqual(countLettersObj2["a"], 1);
assertEqual(countLettersObj2["w"], undefined);
assertEqual(countLettersObj2["o"], 1);
assertEqual(countLettersObj2["H"], 1);
assertEqual(countLettersObj2["T"], 1);

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("Lighthouse in The House"));