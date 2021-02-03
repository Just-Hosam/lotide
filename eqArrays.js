const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const eqArrays = (actualArr, expectedArr) => {

  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i] || (actualArr.length !== expectedArr.length)) {
      return false;
    }
  }

  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);