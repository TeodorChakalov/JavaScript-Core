function memory(input){
    let arrayNumbers = input.join(' ').split(' ').filter(e => e!== "");

    for (let i = 0; i < arrayNumbers.length; i++) {
        if(arrayNumbers[i] === '32656' && arrayNumbers[i+1] === '19759' && arrayNumbers[i+2] === '32763'){

            let size = Number(arrayNumbers[i + 4]);
            let result = arrayNumbers.slice(i + 6, i + 6 + size);

            let final = "";
            for (let letter of result) {
                final += String.fromCharCode(Number(letter));
            }
            console.log(final);
        }
    }
}

memory(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
        '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0'
       ]);