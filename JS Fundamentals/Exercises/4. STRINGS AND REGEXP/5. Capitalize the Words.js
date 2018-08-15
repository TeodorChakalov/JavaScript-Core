function capitalizeWords(text) {

    let splittedText = text.split(' ');

    let result = [];
    for (let word of splittedText) {
        result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
    console.log(result.join(' '));
}

// function capitalizeWords(text) {
//     text = text.split(" ");
//     let result = [];
//     for (let word of text) {
//         for (let i = 0; i < word.length; i++) {
//             if (i === 0) {
//                 result.push(word[i].toUpperCase());
//                 continue;
//             }
//             result.push(word[i].toLowerCase());
//         }
//         result.push(" ");
//     }
//     console.log(result.join(""));
// }

// function capitalizeWords(text) {
//     console.log(text.split(" ")
//         .map(w => w.substr(0,1).toUpperCase() + w.substr(1, w.length).toLowerCase())
//         .join(" "));
// }

capitalizeWords('Capitalize these words');