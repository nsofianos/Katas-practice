const conditionalSum = (values, condition) => {
  let sum = 0;

  for (const value of values) {
    //check condition, then check if each value is odd/even
    if (condition === "even" && value % 2 === 0) {
      sum += value;
    } else if (condition === "odd" && value % 2 !== 0) {
      sum += value;
    }
  }
  return sum;
};

//expected output: 6, 9, 144, 0
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
