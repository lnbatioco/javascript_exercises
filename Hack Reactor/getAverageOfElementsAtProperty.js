/*
Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key.

Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.


var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
*/

var obj = {
  key: [1, 2, 3]
};

function getAverageOfElementsAtProperty(obj, key) {
  for (key in obj){
    if (obj[key].length > 0 && Array.isArray(obj[key])){
      return obj[key].reduce(function(total, amount, index, array){
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
}
getAverageOfElementsAtProperty(obj, 'key');
