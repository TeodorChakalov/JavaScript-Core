function distanceOverTime(input) {
    let speedTwoObjects = Math.abs(input[0] - input[1]);
    let speedToMetersInSeconds = speedTwoObjects * 1000 / 3600;
    let distance = speedToMetersInSeconds * input[2];
    console.log(distance);
}

distanceOverTime([0, 60, 3600]);
distanceOverTime([11, 10, 120]);