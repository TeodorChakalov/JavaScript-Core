// function validateRequest(obj) {
//     let methods = ["GET", "POST", "DELETE", "CONNECT"];
//
//     if(! (obj.method && methods.includes(obj.method))){
//         throw new Error("Invalid request header: Invalid Method");
//     }
//
//     let uriRegex = /^[a-zA-Z0-9.]+$/g;
//
//     if(!obj.uri && (!uriRegex.test(obj.uri) || obj.uri !== "*")){
//         throw new Error("Invalid request header: Invalid URI");
//     }
//
//     let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
//
//     if(!obj.version && !versions.includes(obj.version)){
//         throw new Error("Invalid request header: Invalid Version");
//     }
//
//     let messageRegex = /^[^<>\\&'"]+$/g;
//
//     if(!obj.hasOwnProperty('message') && (!messageRegex.test(obj.message) || obj.message !== "")) {
//         throw new Error("Invalid request header: Invalid Message");
//     }
//
//     return obj;
// }

function validateRequest(obj) {
    let method = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriPattern = /^[A-Za-z0-9.]+$/g;
    let messagePattern = /^((?![<>\\&'"]).)*$/g;
    let validKey = {'method': 'Method', 'uri': 'URI', 'version': 'Version', 'message': 'Message'};
    let checkKey = keyValidator();

    let validator = {
        'method': (function () {
            if (!method.includes(obj['method'])) {
                return false;
            }
            return true;
        })(),
        'uri': (function () {
            if ((!uriPattern.test(obj['uri'])) && obj['uri'] !== '*') {
                return false;
            }
            return true;
        })(),
        'version': (function () {
            if (!version.includes(obj['version'])) {
                return false;
            }
            return true;
        })(),
        'message': (function () {
            if (!messagePattern.test(obj['message'])) {
                return false;
            }
            return true;
        })()
    }

    for (const property in validator) {
        if (!validator[property]) {
            throw Error(`Invalid request header: Invalid ${validKey[property]}`)
        }
    }

    function keyValidator() {
        for (const key in validKey) {
            if (!obj.hasOwnProperty(key)) {
                throw Error(`Invalid request header: Invalid ${validKey[key]}`)
            }
        }
        return true;
    }

    return obj;
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));


