// practice for string API exercises from jskatas.org

// string.includes() --> determines if a string can be found inside another one

// finding a single character
//      can be done (a character is also a string, in JS)
//      reports false if character was not found

const findSingleCharacter = (char, string) => {
  return string.includes(char);
};

// find a string
//      that matches exactly

// search for an empty string, is always true
//      in an empty string
//      in abc

// special/corner cases
//      search for undefined in a string fails
//      searches are case-sensitive
//      must NOT be a regular expression

// coerces the searched "thing" into a string
//      e.g. from a number
//      e.g. from an array
//      e.g. from an object, with a toString() method

// takes a position from where to start searching
//      does not find a after position 1 in abc
//      even the position gets coerced

// invalid positions get converted to 0
//      e.g. undefined
//      negative numbers
//      NaN

//testing
// console.log(findSingleCharacter("a", "amazing")); //expected true
// console.log(findSingleCharacter("a", "terrible")); //expected false
// console.log(findSingleCharacter("%", "&%$#")); //expected true
