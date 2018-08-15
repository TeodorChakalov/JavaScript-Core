function equalNeighbours(input) {
    let count = 0;
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (input[row][col] === input[row][col + 1]) {
                count++;
            }
            if (input[row + 1]) {
                if (input[row][col] === input[row + 1][col]) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}

equalNeighbours([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);