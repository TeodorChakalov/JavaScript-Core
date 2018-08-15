function aggregateElements(input) {

    aggregate(input, 0, (a, b) => a + b);
    aggregate(input, 0, (a, b) => a + (1/b));
    aggregate(input, "", (a, b) => a + b);

    function aggregate(array, initialValue, func) {
        for (let i = 0; i < array.length; i++) {
            initialValue = func(initialValue, array[i]);
        }
        console.log(initialValue);
    }
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);