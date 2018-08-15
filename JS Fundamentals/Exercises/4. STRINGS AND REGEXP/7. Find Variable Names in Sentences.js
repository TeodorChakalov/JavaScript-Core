function findNames(str) {
    let regex = /\b_([a-zA-Z-0-9]+)\b/g;
    let match;
    let result = [];

    while(match = regex.exec(str)){
        result.push(match[1]);
    }
    console.log(result.join(','));
}

// function findNames(str) {
//     let regex = /\b_[a-zA-Z-0-9]+\b/g;
//     let result = str.match(regex);
//     for (let i = 0; i < result.length; i++) {
//         result[i] = result[i].slice(1);
//     }
//     console.log(result.join(','));
// }

findNames('The _id and _age variables are both integers.');