function rotateArray(input) {
    let countRotations = input.pop() % input.length;
    for (let i = 0; i < countRotations; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}

// function rotateArray(input) {
//     let countRotations = input.pop() % input.length;
//     for (let i = 0; i < countRotations; i++) {
//         let lastElement = input[input.length - 1];
//         for (let j = input.length - 1; j >= 0; j--) {
//             input[j] = input[j-1];
//         }
//         input[0] = lastElement;
//     }
//     console.log(input.join(' '));
// }

rotateArray(['1', '2', '3', '4', '2']);