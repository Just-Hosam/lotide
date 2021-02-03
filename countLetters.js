const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const countLetters = (inputStr) => {
  let letterCount = {};

  for (const letter of inputStr) {
    if (letter === ' ') {
      continue;
    }
    (letterCount[letter]) ? letterCount[letter]++ : letterCount[letter] = 1;
  }

  return letterCount;
}

const testObj = countLetters("lighthouse in the house");

assertEqual(testObj.l, 1);
assertEqual(testObj.i, 2);
assertEqual(testObj.g, 1);
assertEqual(testObj.h, 4);
assertEqual(testObj.t, 2);
assertEqual(testObj.o, 2);
assertEqual(testObj.u, 2);
assertEqual(testObj.s, 2);
assertEqual(testObj.e, 3);
assertEqual(testObj.n, 1);