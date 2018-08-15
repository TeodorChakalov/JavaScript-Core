function carFactory(obj) {
        let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
        let carriages = [{ type: 'hatchback', color: obj.color }, { type: 'coupe', color: obj.color }];
        let wheelSize = obj.wheelsize % 2 === 0 ? obj.wheelsize - 1 : obj.wheelsize;

        return {
                model: obj.model,
                engine: engines.filter(e => e.power >= obj.power)[0],
                carriage: carriages.filter(c => c.type === obj.carriage)[0],
                wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
        }
}

console.log(carFactory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));