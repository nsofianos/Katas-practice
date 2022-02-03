// function total(arr) {
//   return arr.reduce((prev, current) => prev + current);
// }

// console.log(total([1, 2, 3])); // 6

// function stringConcat(arr) {
//   return arr.reduce((prev, current) => {
//     return prev.toString() + current.toString();
//   });
// }

// console.log(stringConcat([1, 2, 3])); // "123"

function totalVotes(arr) {
  return arr.reduce((accumilator, voter) => {
    return voter.voted ? accumilator + 1 : accumilator;
  }, 0);
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7
