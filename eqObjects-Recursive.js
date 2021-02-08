const eqArrays = require('./eqArrays-Recursive');

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

// const eqArrays = (actualArr, expectedArr) => {

//   for (let i = 0; i < actualArr.length; i++) {
//     if (actualArr[i] !== expectedArr[i] || (actualArr.length !== expectedArr.length)) {
//       return false;
//     }
//   }

//   return true;
// }

const eqObjects = function(object1, object2) {
  let sortedFirstKeys = Object.keys(object1).sort();
  let sortedSecondKeys = Object.keys(object2).sort();

  if (!eqArrays(sortedFirstKeys, sortedSecondKeys)) { return false; };

  for (let i = 0; i < sortedFirstKeys.length; i++) {
    let elem1 = object1[sortedFirstKeys[i]];
    let elem2 = object2[sortedSecondKeys[i]];

    if (Array.isArray(elem1) && Array.isArray(elem2) && !eqArrays(elem1, elem2)) {
      return false;
    } else if (typeof elem1 === 'object' && typeof elem2 === 'object') {
      return eqObjects(elem1, elem2);
    } else if (elem1 !== elem2) { 
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

