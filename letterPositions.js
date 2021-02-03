const eqArrays = (actualArr, expectedArr) => {

  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i] || (actualArr.length !== expectedArr.length)) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = (actualArr, expectedArr) => {

  if (eqArrays(actualArr, expectedArr)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
  
};

const letterPositions = inputStr => {
  let letterPos = {};

  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] === ' ') {
      continue;
    }
    if (letterPos[inputStr[i]]) {
      letterPos[inputStr[i]].push(i);
    } else {
      letterPos[inputStr[i]] = [i];
    }
  }

  return letterPos;
}

let testObj = letterPositions("lighthouse in the house")

assertArraysEqual(testObj.l, [0]);
assertArraysEqual(testObj.i, [1, 11]);
assertArraysEqual(testObj.g, [2]);
assertArraysEqual(testObj.h, [3, 5, 15, 18]);
assertArraysEqual(testObj.t, [4, 14]);
assertArraysEqual(testObj.o, [6, 19]);
assertArraysEqual(testObj.u, [7, 20]);
assertArraysEqual(testObj.s, [8, 21]);
assertArraysEqual(testObj.e, [9, 16, 22]);
assertArraysEqual(testObj.n, [12]);