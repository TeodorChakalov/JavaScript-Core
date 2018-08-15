function inheritance(input) {
    let closure = (function () {

        let result = {};

        function create(arr) {
            let name = arr[0];
            let inheritName = arr[2];
            if(arr.length > 1){
                result[name] = Object.create(result[inheritName]);
            }else{
                result[name] = {};
            }
        }
        function set(arr) {
            let name = arr[0];
            let key = arr[1];
            let value = arr[2];
            result[name][key] = value;
        }
        function print(arr) {
            let resultArr = [];
            let name = arr[0];
            for (let key in result[name]) {
                resultArr.push(key + ":" + result[name][key]);
            }
            console.log(resultArr.join(', '));
        }
        return {create, set, print};
    })();

    for (let str of input) {
        let args = str.split(' ');
        let command = args.shift();
        closure[command](args);
    }
}

inheritance(['create c1',
             'create c2 inherit c1',
             'set c1 color red',
             'set c2 model new',
             'print c1',
             'print c2']);