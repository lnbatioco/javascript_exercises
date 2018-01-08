// A digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n.
// If that value has two digits, continue reducing in this way until a single-digit number is produced.
// This is only applicable to the natural numbers.

// Here's how it works (Ruby example given):

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

function getSumOf(array){
  var sum = 0;
  var count = 0;

  while(array.length > count){
    sum += parseInt(array[count]);
    count ++;
  }

  sum = (""+sum).split("");
  return sum;
}

function digitalRoot(num){
  var nArray = (""+num).split("");

  while (nArray.length >= 2){
    nArray = getSumOf(nArray);
    getSumOf(nArray);
  }

  return parseInt(nArray);
}
digitalRoot(942); // --> 6
