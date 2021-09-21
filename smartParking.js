const whereCanIPark = function (spots, vehicle) {
  let emptySpot = [];
  for (const section of spots) {
    for (const spot of section) {
      //check if a spot has been found yet
      if (emptySpot.length === 0) {
        //else check if spot is available
        if (spot === spot.toUpperCase()) {
          //validate based on vehicle type
          switch (vehicle) {
            case "regular":
              if (spot === "R") {
                emptySpot.push(section.indexOf(spot));
                emptySpot.push(spots.indexOf(section));
              }
              break;
            case "small":
              if (spot === "R" || spot === "S") {
                emptySpot.push(section.indexOf(spot));
                emptySpot.push(spots.indexOf(section));
              }
              break;
            case "motorcycle":
              if (spot === "R" || spot === "S" || spot === "M") {
                emptySpot.push(section.indexOf(spot));
                emptySpot.push(spots.indexOf(section));
              }
              break;
          }
        }
      }
    }
  }
  //return false if nothing was found
  if (emptySpot.length < 1) return false;
  else return emptySpot;
};

//expected output: [4,0]
console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

//expected output: false
console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

//expected output: [3, 1]
console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
