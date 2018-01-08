// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
// I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2){
  var arr3 = arr1.concat(arr2);
  var sum = 0;

  return arr3.reduce(function(acc, curr){
    sum = acc + curr;
    return sum;
  });
}
arrayPlusArray([1, 2, 3], [4, 5, 6]);
