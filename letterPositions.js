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

console.log(letterPositions('hello'));