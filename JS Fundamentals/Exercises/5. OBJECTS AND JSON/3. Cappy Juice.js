function cappyJuice(input) {
    let result = new Map();
    let bottles = new Map();

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split("=>");
        let name = currentRow[0];
        let quantity = Number(currentRow[1]);

        if(!result.has(name)){
            result.set(name, quantity);
        }else{
            result.set(name, result.get(name) + quantity);
        }

        if(result.get(name) >= 1000){
            bottles.set(name, Math.floor(result.get(name) / 1000));
        }
    }
    for (let [key, value] of bottles) {
        console.log(`${key}=> ${value}`)
    }
}

// function cappyJuice(input) {
//     let fruitsQuan = {};
//     let bottles = {};
//
//     for (let line of input) {
//         let [fruit, quantity] = line.split(" => ");
//
//         if (!fruitsQuan.hasOwnProperty(fruit)) {
//             fruitsQuan[fruit] = 0;
//         }
//         fruitsQuan[fruit] += Number(quantity);
//         if (fruitsQuan[fruit] >= 1000) {
//             bottles[fruit] = parseInt(fruitsQuan[fruit] / 1000);
//         }
//     }
//     for (let key of Object.keys(bottles)) {
//         console.log(`${key} => ${bottles[key]}`);
//     }
// }

cappyJuice(['Orange => 2000',
            'Peach => 1432',
            'Banana => 450',
            'Peach => 600',
            'Strawberry => 549'
]);