const urlDecode = function (text) {
  //replace %20 with space
  const textWithParsedSpaces = text.split("%20").join(" ");
  //split objects on either side of &
  const splitObjects = textWithParsedSpaces.split("&");
  //split key pair items
  const splitItems = [];
  for (let object of splitObjects) {
    splitItems.push(object.split("="));
  }
  //insert key pair values into decoded object
  const decodedObject = {};
  for (const pair of splitItems) {
    decodedObject[pair[0]] = pair[1];
  }
  return decodedObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
