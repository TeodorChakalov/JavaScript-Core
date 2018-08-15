function cookingByNumbers(input) {
    let number = Number(input[0]);

    for (let i = 1; i <= input.length; i++) {
        if(input[i] === "chop"){
            number /= 2;
            console.log(number);
        }else if(input[i] === "dice"){
            number = Math.sqrt(number);
            console.log(number);
        }else if(input[i] === "spice"){
            number = number+1;
            console.log(number);
        }else if(input[i] === "bake"){
            number *= 3;
            console.log(number);
        }else if(input[i] === "fillet"){
            number *= 0.8;
            console.log(number);
        }
    }
}

cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);