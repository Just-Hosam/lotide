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
  
}

const middle = (inputArr) => {
  let centerOfArr = inputArr.length / 2;
  let finalArr = [];
  
  inputArr.length % 2 === 0 ? finalArr = [inputArr[centerOfArr - 1], inputArr[centerOfArr]] : null;
  inputArr.length % 2 !== 0 ? finalArr = [inputArr[Math.floor(centerOfArr)]] : null;
  inputArr.length <= 2 ? finalArr = [] : null;

  return finalArr;
}