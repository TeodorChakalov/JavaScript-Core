(function arrayExtension() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };
    Array.prototype.sum = function () {
        return this.reduce((a,b) => a + b);
    };
    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
}());

var testArray = [1, 2, 3];
console.log(testArray.last());
console.log(testArray.skip(2).toString());
console.log(testArray.take(1).toString());
console.log(testArray.sum());
console.log(testArray.average());
