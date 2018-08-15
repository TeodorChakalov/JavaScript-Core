function jansNotation(input){
    let arrayOfNumbers = [];
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if(Number(current)){
            arrayOfNumbers.push(current);
        }else{
            if(arrayOfNumbers.length < 2){
                console.log("Error: not enough operands!");
                return;
            }
            let num2 = arrayOfNumbers.pop();
            let num1 = arrayOfNumbers.pop();

            switch (current){
                case "+": arrayOfNumbers.push(num1 + num2); break;
                case "-": arrayOfNumbers.push(num1 - num2); break;
                case "/": arrayOfNumbers.push(num1 / num2); break;
                case "*": arrayOfNumbers.push(num1 * num2); break;
            }
        }
    }

    if(arrayOfNumbers.length > 1){
        console.log("Error: too many operands!");
    }else{
        console.log(arrayOfNumbers[0]);
    }
}

// function jansNotation(input) {
//     let arr = [];
//     let symbols = ["+", "-", "*", "/"];
//
//     for (let element of input) {
//         if (!symbols.find(n => n === element)) {
//             arr.push(Number(element));
//             continue;
//         }
//         if (arr.length < 2) {
//             return "Error: not enough operands!";
//         }
//
//         let num2 = arr.pop();
//         let num1 = arr.pop();
//         let sum = calculate(num1, num2, element);
//
//         arr.push(sum);
//
//     }
//     if (arr.length > 1) {
//         return "Error: too many operands!";
//     } else {
//         return arr.join("");
//     }
//
//     function calculate(num1, num2,element) {
//         return element === "*" ?
//             num1 * num2 : element === "/" ?
//                 num1 / num2 : element === "+" ?
//                     num1 + num2 : num1 - num2;
//     }
// }

// function jansNotation(arr) {
//     let stack = [];
//     let instructionSet = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//         '*': (a, b) => a * b,
//         '/': (a, b) => a / b,
//     };
//
//     for (let i of arr) {
//         let instruction = instructionSet[i];
//         if (instruction === undefined) {
//             stack.push(i);
//         } else {
//             let [reg2, reg1] = [stack.pop(), stack.pop()];
//             if (reg1 === undefined || reg2 === undefined) {
//                 console.log('Error: not enough operands!');
//                 return;
//             }
//             stack.push(instruction(reg1, reg2));
//         }
//     }
//
//     if (stack.length > 1) {
//         console.log('Error: too many operands!');
//     } else {
//         console.log(stack.pop());
//     }
// }

jansNotation([5, 3, 4, '*', '-']);