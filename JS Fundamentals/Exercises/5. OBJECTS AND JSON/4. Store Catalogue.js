function storeCatalogue(input) {
    let result = new Map();

    for (let line of input) {
        let currentRow = line.split(" : ");

        let product = currentRow[0];
        let price = currentRow[1];
        let letter = product[0];

        if (!result.has(letter)) {
            result.set(letter, new Map());
        }
        let secondMap = result.get(letter);
        secondMap.set(product, price);
        result.set(letter, secondMap);
    }

    for (let [letter, secondMap] of Array.from(result).sort()) {

        console.log(letter);

        for (let arr of Array.from(secondMap).sort()) {
            console.log("  " + arr[0] + ": " + arr[1]);
        }
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);