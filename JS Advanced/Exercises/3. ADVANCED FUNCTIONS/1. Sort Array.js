function solve(arr, order) {
    if(order === 'desc'){
        arr = arr.sort((a,b) => {
            return b-a;
        })
    }else if(order === 'asc'){
        arr = arr.sort((a,b) => {
            return a-b;
        })
    }
    return arr;
}

// function solve(array, argument) {
//     let ascComparator = function (a , b) {
//         return a - b;
//     }
//     let descComparator = function (a , b) {
//         return b - a;
//     }
//     let sortingStrategy = {
//         'asc': ascComparator,
//         'desc': descComparator
//     }
//
//     return array.sort(sortingStrategy[argument])
// }

console.log(solve([14, 7, 17, 6, 8], 'desc'));