function bitcoinMining(input) {

    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;

    let sum = 0;
    let countBitcoins = 0;
    let dayOfFirstBitcoin = 0;

    for (let i = 1; i <= input.length; i++) {
        let grams = Number(input[i-1]);
        if(i % 3 === 0){
            grams = grams - 0.3 * grams;
        }

        sum += grams * goldPrice;

        while (sum >= bitcoinPrice){
            sum -= bitcoinPrice;
            countBitcoins++;
            if(countBitcoins === 1){
                dayOfFirstBitcoin = i;
            }
        }
    }

    console.log(`Bought bitcoins: ${countBitcoins}`);
    if(countBitcoins !== 0){
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}

bitcoinMining(['100', '200', '300']);