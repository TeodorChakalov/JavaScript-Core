let Extensible = (function getExtensibleObject() {
    let counter = 0;
    class Extensible {
        constructor() {
            this.id = counter++
        }

        extend(template) {
            for (let key in template) {
                if (template.hasOwnProperty(key)) {
                    let element = template[key];
                    if (typeof element === 'function') {
                        this.__proto__[key] = element;
                    } else {
                        this[key] = element;
                    }

                }
            }
        }
    }
    return Extensible;
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
