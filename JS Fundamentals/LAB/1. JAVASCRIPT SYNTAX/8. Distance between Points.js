function distanceBetweenPoints(x1,y1,x2,y2) {
    let firstSide = Math.abs(x1 - x2);
    let secondSide = Math.abs(y1 - y2);

    let thirdSide = Math.sqrt(Math.pow(firstSide,2) + Math.pow(secondSide,2));
    console.log(thirdSide);
}

distanceBetweenPoints(2, 4, 5, 0);