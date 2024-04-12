const without = function (source, itemsToRemove) {
  const newArr = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
};

module.exports = without;