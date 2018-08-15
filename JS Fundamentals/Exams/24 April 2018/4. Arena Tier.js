function arenaTier(input) {
    let result = {};

        for (let str of input) {
        if (str.includes(" -> ")) {
            let [name, technique, skill] = str.split(" -> ");
            if (!result.hasOwnProperty(name)) {
                result[name] = {};
                result[name][technique] = Number(skill);
                result[name]['__total__'] = Number(skill);
            } else {
                if (!result[name].hasOwnProperty(technique)) {
                    result[name][technique] = Number(skill);
                    result[name]["__total__"] += Number(skill);
                } else {
                    if (result[name][technique] < skill) {
                        result[name]["__total__"] -= result[name][technique];
                        result[name]["__total__"] += Number(skill);
                        result[name][technique] = Number(skill);
                    }
                }
            }
        } else if (str.includes(" vs ")) {
            let [firstGladiator, secondGladiator] = str.split(" vs ");

            if (result.hasOwnProperty(firstGladiator) && result.hasOwnProperty(secondGladiator)) {
                for (let g1Technique in result[firstGladiator]) {
                    let g1Skill = result[firstGladiator][g1Technique];
                    let g2Skill = result[secondGladiator][g1Technique];

                    if (g1Skill && g2Skill && g1Skill !== '__total__') {
                        if (g1Skill > g2Skill) {
                            delete result[secondGladiator];
                            break;
                        } else if (g1Skill < g2Skill) {
                            delete result[firstGladiator];
                            break;
                        }
                    }
                }
            }
        }
    }
    let sortedGladiators = Object.keys(result).sort((g1, g2) =>{
        let difference = result[g2]["__total__"] - result[g1]["__total__"];
        if(difference === 0){
            return g1.localeCompare(g2);
        }
        return difference;
    });

    for (let gl of sortedGladiators) {
        console.log(`${gl}: ${result[gl]["__total__"]} skill`);

        let sortedItems = Object.keys(result[gl]).filter(i => i!=="__total__").sort((i1, i2) =>{
            let difference = result[gl][i2] - result[gl][i1];
            if(difference === 0){
                return i1.localeCompare(i2);
            }
            return difference;
        });

        for (const item of sortedItems) {
            console.log(`- ${item} <!> ${result[gl][item]}`)
        }
    }
}

arenaTier(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'])