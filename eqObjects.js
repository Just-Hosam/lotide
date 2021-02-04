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

const eqObjects = function(object1, object2) {
  let sortedFirstKeys = Object.keys(object1).sort();
  let sortedSecondKeys = Object.keys(object2).sort();

  if (!eqArrays(sortedFirstKeys, sortedSecondKeys)) { return false; };

  for (let i = 0; i < sortedFirstKeys.length; i++) {

    if (Array.isArray(object1[sortedFirstKeys[i]]) && Array.isArray(object2[sortedSecondKeys[i]])) {
      if (!eqArrays(object1[sortedFirstKeys[i]], object2[sortedSecondKeys[i]])) { return false; };
    } else if (object1[sortedFirstKeys[i]] !== object2[sortedSecondKeys[i]]) { 
      return false;
    }

  }

  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

