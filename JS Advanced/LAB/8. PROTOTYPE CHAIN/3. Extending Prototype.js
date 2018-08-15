let Person = require('./2. Inheriting toString');

function extendClass(Person) {
    Person.prototype.species = 'Human';
    Person.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

extendClass(Person);
let p = new Person('Teko', 'Teko@abv.bg');
console.log(p.species);
console.log(p.toSpeciesString());