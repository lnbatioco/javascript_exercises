// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z.
// Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

var s1 = ["hoqq", 2, ["dlfjd"], "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];

var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

function mxdiflg(s1, s2) {
  var maxDiffs = [];

  if (s1.length > 0 && s2.length > 0) {
    s1.forEach(function(elem1){
      s2.forEach(function(elem2){
        if (elem1 && elem2 && (typeof(elem1) === "string" && typeof(elem2) === "string")){
          var total = Math.abs(elem1.length) - Math.abs(elem2.length);
          maxDiffs.push(Math.abs(total));
        }
      });
    });
  } else {
    return -1;
  }

  return Math.max(...maxDiffs);
}
mxdiflg(s1, s2); // --> 13
