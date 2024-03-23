const date = new Date();

const result = date.getDay() + 1;

function getDayName(date = new Date(), locale = "en-US") {
  return date.toLocaleDateString(locale, { weekday: "long" });
}

console.log(getDayName());
