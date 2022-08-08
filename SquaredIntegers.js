const squareList = arr => {
  return arr.filter(num => (Number.isInteger(num) && num > 0)).map(num => Math.pow(num, 2));
};
//This function should return a new array containing the squares of only the positive integers 
//(decimal numbers are not integers) when an array of real numbers is passed to it.
