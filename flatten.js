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

const flatten = nestArrays => {
  let flatArr = [];

  for (const element of nestArrays) {
    if (element.length >= 1) {
      for (let k = 0; k < element.length; k++) {
        flatArr.push(element[k]);
      }
    } else if (element.length === 0){
      continue;
    } else {
      flatArr.push(element);
    }
  } 

  return flatArr;
};