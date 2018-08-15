// function roadRadar(input) {
//     let currentSpeed = input[0];
//     let area = input[1];
//
//     let motorwayLimit = 130;
//     let interstateLimit = 90;
//     let cityLimit = 50;
//     let residentialLimit = 20;
//
//     if(currentSpeed > 130 && area === "motorway"){
//         let different = currentSpeed - motorwayLimit;
//
//         if(different > 0 && different <=20){
//             console.log("speeding");
//         }else if(different > 20 && different<=40){
//             console.log("excessive speeding");
//         }else{
//             console.log("reckless driving");
//         }
//     }
//
//     else if(currentSpeed > 90 && area === "interstate"){
//         let different = currentSpeed - interstateLimit;
//
//         if(different > 0 && different <=20){
//             console.log("speeding");
//         }else if(different > 20 && different<=40){
//             console.log("excessive speeding");
//         }else{
//             console.log("reckless driving");
//         }
//     }
//
//     else if(currentSpeed > 50 && area === "city"){
//         let different = currentSpeed - cityLimit;
//
//         if(different > 0 && different <=20){
//             console.log("speeding");
//         }else if(different > 20 && different<=40){
//             console.log("excessive speeding");
//         }else{
//             console.log("reckless driving");
//         }
//     }
//
//     else if(currentSpeed > 20 && area === "residential"){
//         let different = currentSpeed - residentialLimit;
//
//         if(different > 0 && different <=20){
//             console.log("speeding");
//         }else if(different > 20 && different<=40){
//             console.log("excessive speeding");
//         }else{
//             console.log("reckless driving");
//         }
//     }
// }

function roadRadar(input) {
    let currentSpeed = input[0];
    let area = input[1];

    function getLimit(area) {
        switch (area) {
            case "city": return 50;
            case "interstate": return 90;
            case "motorway": return 130;
            case "residential": return 20;
        }
    }

    let limit = getLimit(area);

    function getInfraction(currentSpeed, limit) {
        let overspeed = currentSpeed - limit;

        if(overspeed <= 0) {
            return false;
        } else if(overspeed > 0 && overspeed <= 20){
            return "speeding";
        } else if(overspeed > 20 && overspeed <= 40) {
            return "excessive speeding";
        } else {
            return "reckless driving";
        }
    }

    let infraction = getInfraction(currentSpeed, limit);

    if(infraction) {
        console.log(infraction);
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);
