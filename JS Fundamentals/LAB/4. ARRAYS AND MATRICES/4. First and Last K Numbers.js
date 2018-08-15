function firstAndLastKNumbers(input) {
    let k = input.shift();
    let first = input.slice(0, k);
    let second = input.slice(input.length - k);
    console.log(first.join(' '));
    console.log(second.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);