const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
const names = characters.map((character) => character.name);

//2. Get array of all heights
const heights = characters.map((character) => character.height);

//3. Get array of objects with just name and height properties
const minifiedRecords = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));

//4. Get array of all first names
const firstNames = characters.map((character) => character.name.split(" ")[0]);

// console.log(firstNames);
// console.log(names);
// console.log(heights);
// console.log(namesAndHeights);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => (acc += cur.mass), 0);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => (acc += cur.height), 0);

//3. Get total number of characters by eye color
const totalEyeColor = characters.reduce((acc, cur) => {
  acc[cur.eye_color] = (acc[cur.eye_color] || 0) + 1;
  return acc;
}, {});

//4. Get total number of characters in all the character names
const totalCharactersInNames = characters.reduce(
  (acc, cur) => (acc += cur.name.length),
  0
);

// console.log(totalMass);
// console.log(totalHeight);
// console.log(totalEyeColor);
// console.log(totalCharactersInNames);

//***FILTER***
//1. Get characters with mass greater than 100
const heavyCharacters = characters.filter((character) => character.mass > 100);

//2. Get characters with height less than 200
const tallCharacters = characters.filter((character) => character.height < 200);

//3. Get all male characters
const maleCharacters = characters.filter(
  (character) => character.gender === "male"
);

//4. Get all female characters
const femaleCharacters = characters.filter(
  (character) => character.gender === "female"
);

// console.log(heavyCharacters);
// console.log(tallCharacters);
// console.log(maleCharacters);
// console.log(femaleCharacters);

//***SORT***
//1. Sort by mass
const sortedByMass = characters.sort((a, b) => a.mass - b.mass);

//2. Sort by height
const sortedByHeight = characters.sort((a, b) => a.height - b.height);

//3. Sort by name
const sortedByName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});

//4. Sort by gender
const sortedByGender = characters.sort((a, b) => {
  if (a.gender === "male") return -1;
  return 1;
});

// console.log(sortedByMass);
// console.log(sortedByHeight);
// console.log(sortedByName);
// console.log(sortedByGender);

//***EVERY***
//1. Does every character have blue eyes?
const allBlue = characters.every((character) => character.eye_color === "blue");

//2. Does every character have mass more than 40?
const allHeavy = characters.every((character) => character.mass > 40);

//3. Is every character shorter than 200?
const allShort = characters.every((character) => character.height < 200);

//4. Is every character male?
const allMale = characters.every((character) => character.gender === "male");

// console.log(allBlue);
// console.log(allHeavy);
// console.log(allShort);
// console.log(allMale);

//***SOME***
//1. Is there at least one male character?
const oneMale = characters.some((character) => character.gender === "male");

//2. Is there at least one character with blue eyes?
const oneBlue = characters.some((character) => character.eye_color === "blue");

//3. Is there at least one character taller than 210?
const oneTall = characters.some((character) => character.height > 210);

//4. Is there at least one character that has mass less than 50?
const oneSmall = characters.some((character) => character.mass < 50);

// console.log(oneMale);
// console.log(oneBlue);
// console.log(oneTall);
// console.log(oneSmall);
