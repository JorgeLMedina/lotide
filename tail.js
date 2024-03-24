const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const una = [1, 2, 3, 4, 5];

const tail = function (arr) {
  const arrTail = arr.slice(1);
  return arrTail;
};

console.log(tail(una));
console.log(una);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const empty = [1];
console.log(tail(empty));
