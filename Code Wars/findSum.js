// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.

function findSum(n) {
  var result = 0;

  for (var i = 0; i <= n; i++){
    if (i %3 === 0 || i %5 === 0){
      result += i;
    }
  }

  return result;
}
findSum(5) // --> 8  (3 + 5)
findSum(10) // --> 33  (3 + 5 + 6 + 9 + 10)
