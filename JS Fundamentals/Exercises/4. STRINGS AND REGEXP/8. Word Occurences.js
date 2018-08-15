function findOccurrences(sentence, word) {
    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    let match;
    let count = 0;

    while(match = regex.exec(sentence)){
        count++;
    }

    console.log(count);
}

// function findOccurrences(sentence, word){
//     let count = 0;
//     sentence = sentence.toLowerCase();
//     word = word.toLowerCase();
//
//     sentence = sentence.split(' ');
//     for (let i = 0; i < sentence.length; i++) {
//         if(sentence[i].includes(word)){
//             count++;
//         }
//     }
//     console.log(count)
// }  //  80/100

findOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the');