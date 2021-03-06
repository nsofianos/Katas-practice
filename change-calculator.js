const calculateChange = function (total, cash) {
  const denominations = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  };

  let remainingChange = cash - total;
  const totalChange = {};
  //for each denomination, check if it goes into remaining change with a remainder. if so, add to totalChange obj
  for (const denom in denominations) {
    while (remainingChange - denominations[denom] >= 0) {
      remainingChange -= denominations[denom];
      if (!totalChange[denom]) {
        totalChange[denom] = 1;
      } else {
        totalChange[denom] += 1;
      }
    }
  }
  return totalChange;
};

console.log(calculateChange(1787, 2000));

console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

//expected output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
