const flatten = nestArrays => {
  let flatArr = [];

  for (const element of nestArrays) {
    if (element.length >= 1) {
      for (let k = 0; k < element.length; k++) {
        flatArr.push(element[k]);
      }
    } else if (element.length === 0){
      continue;
    } else {
      flatArr.push(element);
    }
  } 

  return flatArr;
};

module.exports = flatten;