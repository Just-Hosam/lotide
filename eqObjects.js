const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const eqObjects = function(object1, object2) {
  let sortedFirstKeys = Object.keys(object1).sort();
  let sortedSecondKeys = Object.keys(object2).sort();

  if (sortedFirstKeys.length !== sortedSecondKeys.length) { return false; };
  for (let i = 0; i < sortedFirstKeys.length; i++) {
    if (object1[sortedFirstKeys[i]] !== object2[sortedSecondKeys[i]]) { return false; }
  }

  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

