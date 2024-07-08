// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// function memoize(fn) {
//   let previousData = [];

//   return function (...args) {
//     let shouldCall;
//     let value;

//     for (data of previousData) {
//       if (JSON.stringify(data.arg) === JSON.stringify(args)) {
//         shouldCall = true;
//         value = data.value;
//         break;
//       }

//       shouldCall = false;
//     }

//     if (!shouldCall) {
//       value = fn(...args);
//       previousData.push({ arg: args, value });
//     }

//     return value;
//   };
// }

/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
  let previousData = {};

  return function (...args) {
    const res = previousData[JSON.stringify(args)];

    if (!res) {
      value = fn(...args);
      previousData[JSON.stringify(args)] = { arg: args, value };
      return value;
    }

    return res.value;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
// memoizedFn(2, 3);
// memoizedFn(2, 6);
// memoizedFn(2, 5);
// memoizedFn(2, 3);
// memoizedFn(2, 6);

console.log(callCount); // 1`
