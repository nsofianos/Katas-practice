const checkAir = function (samples, threshold) {
  let dirtySamples = 0;
  for (const sample of samples) {
    if (sample === "dirty") dirtySamples++;
  }
  if (dirtySamples / samples.length > threshold) return "polluted";
  else return "clean";
};

//expect output: polluted
console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);
//expected output: polluted
console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));
//expected output: clean
console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
