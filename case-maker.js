const camelCase = (str) => {
  //split words into an array
  let splitWords = str.split(" ");
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

const pascalCase = (str) => {
  let splitWords = str.split(" ");
  let updatedWords = [];
  //create new array with capitalized words
  for (let word of splitWords) {
    updatedWords.push(
      word.replace(word.charAt(0), word.charAt(0).toUpperCase())
    );
  }
  //join words into a string
  return updatedWords.join("");
};

const titleCase = (str) => {
  let splitWords = str.split(" ");
  let updatedWords = [];
  //create new array with capitalized words
  for (let word of splitWords) {
    updatedWords.push(
      word.replace(word.charAt(0), word.charAt(0).toUpperCase())
    );
  }
  //join words into a string
  return updatedWords.join(" ");
};

const snakeCase = (str) => {
  let formattedString = "";
  for (const letter of str) {
    letter === " " ? (formattedString += "_") : (formattedString += letter);
  }
  return formattedString;
};

const kebabCase = (str) => {
  let formattedString = "";
  for (const letter of str) {
    letter === " " ? (formattedString += "-") : (formattedString += letter);
  }
  return formattedString;
};

const vowelCase = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let formattedString = "";
  for (const letter of str) {
    if (vowels.includes(letter)) {
      formattedString += letter.toUpperCase();
    } else formattedString += letter;
  }
  return formattedString;
};

const consonantCase = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let formattedString = "";
  for (const letter of str) {
    if (!vowels.includes(letter)) {
      formattedString += letter.toUpperCase();
    } else formattedString += letter;
  }
  return formattedString;
};

const upperCase = (str) => {
  let formattedString = "";
  for (const letter of str) {
    formattedString += letter.toUpperCase();
  }
  return formattedString;
};

const lowerCase = (str) => {
  let formattedString = "";
  for (const letter of str) {
    formattedString += letter.toLowerCase();
  }
  return formattedString;
};

const formatString = (input, format) => {
  let formattedString = "";
  switch (format) {
    case "camel":
      formattedString = camelCase(input);
      break;
    case "pascal":
      formattedString = pascalCase(input);
      break;
    case "snake":
      formattedString = snakeCase(input);
      break;
    case "kebab":
      formattedString = kebabCase(input);
      break;
    case "title":
      formattedString = titleCase(input);
      break;
    case "vowel":
      formattedString = vowelCase(input);
      break;
    case "consonant":
      formattedString = consonantCase(input);
      break;
    case "upper":
      formattedString = upperCase(input);
      break;
    case "lower":
      formattedString = lowerCase(input);
      break;
  }
  return formattedString;
};

const makeCase = function (input, formatting) {
  const prioFormats = ["camel", "pascal", "snake", "kebab", "title"];
  const secondPrioFormats = ["vowel", "consonant"];
  const thirdPrioFormats = ["upper", "lower"];

  let formattedString = input;

  //check for formatting options
  if (Array.isArray(formatting)) {
    //prioritize formatting
    for (option of formatting) {
      if (prioFormats.includes(option)) {
        formattedString = formatString(formattedString, option);
      }
    }
    for (option of formatting) {
      if (secondPrioFormats.includes(option)) {
        formattedString = formatString(formattedString, option);
      }
    }
    for (option of formatting) {
      if (thirdPrioFormats.includes(option)) {
        formattedString = formatString(formattedString, option);
      }
    }
  } else formattedString = formatString(input, formatting);
  return formattedString;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["upper", "kebab"]));
console.log(makeCase("this is a string", ["snake", "vowel"]));
console.log(makeCase("this is a string", ["kebab", "consonant"]));
