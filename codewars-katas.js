// a series of katas from https://www.codewars.com

// 1.
// Write a function splitOddAndEven, that accepts one parameter: numbers, an array of positive numbers.
// The function should return an object with two arrays in it, one for all odd numbers and one for all even numbers.

// Input: an array of numbers.
// Output: an object with two arrays of numbers, one for the odd ones, one for the even ones.

const splitOddAndEven = (numbers) => {
  const splitResults = { odd: [], even: [] };
  for (const num of numbers) {
    num % 2 === 0 ? splitResults.even.push(num) : splitResults.odd.push(num);
  }
  return splitResults;
};

// 2.
// Write a function countAmountOfEachCharacter, that accepts one parameter: inputString, a valid string.

// The function should return an object. The object has a key for every character that exists at least once in the string.
// The value for each key is how many times that character exists in the string.

// Input: a string.

// Output: an object with keys for the existing characters and values for how many times that character exists in the string.

const countAmountOfEachCharacter = (inputString) => {
  const result = inputString.split("").reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return result;
};

// ALL TESTS

// console.log(splitOddAndEven([1, 2, 3])); // expected result: {odd: [1,3], even: [2]}
// console.log(splitOddAndEven([2, 4, 6])); // expected result: {odd: [], even: [2, 4, 6]}
console.log(countAmountOfEachCharacter("hello")); // expected result: {h: 1, e: 1, l: 2, o: 1}
console.log(countAmountOfEachCharacter("My Name Is Nancy")); // expected result: { M: 1, y: 2, N: 2, a: 2, m: 1, e: 1, I: 1, s: 1, n: 1, c: 1 }
