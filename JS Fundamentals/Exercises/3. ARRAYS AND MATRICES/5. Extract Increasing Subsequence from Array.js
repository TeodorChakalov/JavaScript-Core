function addIncreasingSubsequence(input) {
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < input.length; i++) {
        if(input[i] >= max){
            max = input[i];
            console.log(max);
        }
    }
}

addIncreasingSubsequence([1,3, 8, 4, 10, 12, 3, 2, 24]);