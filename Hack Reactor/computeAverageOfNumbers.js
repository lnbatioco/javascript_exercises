/*
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average.

Notes:
* If given an empty array, it should return 0.

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
*/

var input = [1,2,3,4,5];

function computeAverageOfNumbers(nums) {
  if (nums.length > 0){
    return nums.reduce(function(total, amount, index, array){
      total += amount;
      if (index === array.length - 1){
        return total / array.length;
      } else {
        return total;
      }
    });
  } else {
    return 0;
  }
}
computeAverageOfNumbers(input);
