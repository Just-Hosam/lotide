const eqArrays = (actualArr, expectedArr) => {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

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