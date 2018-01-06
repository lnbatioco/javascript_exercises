/*
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
*/

function getAllElementsButNth(array, n) {
  return array.filter(function (elem, index) {
    return (index !== n);
  });
}
getAllElementsButNth(['a', 'b', 'c'], 1);
