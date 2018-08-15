function magicMatrix(input) {

    let sum = input[0].reduce((a, b) => a + b);

    for (let row = 1; row < input.length; row++) {
        if (sum !== input[row].reduce((a, b) => a + b)) {
            console.log("false");
            return;
        }

    }

    for (let col = 0; col < input.length; col++) {
        let colSum = 0;
        for (let row = 0; row < input.length; row++) {
            colSum += input[row][col];
        }

        if (sum !== colSum) {
            console.log("false");
            return;
        }
    }
    console.log(true);
}

magicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);