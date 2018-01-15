var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

// get ages
function ages(people){
  var ages = [];

  people.forEach(function(person){
    ages.push(person.age);
  });

  return ages;
}
ages(people);


// get first names
function firstNames(people){
  var firstNames = [];

  people.forEach(function(person){
    firstNames.push(person.name.first);
  });

  return firstNames;
}
firstNames(people);


// get last names
function lastNames(people){
  var lastNames = [];

  people.forEach(function(person){
    lastNames.push(person.name.last);
  });

  return lastNames;
}
lastNames(people);


// get average age
function averageAges(people){
  return ages(people).reduce(function(acc, curr, index, array){
    var sum = acc + curr;
    if (index == array.length - 1){
      return Math.floor((sum / array.length));
    } else {
      return sum;
    }
  });
}
averageAges(people);
