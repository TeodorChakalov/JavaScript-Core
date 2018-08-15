function validityChecker(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    let distanceFirstPoint = Math.sqrt(x1 ** 2 + y1 ** 2);
    let distanceSecondPoint = Math.sqrt(x2 ** 2 + y2 ** 2);
    let distanceBetweenPoints = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    if(Number.isInteger(distanceFirstPoint)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    if(Number.isInteger(distanceSecondPoint)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    if(Number.isInteger(distanceBetweenPoints)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);
