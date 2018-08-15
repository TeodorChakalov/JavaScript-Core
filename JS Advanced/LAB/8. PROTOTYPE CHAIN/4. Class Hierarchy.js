function classHierarchy() {
    class Figure {
        constructor(){
            if(new.target === Figure){
                throw new TypeError('class Figure is abstract!');
            }
        }
        toString(){
            return this.constructor.name;
        }
    }

    class Circle extends Figure {
        constructor(radius){
            super();
            this.radius = radius;
        }

        get area(){
            return Math.PI * this.radius * this.radius;
        }

        toString(){
            return `${super.toString()} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height){
            super();
            this.width = width;
            this.height = height;
        }

        get area(){
            return this.width * this.height;
        }

        toString(){
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {Figure, Circle, Rectangle};
}

let func = classHierarchy();
// let Figure = func.Figure;
// let f = new Figure();
let Circle = func.Circle;
let Rectangle = func.Rectangle;

let c = new Circle(5);
console.log(c.toString());
console.log(c.area);

let r = new Rectangle(5, 6);
console.log(r.toString());
console.log(r.area);