/*
Write a function called "filterOddLengthWords".

Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
*/

function filterOddLengthWords(words) {
  return words.filter(function(elem){
    return (elem.length %2 !== 0);
  });
}
filterOddLengthWords(['there', 'it', 'is', 'now']);
