// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string.
// Any spaces in the string should be retained.

function reverseWords(str){
  var strReversed = [];

  str.split(" ").forEach(function(word){
    strReversed.push(word.split("").reverse().join(""));
  });

  return strReversed.join(" ");
}
reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
reverseWords("double  spaces"); // returns  "elbuod  secaps"
