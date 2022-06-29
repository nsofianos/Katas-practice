// a series of katas from https://www.codewars.com

// 1.
// Write a function splitOddAndEven, that accepts one parameter: numbers, an array of positive numbers.
// The function should return an object with two arrays in it, one for all odd numbers and one for all even numbers.

// Input: an array of numbers.
// Output: an object with two arrays of numbers, one for the odd ones, one for the even ones.

const splitOddAndEven = (numArr) => {
  const splitResults = { odd: [], even: [] };
  for (const num of numArr) {
    num % 2 === 0 ? splitResults.even.push(num) : splitResults.odd.push(num);
  }
  return splitResults;
};

console.log(splitOddAndEven([1, 2, 3])); // expected result: {odd: [1,3], even: [2]}
console.log(splitOddAndEven([2, 4, 6])); // expected result: {odd: [], even: [2, 4, 6]}
