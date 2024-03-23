/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const output = [];
  let l = "",
    ll = "";

  for (let i = l1.length - 1; i >= 0; i--) {
    l += l1[i];
  }

  for (let i = l2.length - 1; i >= 0; i--) {
    ll += l2[i];
  }

  const sum = Number(l) + Number(ll) + "";

  for (let i = sum.length - 1; i >= 0; i--) {
    output.push(Number(sum[i]));
  }

  return output;
};

const l1 = [9, 9, 9, 9, 9, 9, 9],
  l2 = [9, 9, 9, 9];
console.log(addTwoNumbers(l1, l2));
