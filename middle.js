const middle = function (newArr) {
  const arrLength = newArr.length;
  if (arrLength < 3) {
    return [];
  } else if (arrLength % 2 !== 0) {
    return [newArr[Math.floor(arrLength / 2)]];
  } else {
    return [newArr[arrLength / 2 - 1], newArr[arrLength / 2]];
  }
};

module.exports = middle;