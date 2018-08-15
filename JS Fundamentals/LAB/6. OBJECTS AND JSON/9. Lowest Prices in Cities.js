function lowestPrice(input){
    let result = new Map();

    for (let line of input) {
        let [town, product, price] = line.split(" | ").filter(w => w!== "");
        if(!result.has(product)){
            result.set(product, new Map());
        }
        result.get(product).set(town, Number(price));
    }

    for (let [key,value] of result) {
        let sortedValues = Array.from(value.keys()).sort((key1, key2) => {
             return value.get(key1) - value.get(key2);
        });
        console.log(`${key} -> ${value.get(sortedValues[0])} (${sortedValues[0]})`);
    }
}

lowestPrice([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);