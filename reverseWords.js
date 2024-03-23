s = "Let's take LeetCode contest";

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  let reverseWord = "";
  const splitArr = s.split(" ");
  //   console.log(splitArr);
  const wordArr = [];

  for (let i = 0; i < splitArr.length; i++) {
    wordArr.push(splitArr[i]);
  }

  for (let i = 0; i < wordArr.length; i++) {
    const letterArr = wordArr[i];
    for (let j = letterArr.length; j >= 0; j--) {
      if (letterArr[j] === undefined) {
        reverseWord += " ";
      } else {
        reverseWord += letterArr[j];
      }
    }
  }
  const result = reverseWord.substring(1);
  return result;
};

console.log(reverseWords(s));
