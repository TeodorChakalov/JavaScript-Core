function binaryAlgorithm(numbers) {
    for (let num of numbers) {
        let result = Math.log2(num);
        console.log(result);
    }
}

binaryAlgorithm([1024, 1048576, 256, 1, 2]);