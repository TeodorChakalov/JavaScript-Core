function travelPlans(input) {

    let totalGold = 0;
    let specializedCounter = 1;
    let clumsyCounter1 = 1;
    let clumsyCounter2 = 1;
    for (let i = 0; i < input.length; i++) {
        let firstobj = input[i].split(" : ");
        let proffesions = firstobj[0];
        let gold = Number(firstobj[1]);

        if (proffesions === "Programming" || proffesions === "Hardware maintenance" || proffesions === "Cooking" || proffesions === "Translating" || proffesions === "Designing") {
            gold = gold - 0.2 * gold;
            if (specializedCounter % 2 === 0) {
                if (gold < 200) {
                    continue;
                }
                totalGold += (gold + 200);
            }else{
                if (gold < 200) {
                    continue;
                }
                totalGold += gold;
            }
            specializedCounter++;
        }
        else if (proffesions === "Singing" || proffesions === "Accounting" || proffesions === "Teaching" || proffesions === "Exam-Making" || proffesions === "Acting" || proffesions === "Writing" || proffesions === "Lecturing" || proffesions === "Modeling" || proffesions === " Nursing") {
            if (clumsyCounter1 % 2 === 0) {
                gold = gold - 0.05 * gold;
                totalGold += gold;
            }else{
                totalGold += gold;
            }
            clumsyCounter1++;
        }
        else if (proffesions === "Singing" || proffesions === "Accounting" || proffesions === "Teaching" || proffesions === "Exam-Making" || proffesions === "Acting" || proffesions === "Writing" || proffesions === "Lecturing" || proffesions === "Modeling" || proffesions === " Nursing") {
            if (clumsyCounter2 % 3 === 0) {
                gold = gold - 0.1 * gold;
                totalGold += gold;
            }else{
                totalGold += gold;
            }
            clumsyCounter2++;
        }
        else{
            totalGold+=gold;
        }
    }

    if (totalGold < 1000) {
        console.log(`Final sum: ${totalGold.toFixed(2)}`);
        console.log(`Mariyka need to earn ${(1000 - totalGold).toFixed(2)} gold more to continue in the next task.`)
    } else {
        console.log(`Final sum: ${totalGold.toFixed(2)}`);
        console.log(`Mariyka earned ${(totalGold - 1000).toFixed(2)} gold more.`)
    }
}

travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);
travelPlans(["Programming : 300", "Cooking : 75", "Hardware maintenance : 50"]);