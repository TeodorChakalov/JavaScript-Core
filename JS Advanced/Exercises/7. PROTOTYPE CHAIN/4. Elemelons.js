function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            let className = this.constructor.name.substring(0, this.constructor.name.length - 5);
            return `Element: ${className}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return super.toString();
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
        toString() {
            return super.toString();
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
        toString() {
            return super.toString();
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
        toString() {
            return super.toString();
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.items = ["Water", "Fire", "Earth", "Air"];
        }

        morph() {
            let currentItem = this.items.shift();
            this.items.push(currentItem);
        }
    }
    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}

// function solve() {
//     class Melon {
//         constructor(weight, melonSort) {
//             if (new.target === Melon) {
//                 throw new Error("Abstract class cannot be instantiated directly")
//             }
//             this.weight = weight;
//             this.melonSort = melonSort;
//             this.element = "";
//         }
//
//         get elementIndex() {
//             return this.weight * this.melonSort.length;
//         }
//
//         toString() {
//             switch (this.constructor.name) {
//                 case "Watermelon":this.element = "Water";break;
//                 case "Firemelon":this.element = "Fire";break;
//                 case "Earthmelon":this.element = "Earth";break;
//                 case "Airmelon":this.element = "Air";break;
//             }
//             return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
//         }
//     }
//
//     class Watermelon extends Melon {
//         constructor(weight, melonSort) {
//             super(weight, melonSort);
//         }
//     }
//
//     class Firemelon extends Melon {
//         constructor(weight, melonSort) {
//             super(weight, melonSort);
//         }
//     }
//
//     class Earthmelon extends Melon {
//         constructor(weight, melonSort) {
//             super(weight, melonSort);
//         }
//     }
//
//     class Airmelon extends Melon {
//         constructor(weight, melonSort) {
//             super(weight, melonSort);
//         }
//     }
//
//     class Melolemonmelon extends Watermelon {
//         constructor(weight, melonSort) {
//             super(weight, melonSort);
//             this._items = ["Water", "Fire", "Earth", "Air"];
//             this.morph();
//         }
//
//         morph() {
//             let currentItem = this._items.shift();
//             this.element = currentItem;
//             this._items.push(currentItem);
//         }
//     }
//     return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
// }


let func = solve();
let Melon = func.Melon;
let Watermelon = func.Watermelon;
let Melolemonmelon = func.Melolemonmelon;
//let test = new Melon(100, "Test");
//Throws error

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

let melolemonmelon = new Melolemonmelon(12.5, "Kingsize");
console.log(melolemonmelon.morph());

// Element: Water
// Sort: Kingsize
// Element Index: 100
