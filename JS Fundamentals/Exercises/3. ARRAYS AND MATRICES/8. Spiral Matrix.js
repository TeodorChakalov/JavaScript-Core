function spiralMatrix(rows, cols) {
    let counter = 0;
    let target = rows * cols;
    let minRow = 0;
    let minCol = 0;
    let maxRow = rows - 1;
    let maxCol = cols - 1;

    let matrix = [];
    for (let r = 0; r < rows; r++) matrix[r] = [];

    while (counter < target) {
        for (let c = minCol; c <= maxCol; c++) {
            matrix[minRow][c] = ++counter;
        }
        minRow++;

        for (let r = minRow; r <= maxRow; r++) {
            matrix[r][maxCol] = ++counter;
        }
        maxCol--;

        for (let c = maxCol; c >= minCol; c--) {
            matrix[maxRow][c] = ++counter;
        }
        maxRow--;

        for (let r = maxRow; r >= minRow; r--) {
            matrix[r][minCol] = ++counter;
        }
        minCol++;
    }

    for (let num of matrix) {
        console.log(num.join(' '));
    }
}

spiralMatrix(5, 5);