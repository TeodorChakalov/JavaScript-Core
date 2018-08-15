function PersonTeacherStudent() {
    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }

        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }
        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    }

    return {Person, Teacher, Student};
}

let func = PersonTeacherStudent();

let Person = func.Person;
let Teacher = func.Teacher;
let Student = func.Student;

let p = new Person('Teko', 'teko@abv.bg');
let t = new Teacher('Teko', 'teko@abv.bg', 'Maths');
let s = new Student('Teko', 'teko@abv.bg', 'III');
console.log(p.toString());
console.log(t.toString());
console.log(s.toString());

module.exports = Person;