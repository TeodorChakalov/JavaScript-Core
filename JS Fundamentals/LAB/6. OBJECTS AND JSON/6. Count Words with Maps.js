function countWordMap(input){
    input = input.join('').toLowerCase().split(/\W+/).filter(w => w !== "");
    let map = new Map();

    for (let word of input) {

        if(!map.has(word)){
            map.set(word, 1);
        }else {
            map.set(word, map.get(word) + 1);
        }
    }

    let sortedElements = Array.from(map.keys()).sort();

    for (let element of sortedElements) {
        console.log(`'${element}' -> ${map.get(element)} times`);
    }
}

countWordMap(['Far too slow, you\'re far too slow.']);