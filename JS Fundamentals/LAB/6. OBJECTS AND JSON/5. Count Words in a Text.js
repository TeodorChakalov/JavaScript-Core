function countWord(input) {
    let splittedInput = input.join('').split(/\W+/).filter(w => w !== "");

    let object = {};

    for (let word of splittedInput) {
        if(!object.hasOwnProperty(word)){
            object[word] = 1;
        }else{
            object[word]++;
        }
    }

    console.log(JSON.stringify(object))
}

countWord(["Far too slow, you're far too slow."]);