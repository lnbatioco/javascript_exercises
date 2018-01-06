/*
Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

Notes:
* In order to do this problem, you should be familiar with "String.split", and "Array.join".
*/

function convertDoubleSpaceToSingle(str) {
  var singleSpacedStr = [];

  str.split("").forEach(function(char, index, array){
    if (!(array[index] === " " && array[index + 1] === " ")){
      singleSpacedStr.push(char);
    }
  });

  return singleSpacedStr.join('');
}
convertDoubleSpaceToSingle("string  with  double  spaces");
