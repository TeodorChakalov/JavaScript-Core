function insideVolume(input) {
    for (let i = 0; i < input.length; i += 3) {
        let length = input[i];
        let width = input[i + 1];
        let height = input[i + 2];

        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;

        if (length >= x1 && length <= x2 && width >= y1 && width <= y2 && height >= z1 && height <= z2) {
            console.log("inside");
        } else {
            console.log("outside");
        }
    }
}

// function insideVolume(input) {
//     for (let i = 0; i < input.length; i += 3) {
//         let length = input[i];
//         let width = input[i + 1];
//         let height = input[i + 2];
//
//         if (pointInVolume(length, width, height)) {
//             console.log("inside");
//         } else {
//             console.log("outside");
//         }
//     }
// }
//
// function pointInVolume(length, width, height) {
//     let x1 = 10, x2 = 50;
//     let y1 = 20, y2 = 80;
//     let z1 = 15, z2 = 50;
//
//     if (length >= x1 && length <= x2 && width >= y1 && width <= y2 && height >= z1 && height <= z2) {
//         return true;
//     } else {
//         return false;
//     }
// }


insideVolume([8, 20, 22]);
insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);