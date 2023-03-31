

const student1 = new Student('Davide', 'Consigliere', 1989, [4, 6, 7, 4, 6])
const student2 = new Student('Francesco', 'Badile', 1993, [5, 8, 6, 7, 10])
const student3 = new Student('Valentina', 'Cherubini', 2001, [8, 7, 10, 9, 8])
const student4 = new Student('Simone', 'Cherubini', 2003);
const teacher = new Teacher('Andrea', 'Asioli',  1978, [student1, student2, student3])


const vecchietto = new Person('Battista','parodi', 1934);

console.log(vecchietto.toString());


console.log(teacher + '');
console.log(student2.toString());

console.log(student2.calculateMean());

console.log(teacher.findBestStudent())


// console.log(teacher.toString());


