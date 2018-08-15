function medenkaWars(input) {

    let previousDarkDamage = 0;
    let previousWhiteDamage = 0;
    let countDarkAttacks = 0;
    let countWhiteAttacks = 0;
    let normalAttack = 0;
    let normalWhiteAttack = 0;

    for (let i = 0; i < input.length; i++) {
        let splitInput = input[i].split(" ");
        let damage = Number(splitInput[0]);
        let color = splitInput[1];

        if (color === "dark") {
            if (damage !== previousDarkDamage) {
                countDarkAttacks = 1;
            } else {
                countDarkAttacks++;
            }
            if (countDarkAttacks % 5 === 0) {
                normalAttack += (damage * 60) * 4.5;
            } else {
                normalAttack += damage * 60;
            }
            previousDarkDamage = damage;
        }
        if (color === "white") {
            if (damage !== previousWhiteDamage) {
                countWhiteAttacks = 1;
            } else {
                countWhiteAttacks++;
            }
            if (countWhiteAttacks % 2 === 0) {
                normalWhiteAttack += (damage * 60) * 2.75;
            } else {
                normalWhiteAttack += damage * 60;
            }
            previousWhiteDamage = damage;
        }
    }

    if (normalWhiteAttack > normalAttack) {
        console.log("Winner - Vitkor");
        console.log(`Damage - ${normalWhiteAttack}`);
    } else {

        console.log("Winner - Naskor");
        console.log(`Damage - ${normalAttack}`);

    }
}

medenkaWars(['5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas'
]);