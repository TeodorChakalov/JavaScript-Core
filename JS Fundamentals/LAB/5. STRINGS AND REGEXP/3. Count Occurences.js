function countOccurrences(target, text) {
    let count = 0;
    let index = text.indexOf(target);
    while (index > -1){
        count++;
        index = text.indexOf(target, index + 1);
    }
    console.log(count);
}

countOccurrences('the', 'the quick brown fox jumps over the lay dog.');