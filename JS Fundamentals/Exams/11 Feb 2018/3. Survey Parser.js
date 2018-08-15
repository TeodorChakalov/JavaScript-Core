function survayParser(text) {
    let pattern = /<svg>(.+?)<\/svg>/gs;
    if (!pattern.exec(text)) {
        console.log("No survey found");
        return;
    }

    pattern = /<cat><text>((.|\n)*)\[((.|\n)*)\]<\/text><\/cat>\s*<cat>((.|\n)*)<\/cat>/g;
    let matches = pattern.exec(text);

    if (matches) {
        let label = matches[3];
        let ratings = matches[5];

        pattern = /<g><val>([1-9]|10)<\/val>([0-9]+)<\/g>/g;

        let result = 0;
        let count = 0;
        while (matches = pattern.exec(ratings)) {
            let value = Number(matches[1]);
            let vote = Number(matches[2]);

            count += vote;
            result += value * vote;
        }
        result = result / count;
        console.log(`${label}: ${parseFloat(result.toFixed(2))}`);
        return;

    }
    console.log("Invalid format");
}

survayParser(`<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>`);