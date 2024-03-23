/**
 * @param {number[]} nums
 * @return {number}
 */

var minOperations = function (nums) {
  const length = nums.length;
  const min = nums.reduce((a, b) => Math.min(a, b));
  let output = 0;

  let continuousArr = [];
  for (let i = 0; i <= length - 1; i++) {
    continuousArr.push(min + i);
  }
  console.log(continuousArr);

  for (let j = 0; j < length; j++) {
    if (nums.includes(continuousArr[j])) {
      console.log(true);
    } else {
      console.log(false);
      output += 1;
    }
  }

  return output;
};

const n = [41, 33, 29, 33, 35, 26, 47, 24, 18, 28];

console.log(minOperations(n));
