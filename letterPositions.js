const letterPositions = inputStr => {
  let letterPos = {};

  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] === ' ') {
      continue;
    }
    if (letterPos[inputStr[i]]) {
      letterPos[inputStr[i]].push(i);
    } else {
      letterPos[inputStr[i]] = [i];
    }
  }

  return letterPos;
}

module.exports = letterPositions;