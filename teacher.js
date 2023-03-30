class Teacher{
    
    constructor(name, surname, yob, students){
         
         this.name = name;
         this.surname = surname;
         this.yob = yob;
         this.students = students;
    }

    findBestStudent() {
        const students = this.students;
        let bestStudent = students[0]
        for (let i = 0; i < students.length; i++) {
            const actualStudent = students[i];
            const bestMean = bestStudent.calculateMean();
            const actualMean = actualStudent.calculateMean();
            if (actualMean > bestMean) {
                bestStudent = actualStudent;
                
            }
            
        }
        return bestStudent;
    }
    toString(){
        return`
        NOME: ${this.name}
        COGNOME: ${this.surname}
        ETA':${this.calculateAge()}
        MIGLIORE STUDENT:${this.findBestStudent()}
        `
    }
//NOME: Andrea
//COGNOME: Asioli
//ETA': 45
//MIGLIORE STUDENT: Valentina cherubini
    calculateAge(){
        const actualYear = new Date().getFullYear();
        const age = actualYear - this.yob;
        return age;
    }
}

