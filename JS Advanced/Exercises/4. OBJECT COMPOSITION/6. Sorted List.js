function sortedList() {
    let obj = (function () {
        let size = 0;
        let arr = [];
        let sorting = (a, b) => a - b;

        let add = function (element) {
            arr.push(element);
            arr.sort(sorting);
            this.size++;
            return arr;
        };

        let remove = function (index) {
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 1);
                arr.sort(sorting);
                this.size--;
                return arr;
            }
        };

        let get = function (index) {
            if(index >= 0 && index < arr.length){
                return arr[index];
            }
        };

        return {add, remove, get, size};
    }());
    return obj;
}

let result = sortedList();
// let a = result.hasOwnProperty('size');
// console.log(a);
console.log(result.add(5));
console.log(result.add(6));
console.log(result.get(1));
console.log(result.size);
