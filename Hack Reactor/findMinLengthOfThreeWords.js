/*
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
*/

function findMinLengthOfThreeWords(word1, word2, word3) {
  var words = [word1, word2, word3];
  var min = words[words.length - 1];

  words.forEach(function(word){
    if (word.length <= min.length){
      min = word.length;
    }
  });

  return min;
}
findMinLengthOfThreeWords('a', 'be', 'see');
