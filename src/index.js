
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let k = 0;
  let resultArray = [];
  if (matrix === undefined) {
    return resultArray;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let index = i % 2 === 0 ? j : (matrix[i].length - j - 1);
      resultArray[k] = matrix[i][index];
      k++;
    }
  }
  return resultArray;
}

