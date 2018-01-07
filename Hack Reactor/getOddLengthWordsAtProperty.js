/*
Write a function called "getOddLengthWordsAtProperty".

Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd length elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
*/

var obj = {
  key: ['It', 'has', 'some', 'words']
};

function getOddLengthWordsAtProperty(obj, key) {
  var oddLengthWords = [];

  for (key in obj){
    if (Array.isArray(obj[key])){
      for (var i = 0; i < obj[key].length; i++){
        if (obj[key][i].length %2 !== 0){
          oddLengthWords.push(obj[key][i]);
        }
      }
    }
  }

  return oddLengthWords;
}
getOddLengthWordsAtProperty(obj, 'key');
