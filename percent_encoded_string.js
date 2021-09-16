const urlEncode = (text) => {
  trimmedString = text.trim();
  encodedString = "";
  for (let i = 0; i < trimmedString.length; i++) {
    if (trimmedString.charAt(i) === " ") {
      encodedString += "%20";
    } else encodedString += trimmedString.charAt(i);
  }

  return encodedString;
};

//expected output: Lighthouse%20Labs, Lighthouse%20Labs, blue%20is%20is%20greener%20than%20purple%20for%20sure
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
