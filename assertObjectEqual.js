const eqArrays = (actualArr, expectedArr) => {

  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i] || (actualArr.length !== expectedArr.length)) {
      return false;
    }
  }

  return true;
};

const eqObjects = function(object1, object2) {
  let sortedFirstKeys = Object.keys(object1).sort();
  let sortedSecondKeys = Object.keys(object2).sort();

  if (sortedFirstKeys.length !== sortedSecondKeys.length) { return false; };
  if (!eqArrays(sortedFirstKeys, sortedSecondKeys)) { return false; };

  for (let i = 0; i < sortedFirstKeys.length; i++) {

    if (Array.isArray(object1[sortedFirstKeys[i]]) && Array.isArray(object1[sortedSecondKeys[i]])) {
      if (!eqArrays(object1[sortedFirstKeys[i]], object2[sortedSecondKeys[i]])) { return false; };
    } else if (object1[sortedFirstKeys[i]] !== object2[sortedSecondKeys[i]]) { 
      return false; 
    }

  }

  return true;
};

const assertObjectEqual = (actualObj, expectedObj) => {
  const inspect = require('util').inspect;

  if (eqObjects(actualObj, expectedObj)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualObj)} === ${inspect(expectedObj)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actualObj)} !== ${inspect(expectedObj)}`);
  }

}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectEqual(cd, cd2); // => false