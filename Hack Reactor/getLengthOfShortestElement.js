/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {
  var numArr = [];

  if (arr.length > 0) {
    arr.forEach(function(num){
      numArr.push(num.length);
    });
  } else {
    return 0;
  }

  return Math.min(...numArr);
}
getLengthOfShortestElement(['one', 'two', 'three']);
