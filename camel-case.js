const camelCase = function (input) {
  //split words into an array
  let splitWords = input.split(" ");
  let updatedWords = [];
  //create new array with capitalized words (except for first, as this is camel case)
  for (let word of splitWords) {
    if (splitWords.indexOf(word) === 0) {
      updatedWords.push(word);
    } else
      updatedWords.push(
        word.replace(word.charAt(0), word.charAt(0).toUpperCase())
      );
  }
  //join words into a string
  return updatedWords.join("");
};

// expected output:
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
