const multiplicationTable = (maxValue) => {
  let table = [];
  let row = "";
  for (let j = 1; j < maxValue + 1; j++) {
    for (let i = 1; i < maxValue + 1; i++) {
      row += `${i * j} `;
    }
    table.push(row);
    row = "";
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
