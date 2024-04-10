// This function returns a new array with all but the first indexed element from a given array.
const tail = function (arr) {
  const arrTail = arr.slice(1);
  return arrTail;
};

module.exports = tail;