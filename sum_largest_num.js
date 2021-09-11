const sumLargestNumbers = (array) => {
  let largestNum = 0;
  let secondLargestNum = 0;

  for (const num of array) {
    if (num > largestNum && num > secondLargestNum) {
      //largestNum gets new highest value, secondLargestNum gets old largestNum value
      secondLargestNum = largestNum;
      largestNum = num;
    }
  }

  //return sum of largest numbers
  return largestNum + secondLargestNum;
};

//Expected output: 11, 5, 126
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));