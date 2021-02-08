const eqArrays = require('./eqArrays-Recursive');

const assertArraysEqual = (actualArr, expectedArr) => {

  if (eqArrays(actualArr, expectedArr)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
  
}

module.exports = assertArraysEqual;