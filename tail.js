// This function compares 2 values and prints out if they are or not equivalent
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

// This function returns a new array with all but the first indexed element from a given array.
const tail = function (arr) {
  const arrTail = arr.slice(1);
  return arrTail;
};

// Test cases:
const una = [1, 2, 3, 4, 5];
console.log(tail(una));
console.log(una);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const none = [];
const empty = [1];
console.log(tail(empty));

assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");
assertEqual(tail(none)[0], undefined);
assertEqual(tail(empty)[0], undefined);
assertEqual(tail(empty).length, 0);
assertEqual(words.length, 3);
