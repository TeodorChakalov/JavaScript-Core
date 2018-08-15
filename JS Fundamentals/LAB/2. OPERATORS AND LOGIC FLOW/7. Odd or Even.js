function oddEven(number) {
    if(!Number.isInteger(number)) {
        console.log("invalid");
    }else if(number % 2 === 0){
        console.log("even");
    }else if(number % 2 !== 0){
        console.log("odd");
    }
}

oddEven(5);
oddEven(6);
oddEven(1.5);