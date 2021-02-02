const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);