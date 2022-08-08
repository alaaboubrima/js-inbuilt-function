const squareList = arr => {
  return arr.filter(num => (Number.isInteger(num) && num > 0)).map(num => Math.pow(num, 2));
};
//This function should return a new array containing the squares of only the positive integers 
//(decimal numbers are not integers) when an array of real numbers is passed to it.
console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])); //[ 16, 1764, 36 ]