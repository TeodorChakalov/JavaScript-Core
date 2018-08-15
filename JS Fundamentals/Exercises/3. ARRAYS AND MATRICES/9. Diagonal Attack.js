function diagonalAttack(input) {
    let matrix = input.map(row => row.split(" ").map(e => Number(e)));

    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        sumMainDiagonal += matrix[row][row];
        sumSecondaryDiagonal += matrix[row][matrix.length - 1 - row];
    }

    if(sumMainDiagonal === sumSecondaryDiagonal){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row !== col && col !== matrix.length - 1 - row){
                    matrix[row][col] = sumMainDiagonal;
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

diagonalAttack(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']);