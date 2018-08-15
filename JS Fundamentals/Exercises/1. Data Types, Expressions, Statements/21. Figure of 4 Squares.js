function figureOf4Squares(number) {

    if(number === 2){
        console.log("+++");
        return;
    }

    if(number === 4){
        for (let i = 1; i < number; i++) {
            console.log(("+" + "-".repeat(number - 2) + "+" + "-".repeat(number - 2) + "+"));
        }
        return;
    }
    if (number % 2 === 0) {
        console.log(("+" + "-".repeat(number - 2) + "+" + "-".repeat(number - 2) + "+"));

        for (let i = 1; i < (number - 3) / 2; i++) {
            console.log(("|" + " ".repeat(number - 2) + "|" + " ".repeat(number - 2) + "|"));
        }

        console.log(("+" + "-".repeat(number - 2) + "+" + "-".repeat(number - 2) + "+"));

        for (let i = 1; i < (number - 3) / 2; i++) {
            console.log(("|" + " ".repeat(number - 2) + "|" + " ".repeat(number - 2) + "|"));
        }

        console.log(("+" + "-".repeat(number - 2) + "+" + "-".repeat(number - 2) + "+"));
    }
    else {
        console.log(("+" + "-".repeat(number - 2) + "+" + "-".repeat(number - 2) + "+"));

        for (let i = 0; i < (number - 3) / 2; i++) {
            console.log(("|" + " ".repeat(number - 2) + "|" + " ".repeat(number - 2) + "|"));
        }

        console.log(("+" + "-".repeat(number - 2) + "+" + "-".repeat(number - 2) + "+"));

        for (let i = 0; i < (number - 3) / 2; i++) {
            console.log(("|" + " ".repeat(number - 2) + "|" + " ".repeat(number - 2) + "|"));
        }

        console.log(("+" + "-".repeat(number - 2) + "+" + "-".repeat(number - 2) + "+"));
    }
}

figureOf4Squares(3);