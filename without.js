const eqArrays = (actualArr, expectedArr) => {

  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i] || (actualArr.length !== expectedArr.length)) {
      return false;
    }
  }

  return true;
}

const assertArraysEqual = (actualArr, expectedArr) => {

  if (eqArrays(actualArr, expectedArr)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
  
};

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