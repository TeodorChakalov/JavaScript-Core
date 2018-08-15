function arithmephile(input) {
    input = input.map(Number); // прави ги на масив от числа
    let array = [];

    for (let i = 0; i < input.length; i++) {
        let num = input[i];

        if(num >= 0 && num < 10){
            let sum = 1;
            for (let j = 1; j <= num; j++) {
                sum = sum * input[i+j];
            }
            array.push(sum);
        }
    }

    array = array.sort(function(a, b) {
        return b - a;
    });
    console.log(array.shift())
}

arithmephile(['100',
              '200',
              '2',
              '3',
              '2',
              '3',
              '2',
              '1',
              '1'
            ]);