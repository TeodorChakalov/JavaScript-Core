function quadraticEquation(a, b, c) {
    let D = b * b - 4 * a * c;
    let x1 = (-b - Math.sqrt(D)) / (2 * a);
    let x2 = (-b + Math.sqrt(D)) / (2 * a);

    if(D > 0){
        console.log(x1);
        console.log(x2);
    }
    else if(D === 0){
        console.log(x1);
    }else{
        console.log("no");
    }
}

quadraticEquation(6, 11 , -35);
quadraticEquation(1 , -12, 36);