function compoundInterest(input) {
    let principalSum = input[0];
    let interestRate = input[1] / 100;
    let frequency = 12 / input[2];
    let length = input[3];

    let amount = principalSum * Math.pow((1 + interestRate / frequency), (frequency * length));
    console.log(amount.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);