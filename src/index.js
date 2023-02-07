
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  let result = [];
  matrix.map (number => {
    if (matrix.indexOf(number) % 2 === 0) {
      result.push(number);
    } else {
      result.push(number.reverse());
    }
  })
  return result.flat();
}
