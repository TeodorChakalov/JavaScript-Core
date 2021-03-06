function getUniqueWord(input){
    let words = new Set();
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(/[^\w]+/).filter(s => s !== '');

        for (let j = 0; j < line.length; j++) {
            words.add(line[j].toLowerCase());
        }
    }

    for (let word of words) {
        result.push(word);
    }

    console.log(result.join(', '));
}

// function extractWords(input) {
//     let words = new Set();
//
//     for (let sentence of input) {
//         let splitSentence = sentence.split(/\W+/).filter(w => w != "");
//         splitSentence.forEach(x => words.add(x.toLowerCase()));
//     }
//     console.log([...words.values()].join(", "));
// }

getUniqueWord([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. ',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. ',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. ',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu. ',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus. ',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);