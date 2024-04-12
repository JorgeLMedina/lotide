// Function RECEIVES a string as argument and RETURNS an object with the 
// all the letters from the string as key and the times that letter is 
// repeated as value.
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

module.exports = countLetters;