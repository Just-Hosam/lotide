const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word + 'test'), ["groundtest", "controltest", "totest", "majortest", "tomtest"]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);