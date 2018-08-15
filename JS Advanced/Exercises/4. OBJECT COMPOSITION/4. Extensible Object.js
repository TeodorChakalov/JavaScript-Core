function extensibleObject() {
    let obj = {
        extend: function(template){
            for(let parentProp in template){
                if(typeof(template[parentProp]) == "function"){
                    Object.getPrototypeOf(obj)[parentProp] = template[parentProp];
                } else {
                    obj[parentProp] = template[parentProp];
                }
            }
        }
    };

    return obj;
}

let myObj = extensibleObject();
let template = {
    extensionMethod: function () {
        console.log('function');
    },
    extensionProperty: 'property'
};

myObj.extend(template)
console.log(myObj);
console.log(myObj.__proto__);

