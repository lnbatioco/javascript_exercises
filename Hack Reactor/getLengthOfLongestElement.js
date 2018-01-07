/*
Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
*/

function getLengthOfLongestElement(arr) {
  var longestElement = arr[arr.length -1];

  if (arr.length > 0){
    arr.forEach(function(elem){
      if (elem.length >= longestElement.length){
        longestElement = elem;
      }
    });
  } else {
    return 0;
  }
  
  return longestElement.length;
}
getLengthOfLongestElement(['one', 'two', 'three']);
