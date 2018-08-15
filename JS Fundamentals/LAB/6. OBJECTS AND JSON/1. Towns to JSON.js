function townsToJSON(towns) {
    let result = [];

    for (let town of towns.slice(1)) {
        //let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);
        town = town.split('|').filter(w => w!== "").map(e => e.trim());

        let currentTown = {Town: town[0], Latitude: Number(town[1]), Longitude: Number(town[2])};
        result.push(currentTown);

    }
    console.log(JSON.stringify(result))
}

townsToJSON(['| Town | Latitude | Longitude |',
            '| Sofia | 42.696552 | 23.32601 |',
            '| Beijing | 39.913818 | 116.363625 |']);