function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this._ribbon = {color: ribbonColor, length: ribbonLength};
        }

        get ribbon(){
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }
        get text(){
            return this._text;
        }
    }

    return {Balloon, PartyBalloon, BirthdayBalloon};
}

let func = solve();
let Balloon = func.Balloon;
let PartyBalloon = func.PartyBalloon;
let BirthdayBalloon = func.BirthdayBalloon;

let b = new Balloon('blue', '3lb');
let pb = new PartyBalloon('blue', '3lb', 'green', '2m');
let bb = new BirthdayBalloon('blue', '3lb', 'I am balloon!');

console.log(b);
console.log(pb);
console.log(bb);
console.log(pb.ribbon);
console.log(bb.text);