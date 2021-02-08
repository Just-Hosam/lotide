const middle = (inputArr) => {
  let centerOfArr = inputArr.length / 2;
  let finalArr = [];
  
  inputArr.length % 2 === 0 ? finalArr = [inputArr[centerOfArr - 1], inputArr[centerOfArr]] : null;
  inputArr.length % 2 !== 0 ? finalArr = [inputArr[Math.floor(centerOfArr)]] : null;
  inputArr.length <= 2 ? finalArr = [] : null;

  return finalArr;
}

module.exports = middle;