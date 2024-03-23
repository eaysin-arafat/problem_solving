function descendingOrder(n) {
  n = String(68565);

  const maxMin = [];

  for (let i = 0; i < n.length; i++) {
    const num = Number(n[i]);
    maxMin.push(num);
  }

  const result = maxMin.sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
  });

  let f = "";

  for (let i = 0; i < result.length; i++) {
    f += result[i];
  }

  return Number(f);
}

console.log(descendingOrder(382));

const dates = new Date();

const weekName = dates.toLocaleDateString("en-Us", { weekday: "short" });
const date = dates.getDate();
const month = dates.toLocaleString("default", { month: "short" });

console.log(weekName, date, month);
