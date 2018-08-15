function getUsernames(input) {
    let resultSet = new Set();

    for (let name of input) {
        resultSet.add(name);
    }

    let result = Array.from(resultSet).sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        }
    });

    // if (a.length !== b.length) {
    //     return a.length - b.length;
    // } else{
    //     return a.localeCompare(b);
    // }

    console.log(result.join("\n"));
}

getUsernames([
    'Rod',
    'RoD',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot',
]);