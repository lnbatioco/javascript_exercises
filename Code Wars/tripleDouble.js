// Write a function
// tripledouble(num1,num2)

// which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1
// and also a straight double of the same number in num2.

function checkArray(arr){
  if (arr.length > 0){
    return 1;
  } else {
    return 0;
  }
}

function tripleDouble(num1, num2){
  var num1Digits = (""+num1).split("");
  var num2Digits = (""+num2).split("");
  var tripleDoubleArr = [];

  num1Digits.forEach(function(elem, index, array){
    num2Digits.forEach(function(elem2, index2, array2){
      if (parseInt(array[index + 1]) === parseInt(elem) && parseInt(array[index + 2]) === parseInt(elem)){
        if (parseInt(elem2) === parseInt(elem) && parseInt(array2[index2 + 1]) === parseInt(elem)){
          tripleDoubleArr.push(elem);
        }
      }
    });
  });

  return checkArray(tripleDoubleArr);
}
tripleDouble(451999277, 41177722899) // --> 1  // num1 has straight triple 999s and
                                               // num2 has straight double 99s
tripleDouble(1222345, 12345)         // --> 0  // num1 has straight triple 2s but num2 has only a single 2
tripleDouble(12345, 12345)           // --> 0
tripleDouble(666789, 12345667)       // --> 1
