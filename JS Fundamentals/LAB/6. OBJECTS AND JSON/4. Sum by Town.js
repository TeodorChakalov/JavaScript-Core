function sumByTown(arr) {
    let object = {};

    for (let i = 0; i < arr.length; i+=2) {
        [town, income] = [arr[i], Number(arr[i+1])];

        if(!object[town]){ // object[town] === undefined
            object[town] = income;
        }else{
            object[town]+=income;
        }
    }

    console.log(JSON.stringify(object))
}

// function sumByTown(arr) {
//     let towns = {};
//     for (let i = 0; i < arr.length; i++) {
//         let currentTown = i%2 ===0 ? arr[i] : arr[i-1];
//
//         if (i % 2 === 0) {
//             if (!towns.hasOwnProperty(currentTown)) {
//                 towns[currentTown] = 0;
//             }
//         } else {
//             towns[currentTown] += Number(arr[i]);
//         }
//     }
//     console.log(JSON.stringify(towns));
// }

sumByTown(['Sofia',
           '20',
           'Varna',
           '3',
           'Sofia',
           '5',
           'Varna',
           '4'
          ]);