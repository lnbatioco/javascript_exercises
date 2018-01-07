// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array){
  if (array.length > 0){
    return array.map(function(elem){
      return (elem === 0) ? 0 : elem * -1;
    });
  } else {
    return [];
  }
}
invert([-200, -400, 600, 0]); // --> [200, 400, -600, 0]
