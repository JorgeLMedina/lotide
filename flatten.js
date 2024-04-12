const flatten = function (complexArr) {
  const wholeArr = [];
  for (let arrElement of complexArr) {
    if (!Array.isArray(arrElement)) {
      wholeArr.push(arrElement);
    } else {
      for (let subElement of arrElement) {
        wholeArr.push(subElement);
      }
    }
  }
  return wholeArr;
};

module.exports = flatten;