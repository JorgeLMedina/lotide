// Main content of this exercise
// Function executes a callback function for every element in a given array
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  } return results;
};

module.exports = map;