const assertEqual = require("../assertEqual");
const tail = require("../tail");

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

const wordsTail = tail(words);
const emptyTail = tail(empty);

assertEqual(wordsTail.length, 2);
assertEqual(wordsTail[0], "Lighthouse");
assertEqual(wordsTail[1], "Labs");
assertEqual(tail(nemptyTailone)[0], undefined);
assertEqual(emptyTail[0], undefined);
assertEqual(emptyTail.length, 0);
assertEqual(words.length, 3);