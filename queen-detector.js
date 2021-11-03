const queenThreat = () => {};

const generateBoard = (queen1, queen2) => {
  const board = [];
  for (let i = 0; i < 8; i++) {
    board.push([]);
  }
  for (row of board) {
    for (let i = 0; i < 8; i++) {
      if (
        (board.indexOf(row) === queen1[0] && row.length === queen1[1]) ||
        (board.indexOf(row) === queen2[0] && row.length === queen2[1])
      )
        row.push(1);
      else row.push(0);
    }
  }
  return board;
};

let whiteQueen = [1, 4];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true
