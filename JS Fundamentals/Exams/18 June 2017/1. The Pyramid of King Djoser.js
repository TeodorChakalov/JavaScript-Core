function materials(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let finalHeight = 1;

    while (base > 2){
        let bulk = Math.pow((base - 2), 2);
        let marbleDecoration = (base * 4) - 4;
        stone += bulk * increment;

        if(finalHeight % 5 === 0){
            lapis += marbleDecoration * increment;
        }else {
            marble += marbleDecoration * increment;
        }
        base-=2;
        finalHeight++;
    }
    gold += (base ** 2) * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeight * increment)}`);
}

materials(11, 1);