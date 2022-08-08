const squareList = arr => {
  return arr.filter(num => (Number.isInteger(num) && num > 0)).map(num => Math.pow(num, 2));
};
