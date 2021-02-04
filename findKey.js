const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const findKey = (inputObj, callback) => {
  let keyArr = Object.keys(inputObj);

  for (const elem of keyArr) {
    if (callback(inputObj[elem])) { return elem; };
  }
}

const dataObj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(dataObj1, x => x.stars === 2), 'noma');
assertEqual(findKey(dataObj1, x => x.stars > 5), undefined);
assertEqual(findKey(dataObj1, x => x.stars >= 2), 'Akaleri');