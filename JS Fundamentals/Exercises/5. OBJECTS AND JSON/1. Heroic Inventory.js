function heroicInventory(input) {
    let result = [];

    for (let hero of input) {
        let[name, level, items] = hero.split(" / ");

        // let currentHero = array[i].split(/\s\/\s/);
        // let name = currentHero[0];
        // let level = Number(currentHero[1]);
        // let items = [];

        items = items === undefined ? [] : items.split(', ');

        let currentHero = {name: name, level: Number(level), items: items};

        result.push(currentHero);
    }

    console.log(JSON.stringify(result))

}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
                 'Derek / 12 / BarrelVest, DestructionSword',
                 'Hes / 1 / Desolator, Sentinel, Antara'
                ]);