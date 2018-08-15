function solve(arr) {
    return arr.reduce((a, b) => Math.max(a, b));
    //console.log(Math.max(...arr));
}

solve([10, 20, 5]);