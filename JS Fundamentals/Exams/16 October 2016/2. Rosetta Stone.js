function rosettaStone(input) {
    let n = Number(input.shift());
    let template = [];

    for (let i = 0; i < n; i++) {
        let takeLine = input.shift().split(/\s+/).map(Number);
        template.push(takeLine);
    }
    let matrix = [];
    for (let i = 0; i < input.length; i++) {
        let takeElement = input[i].split(/\s+/).map(Number);
        matrix.push(takeElement);
    }

    let templateRows = template.length;
    let templateCols = template[0].length;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = matrix[row][col] + template[row % templateRows][col % templateCols];
        }
    }

    let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    alphabet.unshift(" ");
    let message = "";

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let number = matrix[row][col];

            message += alphabet[number % 27];
        }
    }
    console.log(message);
}

rosettaStone([ '2',
                '59 36',
                '82 52',
                '4 18 25 19 8',
                '4 2 8 2 18',
                '23 14 22 0 22',
                '2 17 13 19 20',
                '0 9 0 22 22' ]
            );
