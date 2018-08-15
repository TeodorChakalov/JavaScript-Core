function cone(radius, height) {
    let volume = Math.PI * radius * radius * height / 3;
    console.log("volume = " +volume.toFixed(4));
    let s = Math.sqrt(radius*radius + height * height);
    let L = Math.PI * radius * s;
    let B = Math.PI * radius * radius;
    let A = L + B;
    console.log("area = " + A.toFixed(4));
}

cone(3, 5);