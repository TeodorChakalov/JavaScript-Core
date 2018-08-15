function spiceMustFlow(input) {
    let number = Number(input);
    let leavingWorkers = 0;
    let countDays = 0;

    while (number >= 100){
        leavingWorkers += (number - 26);
        number-=10;
        countDays++;
    }
    if(leavingWorkers >= 26){
        leavingWorkers -= 26
    }

    console.log(countDays);
    console.log(leavingWorkers);
}

spiceMustFlow(['450']);