function listProcessor(arr) {
    let closure = (function () {
        let result = [];

        function add(str) {
            result.push(str);
        }

        function remove(str) {
            result = result.filter(el => el !== str);
        }

        function print() {
            console.log(result.join(','));
        }

        return {add, remove, print};
    })();

    for (let str of arr) {
        let [command, value] = str.split(' ');
        closure[command](value);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);