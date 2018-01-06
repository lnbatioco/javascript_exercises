/*
Write a function called "countNumberOfKeys".

Given an object, "countNumberOfKeys" returns how many properties the given object has.

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 3
*/

var obj = {
  a: 1,
  b: 2,
  c: 3
};

function countNumberOfKeys(obj) {
  var counter = 0;

  for (var key in obj){
    counter += 1;
  }

  return counter;
}
countNumberOfKeys(obj);
