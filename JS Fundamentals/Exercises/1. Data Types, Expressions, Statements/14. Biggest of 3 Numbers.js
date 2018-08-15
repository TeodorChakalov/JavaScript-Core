function biggestOf3Numbers(input) {
    let a = input[0];
    let b = input[1];
    let c = input[2];
    let biggestNum = Math.max(a, b, c);
    console.log(biggestNum);
}

biggestOf3Numbers([5, -2, 7]);
