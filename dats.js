const daynames = ["S", "M", "T", "W", "T", "F", "S"];

const getNumberDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const getSortedDays = (year, month) => {
  const dayIndex = getNumberDaysInMonth(year, month);
  const firstHalf = daynames.slice(dayIndex);
  return [...firstHalf, ...daynames.slice(0, dayIndex)];
};

console.log(getSortedDays(2023, 2));
