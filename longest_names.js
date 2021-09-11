const instructorWithLongestName = (instructors) => {
  let longestNamedInstructor = {};
  //check if any instructors exist first, then compare the names
  for (const instructor of instructors) {
    if (
      !longestNamedInstructor.name ||
      longestNamedInstructor.name.length < instructor.name.length
    ) {
      longestNamedInstructor.name = instructor.name;
      longestNamedInstructor.course = instructor.course;
    }
  }
  return longestNamedInstructor;
};

//expected output: { name: 'Jeremih', course: 'Web' },

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremih", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);

//expected output: { name: 'Domascus', course: 'Web' }
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
