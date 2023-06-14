let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 80, art: 95 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 93, maths: 77, art: 95 },
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 87, art: 95 },
    }
];

// access only first value, and then display the 'rest' as an object in an array

let [student, ...rest] = students.map(studentInfo => [studentInfo.name, studentInfo.results]);
console.log(student);
console.log(rest);

// 'student' refers to the first position of the array of objects, 'students[0]'

// OR

const myStudents = (studentsData) => [studentsData.name, studentsData.results]; // create function apart

let [student2, ...rest2] = students.map(myStudents);
console.log(student2);
console.log(rest2);