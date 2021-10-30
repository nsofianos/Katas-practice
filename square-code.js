const squareCode = function (message) {
  const ana = message.split(" ").join("");
  const rowSize = Math.ceil(Math.sqrt(ana.length));
  const words = [];
  const encodedWords = [];
  for (let i = 0; i < rowSize; i++) {
    words[i] = ana.slice(i * rowSize, (i + 1) * rowSize);
  }
  for (const word of words) {
    for (let i = 0; i < words.length; i++) {
      if (!encodedWords[i]) encodedWords[i] = "";
      encodedWords[i] += word.charAt(i);
    }
  }
  return encodedWords.join(" ");
};

// clu hlt io
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

console.log(squareCode("have a nice day"));
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
