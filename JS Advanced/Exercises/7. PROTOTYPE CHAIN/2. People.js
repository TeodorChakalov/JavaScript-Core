function solve() {
    class People {
        constructor(name, age){
            if(new.target === People){
                throw new TypeError('class People is abstract!');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.result = [];
        }

        work(){
            let currentTask = this.result.shift();
            console.log(this.name + ' ' + currentTask);
            this.result.push(currentTask);
        }

        collectSalary(){
            console.log(`${this.name} received ${this.calculate()} this month.`);
        }

        calculate(){
            return this.salary;
        }
    }

    class Junior extends People {
        constructor(name, age){
            super(name, age);
            this.result.push('is working on a simple task.');
        }
    }

    class Senior extends People {
        constructor(name, age){
            super(name, age);
            this.result.push('is working on a complicated task.');
            this.result.push('is taking time off work.');
            this.result.push('is supervising junior workers.');
        }
    }

    class Manager extends People {
        constructor(name, age){
            super(name, age);
            this.dividend = 0;
            this.result.push('scheduled a meeting.');
            this.result.push('is preparing a quarterly report.');
        }

        calculate(){
            return this.salary + this.dividend;
        }
    }

    return {People, Junior, Senior, Manager};
}

let func = solve();
let Manager = func.Manager;
let m = new Manager('Ivan', '23');
m.salary = 2000;
m.dividend = 100;
console.log(m.calculate());
console.log(m.work());
console.log(m.collectSalary());