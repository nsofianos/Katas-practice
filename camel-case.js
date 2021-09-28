const camelCase = function (input) {
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === " ") {
      input.replace(input.charAt(i + 1), input.charAt(i + 1).toUpperCase());
    }
  }
  console.log(input);
};

// expected output:
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious
console.log(camelCase("this is a string"));
// console.log(camelCase("loopy lighthouse"));
// console.log(camelCase("supercalifragalisticexpialidocious"));
