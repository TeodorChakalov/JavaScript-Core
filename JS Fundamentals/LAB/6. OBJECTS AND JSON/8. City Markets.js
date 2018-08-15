function cityMarket(input) {
    let result = new Map();

    for (let value of input) {
        let [city, product, quantity, price] = value.split(/ -> | : /);

        if (!result.has(city)) {
            result.set(city, new Map());
        }
        result.get(city).set(product, Number(quantity) * Number(price));
    }
    for (let [key, value] of result) {
        console.log(`Town - ${key}`);

        for (let [k, v] of value) {
            console.log(`$$$${k} : ${v}`)
        }
    }
}

cityMarket([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Laptops HP -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);