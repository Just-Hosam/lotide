const eqArrays = (actualArr, expectedArr) => {
  let greaterArrLength = 0;

  (actualArr.length >= expectedArr.length) ? greaterArrLength = actualArr.length : greaterArrLength = expectedArr.length;

  for (let i = 0; i < greaterArrLength; i++) {
    if (actualArr[i] !== expectedArr[i]) {
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

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);