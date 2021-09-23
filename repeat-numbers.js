const repeatNumbers = function (data) {
  let numbers = "";
  for (const pair of data) {
    for (let i = 0; i < pair[1]; i++) {
      numbers += pair[0].toString();
    }
    if (data.indexOf(pair) + 1 !== data.length) numbers += ", ";
  }
  return numbers;
};

// expected output
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292
console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
