function triangleOfDollars(number) {

    for (let i = 1; i <= number; i++) {
        let result =  '';
        for (let j = 1; j <= i; j++) {
            result+='$';
        }
        console.log(result);
    }
}

triangleOfDollars(5);