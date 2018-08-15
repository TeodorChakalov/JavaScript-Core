function airPollution(firstArr, secondArr) {
    let matrix = [];
    let matrixPolluted = [];

    for (let i = 0; i < firstArr.length; i++) {
        matrix[i] = firstArr[i].split(' ').map(Number);
    }

    for (let i = 0; i < secondArr.length; i++) {
        let str = secondArr[i].split(' ');
        let command = str[0];

        for (let j = 0; j < matrix.length; j++) {
            if(command === "breeze"){
                let index = str[1];
                if(matrix[index][j] - 15 > 0){
                    matrix[index][j]-=15;
                }
            }else if(command === "gale"){
                let index = str[1];
                if(matrix[j][index] - 20 > 0){
                    matrix[j][index]-=20;
                }
            }else if(command === "smog"){
                let value = Number(str[1]);
                for (let k = 0; k < matrix.length; k++) {
                    matrix[j][k] += value;
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if(matrix[i][j] >= 50){
                matrixPolluted.push(`[${i}-${j}]`);
            }
        }
    }
    if(matrixPolluted.length !== 0){
        console.log(`Polluted areas: ${matrixPolluted.join(', ')}`);
    }else{
        console.log("No polluted areas");
    }
}

airPollution([
                "5 7 72 14 4",
                "41 35 37 27 33",
                "23 16 27 42 12",
                "2 20 28 39 14",
                "16 34 31 10 24"
             ],
            ["breeze 1", "gale 2", "smog 25"]
            );