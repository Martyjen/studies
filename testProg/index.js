let a = 'Ivan';
let b = "777";

const person = new User(a, b);
console.log(person);
console.log(person.username);
console.log(person.validatePassvord());

let firstStudent = new Student(a, b , '3211');
console.log(firstStudent);
console.log(firstStudent.getStudentCurses());