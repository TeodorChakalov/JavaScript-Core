function functionalCalculator(a, b, operator){
    switch (operator){
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;
    }
}

functionalCalculator(2, 4, '+');
functionalCalculator(3, 3, '/');