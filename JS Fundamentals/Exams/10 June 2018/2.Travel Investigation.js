function travelInvestigation(input) {
    let firstLine = input.shift();
    let symbol = input.shift();

    //symbol = symbol.split(", ").filter(w => w !== "");

    firstLine = firstLine.split(`${symbol}, `).filter(w => w !== "");

    let count1 = 0;
    let count2 = 0;
    let flag1 = 1;
    let flag2 = 1;

    for(let j = 0; j < input.length; j++) {
        //let regex = new RegExp(`${firstLine[j]}}`, "gi");
        let regex = /([a-z0-9\s]+)KoftiPochivkaLTD|Minkatrans|BulgariaTour([a-z0-9\s]+)KoftiPochivkaLTD|Minkatrans|BulgariaTour([a-z0-9\s]+)KoftiPochivkaLTD|Minkatrans|BulgariaTour/gmi;
        if (input[j].match(regex)) {
            count1++;
            if(flag1 === 1){
                console.log("ValidSentences");
            }
            console.log(`${count1}. ${input[j].toLowerCase()}`);
        flag1++;
        } else {
            count2++;
            if(flag2 === 1){
                console.log("==============================");
                console.log("InvalidSentences");
            }
            console.log(`${count2}. ${input[j].toLowerCase()}`);
            flag2++;
        }
    }
}

travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]
);

// travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
//     "@,",
//     "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//     "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
//     "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]);