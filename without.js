const without = (sourceArr, itemsToRemove) => {
  let finalArr = sourceArr;

  for (const item of itemsToRemove) {
    let changingArr = [];
    for (const goodItem of finalArr) {
      (goodItem !== item) ? changingArr.push(goodItem) : null;
    }
    finalArr = changingArr;
  }

  return finalArr;
};

module.exports = without;