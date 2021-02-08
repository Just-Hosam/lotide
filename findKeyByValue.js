const findKeyByValue = (inputObj, inputStr) => {
  let keyArr = Object.keys(inputObj);

  for (const element of keyArr) {
    if (inputObj[element] === inputStr) {
      return element;
    }
  }

};

module.exports = findKeyByValue;