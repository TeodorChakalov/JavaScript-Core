let functionSum = (function () {
    let sum = 0;

    return function add(num) {
        sum += num;
        add.toString = () => sum;
        return add;
    }
})();
console.log(functionSum(1).toString());
console.log(functionSum(1)(6)(-3).toString() - 1);