function smallestTwoNumbers(input) {
    input.sort((a,b) => a-b);
    console.log(input.slice(0,2).join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);