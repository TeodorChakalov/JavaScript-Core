function gameOfEpic(obj, matrix) {
    let kingdoms = {};
    let kingdomWinLoses = {};
    let generalWinLoses = {};

    for (let currentRow of obj) {
        let currentKingdom = currentRow.kingdom;
        let currentGeneral = currentRow.general;
        let currentValue = Number(currentRow.army);

        if (!kingdoms.hasOwnProperty(currentKingdom)) {
            kingdoms[currentKingdom] = {};
            kingdoms[currentKingdom][currentGeneral] = currentValue;
            kingdomWinLoses[currentKingdom] = {};
            kingdomWinLoses[currentKingdom]['wins'] = 0;
            kingdomWinLoses[currentKingdom]['losses'] = 0;
            generalWinLoses[currentGeneral] = {};
            generalWinLoses[currentGeneral]['wins'] = 0;
            generalWinLoses[currentGeneral]['losses'] = 0;

        }else{
            if (!kingdoms[currentKingdom].hasOwnProperty(currentGeneral)) {
                kingdoms[currentKingdom][currentGeneral] = currentValue;
                generalWinLoses[currentGeneral] = {};
                generalWinLoses[currentGeneral]['wins'] = 0;
                generalWinLoses[currentGeneral]['losses'] = 0;
            } else{
                kingdoms[currentKingdom][currentGeneral] += currentValue;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        let attackingKingdom = currentRow[0];
        let attackingGeneral = currentRow[1];
        let defendingKingdom = currentRow[2];
        let defendingGeneral = currentRow[3];

        if (attackingKingdom === defendingKingdom) {
            continue;
        }

        if (kingdoms[attackingKingdom][attackingGeneral] > kingdoms[defendingKingdom][defendingGeneral]) {
            kingdoms[attackingKingdom][attackingGeneral] += kingdoms[attackingKingdom][attackingGeneral] * 0.1;
            kingdoms[attackingKingdom][attackingGeneral] = Math.floor(kingdoms[attackingKingdom][attackingGeneral]);
            kingdoms[defendingKingdom][defendingGeneral] -= kingdoms[defendingKingdom][defendingGeneral] * 0.1;
            kingdoms[defendingKingdom][defendingGeneral] = Math.floor(kingdoms[defendingKingdom][defendingGeneral]);
            kingdomWinLoses[attackingKingdom]['wins'] += 1;
            kingdomWinLoses[defendingKingdom]['losses'] += 1;
            generalWinLoses[attackingGeneral]['wins'] += 1;
            generalWinLoses[defendingGeneral]['losses'] += 1;

        } else if(kingdoms[attackingKingdom][attackingGeneral] < kingdoms[defendingKingdom][defendingGeneral]) {
            kingdoms[attackingKingdom][attackingGeneral] -= kingdoms[attackingKingdom][attackingGeneral] * 0.1;
            kingdoms[attackingKingdom][attackingGeneral] = Math.floor(kingdoms[attackingKingdom][attackingGeneral])
            kingdoms[defendingKingdom][defendingGeneral] += kingdoms[defendingKingdom][defendingGeneral] * 0.1;
            kingdoms[defendingKingdom][defendingGeneral] = Math.floor(kingdoms[defendingKingdom][defendingGeneral]);
            kingdomWinLoses[defendingKingdom]['wins'] += 1;
            kingdomWinLoses[attackingKingdom]['losses'] += 1;
            generalWinLoses[defendingGeneral]['wins'] += 1;
            generalWinLoses[attackingGeneral]['losses'] += 1;
        }
    }

    let sortObj = Object.keys(kingdoms).sort(function(a,b){
        if (kingdomWinLoses[a]['wins'] == kingdomWinLoses[b]['wins']) {
            if (kingdomWinLoses[a]['losses'] == kingdomWinLoses[b]['losses']) {
                return a.localeCompare(b);
            }
            return kingdomWinLoses[a]['losses'] - kingdomWinLoses[b]['losses']
        }
        return kingdomWinLoses[b]['wins'] - kingdomWinLoses[a]['wins']
    })

    for (let key of sortObj) {
        console.log(`Winner: ${key}`);

        let generalObj = Object.keys(kingdoms[key]).sort(function(a,b){
            return kingdoms[key][b] - kingdoms[key][a];
        });

        for (let generals of generalObj) {
            console.log(`/\\general: ${generals}`);
            console.log(`---army: ${kingdoms[key][generals]}`);
            console.log(`---wins: ${generalWinLoses[generals]['wins']}`)
            console.log(`---losses: ${generalWinLoses[generals]['losses']}`)
        }
        break;
    }
}

gameOfEpic(
    [ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);