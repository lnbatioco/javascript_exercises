/*
Write a function called "computeProductOfAllElements".

Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

Notes:
* If given array is empty, it should return 0.

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
*/

function computeProductOfAllElements(arr) {
  var product = 0;

  if (arr.length > 0){
    return arr.reduce(function(acc, curr){
      product = acc * curr;
      return product;
    });
  } else {
    return product;
  }

}
computeProductOfAllElements([2, 5, 6]); // --> 60
