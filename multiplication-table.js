const multiplicationTable = (maxValue) => {
  let arr = [];
  let row = "";
  for (let j = 1; j < maxValue + 1; j++) {
    for (let i = 1; i < maxValue + 1; i++) {
      row += `${i * j} `;
    }
    arr.push(row);
    row = "";
  }
  return arr;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
