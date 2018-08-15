function radioCrystals(input) {
    let target = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        let count = 0;
        console.log('Processing chunk ' + input[i] + ' microns');

        while (input[i] / 4 >= target) {
            input[i] /= 4;
            count++;
        }
        if (count !== 0) {
            console.log('Cut x' + count);
            console.log('Transporting and washing');
            if (input[i] === target) {
                console.log('Finished crystal ' + input[i] + ' microns');
            }
            count = 0;
        }
        input[i] = Math.floor(input[i]);

        while (input[i] * 0.8 >= target) {
            input[i] *= 0.8;
            count++;
        }
        if (count !== 0) {
            console.log('Lap x' + count);
            console.log('Transporting and washing');
            if (input[i] === target) {
                console.log('Finished crystal ' + input[i] + ' microns');
            }
            count = 0;
            input[i] = Math.floor(input[i]);
        }

        while (input[i] - 20 >= target) {
            input[i] -= 20;
            count++;
        }
        if (count !== 0) {
            console.log('Grind x' + count);
            console.log('Transporting and washing');

            if (input[i] === target) {
                console.log('Finished crystal ' + input[i] + ' microns');
                break
            }
            count = 0;
            input[i] = Math.floor(input[i]);
        }


        while (input[i] -1 >= target) {
            input[i] -= 2;
            count++;
        }
        if (count !== 0) {
            console.log('Etch x' + count);
            console.log('Transporting and washing');
            if (input[i] === target) {
                console.log('Finished crystal ' + input[i] + ' microns');
                break
            }
            count = 0;
        }
        input[i] = Math.floor(input[i]);


        if (input[i] + 1 === target) {
            console.log('X-ray x1');
            console.log('Finished crystal ' + Number(input[i] + 1) + ' microns');
        }
    }
}

//radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);