/*
Write a function called "getAllButLastElementOfProperty".

Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the property at the given key is not an array, it return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
*/

var obj = {
  key: [1, 2, 3]
};

function getAllButLastElementOfProperty(obj, key) {
  var allButLast = [];

  for (key in obj){
    if (Array.isArray(obj[key]) && obj[key].length > 0){
      for (var i = 0; i < obj[key].length; i++){
        if (i !== obj[key].length - 1){
          allButLast.push(obj[key][i]);
        }
      }
    }
  }

  return allButLast;
}
getAllButLastElementOfProperty(obj, 'key');
