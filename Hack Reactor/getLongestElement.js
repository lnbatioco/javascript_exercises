/*
Write a function called "getLongestElement".

Given an array, "getLongestElement" returns the longest string in the given array.

Notes:
* If there are ties, it returns the first element to appear.
* If the array is empty, tt should return an empty string.

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
*/

function getLongestElement(arr) {
  var longest = "";

  if (arr.length > 0){
    return arr.reduce(function(acc, curr){
      longest = curr;
      return longest;
    })
  } else {
    return longest;
  }
}
getLongestElement(['one', 'two', 'three']); // --> 'three'
