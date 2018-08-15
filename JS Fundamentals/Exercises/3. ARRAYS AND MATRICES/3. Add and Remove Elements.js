function addAndRemoveElements(input) {
    let array = [];
    for (let i = 0; i < input.length; i++) {
        if(input[i] === 'add'){
            array.push(i+1);
        }else if(input[i] === 'remove'){
            array.pop();
        }
    }

    if(array.length === 0){
        console.log("Empty");
        return;
    }

    for (let val of array) {
        console.log(val);
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['remove','remove','remove']);