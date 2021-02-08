const eqArrays = require('./eqArrays-Recursive');

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