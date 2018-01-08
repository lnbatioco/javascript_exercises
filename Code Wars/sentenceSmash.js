// Sentence Smash
  // Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Assumptions
  // You can assume that you are only given words.
  // You cannot assume the size of the array.
  // You can assume that you will always get an array.

var words = ['hello', 'world', 'this', 'is', 'great'];

function sentenceSmash(words){
  return words.join(" ");
}
sentenceSmash(words); // --> "hello world this is great"
