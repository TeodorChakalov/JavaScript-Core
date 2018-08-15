function DNAHelix(number) {
    let sequence = "ATCGTTAGGG";

    let currentIndex = 0;
    for (let i = 0; i < number; i++) {

        if(currentIndex === sequence.length){
            currentIndex = 0;
        }

        let currentRow = i % 4;

        if(currentRow === 0){
            console.log("**" + sequence[currentIndex++] + sequence[currentIndex++] + "**");
        }else if(currentRow === 1 || currentRow === 3){
            console.log("*" + sequence[currentIndex++] + "--" + sequence[currentIndex++] + "*");
        }else{
            console.log(sequence[currentIndex++] + "----" + sequence[currentIndex++]);
        }
    }
}

// function DNAHelix(number){
//     let helix = ['**AT**', '*C--G*', 'T----T', '*A--G*', '**GG**',
//                  '*A--T*', 'C----G', '*T--T*', '**AG**', '*G--G*',
//                  'A----T', '*C--G*', '**TT**', '*A--G*', 'G----G',
//                  '*A--T*', '**CG**', '*T--T*', 'A----G', '*G--G*'];
//
//     for (let i = 0; i < number; i++) {
//         console.log(helix[i % helix.length]);
//     }
// }

DNAHelix(10);