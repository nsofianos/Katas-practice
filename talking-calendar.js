const talkingCalendar = function (date) {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const slicedYear = parseInt(date.slice(0, 4));
  const slicedMonth = parseInt(date.slice(5, 7));
  const slicedDay = date.slice(8, 10);

  const monthWritten = months[slicedMonth];
  let ordinal = "";
  switch (slicedDay.charAt(1)) {
    case "1":
      ordinal = "st";
      break;
    case "2":
      ordinal = "nd";
      break;
    case "3":
      ordinal = "rd";
      break;
    default:
      ordinal = "th";
  }
  const fulldate = monthWritten + " " + slicedDay + ordinal + ", " + slicedYear;
  return fulldate;
};

// expected output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

console.log(talkingCalendar("2017/02/09"));
console.log(talkingCalendar("2007/03/01"));
console.log(talkingCalendar("1987/05/22"));
