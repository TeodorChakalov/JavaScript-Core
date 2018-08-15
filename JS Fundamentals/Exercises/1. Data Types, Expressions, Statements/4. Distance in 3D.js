function distanceIn3D(input) {
    let sideA = Math.abs(input[0] - input[3]);
    let sideB = Math.abs(input[1] - input[4]);
    let sideC = Math.abs(input[2] - input[5]);

    let distanceBetweenPoints = Math.sqrt(sideA * sideA + sideB * sideB + sideC * sideC);
    console.log(distanceBetweenPoints);
}

distanceIn3D([1, 1, 0, 5, 4, 0]);
distanceIn3D([3.5, 0, 1, 0, 2, -1]);