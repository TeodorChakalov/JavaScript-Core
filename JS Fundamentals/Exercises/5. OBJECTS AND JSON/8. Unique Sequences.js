function uniqueSequences(input) {
    let collectSystems = new Map();

    for (let line of input) {
        let [system, component, subComp] = line.split(" | ");

        if (!collectSystems.has(system)) {
            collectSystems.set(system, new Map());
        }
        if (!collectSystems.get(system).has(component)) {
            collectSystems.get(system).set(component, []);
        }
        collectSystems.get(system).get(component).push(subComp);
    }
    let sortSystemMap = [...collectSystems.keys()].sort((a, b) => sortSystems(a, b));
    for (let system of sortSystemMap) {
        console.log(system);

        let sortComponentMap = [...collectSystems.get(system).keys()].sort((a, b) => sortComponents(system, a, b));
        for (let component of sortComponentMap) {
            console.log(`|||${component}`);
            collectSystems.get(system).get(component).forEach(e => console.log(`||||||${e}`))
        }
    }

    function sortSystems(a, b) {
        if (collectSystems.get(a).size !== collectSystems.get(b).size) {
            return collectSystems.get(b).size - collectSystems.get(a).size;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }

    function sortComponents(system, a, b) {
        return collectSystems.get(system).get(b).length - collectSystems.get(system).get(a).length;
    }
}

uniqueSequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);