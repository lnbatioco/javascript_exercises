// Description:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples:
// :) :D ;-D :~)

// Invalid smiley faces:
// ;( :> :} :]

function countSmileys(arr){
  var count = 0;
  var validSmileys = ":), :D, ;-D, :~)";
  validSmileys = validSmileys.split(" ");

    for (var i = 0; i < arr.length; i++){
      if (arr[i].split("")[0] == ":" || arr[i].split("")[0] == ";"){  // eyes
        if (arr[i].split("")[1] == "-" || arr[i].split("")[1] == "~"){ // nose
          if (arr[i].split("")[2] == ")" || arr[i].split("")[2] == "D" ){ // nose with mouth
            count ++;
          }
        } else if (arr[i].split("")[1] == ")" || arr[i].split("")[1] == "D"){ // no nose with mouth
          count ++;
        }
      }

    }

  return count;
}
countSmileys([':)', ';(', ';}', ':-D']);       // --> 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // --> 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // --> 1;
