/*
Write a function called "removeProperty".
Given an object and a key, "removeProperty" removes the given key from the given object.
var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
*/

var obj = {
  name: 'Sam',
  age: 20
}

function removeProperty(obj, key) {
  delete obj.key;
  return obj.key; // --> undefined
}
removeProperty(obj, 'name');
