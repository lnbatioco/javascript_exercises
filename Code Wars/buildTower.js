// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// JavaScript: returns an Array;

// Tower block is represented as *
// for example, a tower of 3 floors looks like below
// [
//   '  *  ',  1
//   ' *** ',  1 + 2
//   '*****'   1 + 3
// ]

// NOTE: fix error: add new line after each row

function addRow(char, num){
  var row = [" "];

  row.push(char);
  for (var i = 0; i < num; i++){
    row.push(char);
  }
  row.push(" ");

  return row.join(" ");
}

function buildTower(char, num){
  var tower = [];
  var count = 0;

  while (count <= num){
    tower.push(addRow(char, count));
    count += 2;
  }

  return(tower.join('\n'));
}
buildTower("*", 6); // --> '  *  \n  * * *  \n  * * * * *  \n  * * * * * * *  '
