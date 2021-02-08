const findKey = (inputObj, callback) => {
  let keyArr = Object.keys(inputObj);

  for (const elem of keyArr) {
    if (callback(inputObj[elem])) { return elem; };
  }
};

module.exports = findKey;