function result() {
    let obj = {};
    for (let argument of arguments) {
        let type = typeof argument;
        console.log(type + ": " + argument);

        if(!obj.hasOwnProperty(type)){
            obj[type] = 1;
        }else{
            obj[type]++;
        }
    }
    let sorted = Object.keys(obj).sort((a,b) => {
        return obj[b] - obj[a];
    })

    for (let key of sorted) {
        console.log(key + " = " + obj[key]);
    }
}

result('cat', 42, 445, function () { console.log('Hello world!'); });