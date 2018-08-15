class Player {
    constructor(nickName){
        this.nickname = nickName;
        this.scoresList = [];
    }

    get scoreCount(){
        return this.scoresList.length;
    }

    get highestScore() {
        return this.scoresList[0];
    }

    get topFiveScore() {
        return this.scoresList.slice(0, 5);
    }

    addScore(score){
        if (!isNaN(score) && score !== null) {
            this.scoresList.push(Number(score));
            this.scoresList.sort((a, b) => b - a);
        }
        return this;
    }

    toString() {
        return `${this.nickname}: [${this.scoresList}]`
    }
}

let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
console.log();
let maria = new Player("Maria").addScore(350).addScore(779).addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);