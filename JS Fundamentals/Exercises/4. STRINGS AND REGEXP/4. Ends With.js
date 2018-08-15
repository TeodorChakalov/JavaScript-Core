function checkString(mainString, substring) {
    let result = mainString.endsWith(substring);
    if(result){
        console.log('true');
    }else{
        console.log('false');
    }
}

// function checkString(mainString, substring) {
//     mainString = mainString.split('').reverse().join('');
//     substring = substring.split('').reverse().join('');
//     if(mainString.startsWith(substring)){
//         console.log('true');
//     }else{
//         console.log('false');
//     }
// }

checkString('This sentence ends with fun?', 'fun?');