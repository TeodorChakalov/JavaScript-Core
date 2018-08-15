function evenPosition(input){
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if(i % 2 === 0){
            result.push(input[i]);
        }
    }
    console.log(result.join(' '));
}

// function evenPosition(input) {
//     let result = [];
//     for (let i = 0; i < input.length; i++) {
//         if(i % 2 === 0){
//             result[i] = input[i];
//         }
//     }
//     console.log(result.filter(x => x!=="").join(' '))
// }

evenPosition(['20', '30', '40']);