/*
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
*/

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};

function removeNumberValues(obj) {
  for (var key in obj){
    if (typeof obj[key] === "number"){
      delete obj[key];
    }
  }
  return obj;
}
removeNumberValues(obj);
