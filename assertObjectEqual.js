const { assert } = require('console');
const eqObjects = require('./eqObjects-Recursive');

const assertObjectEqual = (actualObj, expectedObj) => {
  const inspect = require('util').inspect;

  if (eqObjects(actualObj, expectedObj)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualObj)} === ${inspect(expectedObj)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actualObj)} !== ${inspect(expectedObj)}`);
  }

}

module.exports = assertObjectEqual;

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectEqual(cd, cd2); // => false