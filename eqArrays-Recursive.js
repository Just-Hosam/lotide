const eqArrays = (actualArr, expectedArr) => {

  if (actualArr.length !== expectedArr.length) {
    return false;
  }
  for (let i = 0; i < actualArr.length; i++) {
    if (Array.isArray(actualArr[i]) && Array.isArray(expectedArr[i])) {
      if(!eqArrays(actualArr[i], expectedArr[i])) {
        return false;
      }
    } else if (actualArr[i] !== expectedArr[i]) {
      return false;
    }
  }

  return true;
}

module.exports = eqArrays;