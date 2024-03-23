/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] + nums[i] === target) {
        output.push(j, i);
      }
    }
  }

  return output;
};

const nums = [3, 3],
  target = 6;

console.log(twoSum(nums, target));
