class Rat {
    constructor(name){
        this.name = name;
        this.result = [];
    }

    unite(otherRat){
        if(otherRat instanceof Rat){
            this.result.push(otherRat);
        }
    }

    getRats(){
        return this.result;
    }

    toString(){
        let array = this.result;
        array.unshift(this.name);
        return array.join('\n##')
    }
}

let test = new Rat('Pesho');
console.log(test.toString());

console.log(test.getRats());

test.unite(new Rat('Gosho'));
test.unite(new Rat('Ivan'));

console.log(test.getRats());

console.log(test.toString());