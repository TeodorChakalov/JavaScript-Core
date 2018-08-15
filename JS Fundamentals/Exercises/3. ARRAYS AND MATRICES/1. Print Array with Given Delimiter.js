function printArrayWithGivenDelimiter(input){
    let array = [];
    let delimiter = input[input.length-1];
    for (let i = 0; i < input.length-1; i++) {
        array.push(input[i]);
    }
    console.log(array.join(delimiter));
}

// function printArray(arr) {
//     let delimiter = arr.pop();
//     console.log(arr.join(delimiter));
// }

printArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five' , '-']);