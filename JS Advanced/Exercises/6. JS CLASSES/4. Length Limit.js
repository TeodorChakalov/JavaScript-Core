class Stringer {
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    get innerLength(){
        return this._innerLength;
    }
    set innerLength(value){
        if(value < 0){
            this._innerLength = 0;
        }else{
            this._innerLength = value;
        }
    }

    increase(length){
        this.innerLength += Number(length);
    }

    decrease(length){
        this.innerLength -= Number(length);
    }

    toString(){
        if(this.innerString.length < this.innerLength){
            return this.innerString;
        }
        if(this.innerString.length === 0){
            return '...';
        }
        return this.innerString.substring(0, this.innerLength) + '...';
    }
}

let test = new Stringer('Test', 5);
console.log(test.toString());

test.decrease(3);
console.log(test.toString());

test.decrease(5);
console.log(test.toString());

test.increase(5);
console.log(test.toString());