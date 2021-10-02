const PI = 3.14159;

const sphereVolume = (radius) => {
  return (4 / 3) * PI * Math.pow(radius, 3);
};
//true
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = (radius, height) => {
  return (PI * Math.pow(radius, 2) * height) / 3;
};
//true
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = (height, width, depth) => {
  return width * depth * height;
};
//true
console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = (solids) => {
  let totalVolume = 0;
  for (const shape of solids) {
    switch (shape.type) {
      case "sphere":
        totalVolume += sphereVolume(shape.radius);
        break;
      case "cone":
        totalVolume += coneVolume(shape.radius, shape.height);
        break;
      case "prism":
        totalVolume += prismVolume(shape.height, shape.width, shape.depth);
        break;
    }
  }
  return totalVolume;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];
//true
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
