const takeUntil = function(array, callback) {
  let resultArr = [];

  for (const elem of array) {
    if (callback(elem)) {
      return resultArr;
    }
    resultArr.push(elem);
  }

  return resultArr;
}

module.exports = takeUntil;