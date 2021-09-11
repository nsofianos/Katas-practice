const numberOfVowels = (data) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let sumVowels = 0;

  //for each letter in string, loop thru vowels and increase sumVowels counter for each match
  for (let i = 0; i < data.length; i++) {
    for (const vowel of vowels) {
      if (data.charAt(i) === vowel) sumVowels++;
    }
  }
  return sumVowels;
};

//expected output: 3, 5, 5
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
