function populationInTowns(input) {
    let result = {};

    for (let i = 0; i < input.length; i++) {
        let currentInfo = input[i].split(/\s<->\s/);
        let town = currentInfo[0];
        let population = Number(currentInfo[1]);

        if(!result.hasOwnProperty(town)){
            result[town] = population;
        }else{
            result[town] += population;
        }
    }
    for (let town in result) {
        console.log(`${town} : ${result[town]}`);
    }
}

// function townsPopulation(inputArr) {
//     let townsMap = new Map();
//     for (let i = 0; i < inputArr.length; i++) {
//         let [town, population] = inputArr[i].split("<->");
//         population = Number(population);
//         if (townsMap.has(town)) {
//             townsMap.set(town, townsMap.get(town) + population)
//         } else {
//             townsMap.set(town, population);
//         }
//     }
//     for (let [town, population] of townsMap) {
//         console.log(`${town}: ${population}`);
//     }
// }

populationInTowns(
        ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']);