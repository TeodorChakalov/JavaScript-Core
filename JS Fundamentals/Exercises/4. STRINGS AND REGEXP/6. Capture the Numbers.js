// function captureTheNumber(input) {
//     console.log(input.join('').match(/[0-9]+/g).join(' '))
// }

function captureTheNumber(input) {
    let regex = /[0-9]+/g;
    let match;
    let result = [];

    for (let str of input) {
        while (match = regex.exec(str)){
            result.push(match);
        }
    }

    console.log(result.join(' '));
}


captureTheNumber(['The300',
                  'What is that?',
                  'I think it’s the 3rd movie.',
                  'Lets watch it at 22:45',
                ]);