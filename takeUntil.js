// Function returns a new array taking the elements from the beginning of given array
// stoping when the condition in the given callback function is fullfilled.
const takeUntil = function (array, callback) {
  const newArray = [];
  for (let item of array) {
    if (callback(item)) {
      return newArray;
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = takeUntil;