const eqArrays = (actualArr, expectedArr) => {
  let greaterArrLength = 0;

  (actualArr.length >= expectedArr.length) ? greaterArrLength = actualArr.length : greaterArrLength = expectedArr.length;

  for (let i = 0; i < greaterArrLength; i++) {
    if (actualArr[i] !== expectedArr[i]) {
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
  
}