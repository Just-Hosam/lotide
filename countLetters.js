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

module.exports = countLetters;