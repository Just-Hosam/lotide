const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const eqArrays = (actualArr, expectedArr) => {

  if (actualArr.length !== expectedArr.length) {
    return false;
  }
  for (let i = 0; i < actualArr.length; i++) {
    if (Array.isArray(actualArr[i]) && Array.isArray(expectedArr[i])) {
      if(!eqArrays(actualArr[i], expectedArr[i])) {
        return false;
      }
    } else if (actualArr[i] !== expectedArr[i]) {
      return false;
    }
  }

  return true;
}

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)// => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false