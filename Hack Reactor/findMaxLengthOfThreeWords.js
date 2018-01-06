/*
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
*/

function findMaxLengthOfThreeWords(word1, word2, word3) {
  var words = [word1, word2, word3];
  var max = words[words.length - 1];

  words.forEach(function(word){
    if (word.length >= max.length){
      max = word.length;
    }
  });

  return max;
}
findMaxLengthOfThreeWords('a', 'be', 'see');
