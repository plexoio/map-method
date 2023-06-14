
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Vanilla function
function myNumber (num) {
  return num * 2
}


// Using a for loop, vanilla JS

let nums = [1, 2, 3, 4, 5];
let results = [];

for (num of nums) {
  results.push(num * 2);
}

console.log(results);

// Using map(), VERBOSE way

const mapNumber = function (num) {
  return num * 2
}

const workNumber = nums.map(mapNumber);
console.log(workNumber);

// Simplified w/ map(), verbose CALLBACK function

const workNumber2 = nums.map(function (num) {return num * 2});
console.log(workNumber2);

// Simplfied w/ map() + arrow function

let results2 = nums.map(num => num * 2);
console.log(results2);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Arinel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];


let myStudents = students.map(student => [student.name, student.id]); // array of arrays
console.log(myStudents);

// let myStudents = students.map(student => `${student.name}, ${student.id}`);
// One array solution