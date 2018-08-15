function bill(text) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+\.\d+)/g;
    text = text.replace(regex, (all, gr1, gr2) => Number(gr1) * Number(gr2));
    console.log(text);
}

bill('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');