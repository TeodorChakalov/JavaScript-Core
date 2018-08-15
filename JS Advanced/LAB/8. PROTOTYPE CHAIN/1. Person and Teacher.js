function PersonTeacher() {
    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
    }
    return {Person, Teacher};
}

let func = PersonTeacher();
let Person = func.Person;
let Teacher = func.Teacher;
let p = new Person('Teodor', 'teodor.chakalov@abv.bg');
let t = new Teacher('Teodor', 'teodor.chakalov@abv.bg', 'JS');
console.log(p);
console.log(t);
