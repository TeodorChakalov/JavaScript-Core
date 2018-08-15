function sortArray(input) {
    let sorting = input.sort().sort((a, b) => a.length - b.length).join('\n');
    console.log(sorting);
}

// function sortArray(input) {
//     function compare(a, b) {
//         if(a.length < b.length) return -1;
//         else if(a.length > b.length) return 1;
//         else{
//             if(a < b) return -1;
//             else if(a > b) return 1;
//             else return 0;
//         }
//     }
//
//     console.log(input.sort(compare).join('\n'));
// }

//sortArray(['alpha', 'beta', 'gamma']);
sortArray(['test', 'Deny', 'omen', 'Default']);