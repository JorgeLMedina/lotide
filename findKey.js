// Function takes an object and a callback, scans the object and returns
//  the first key similar to the callback result.
const findKey = function (obj, cb) {
  for (let key in obj) {
    if (cb(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;