function spyMaster(input) {
    let specialKey = input.shift();

    let pattern = new RegExp(`(^|\\s)(${specialKey})(\\s+[A-Z!%$#]{8,})(\\.|\\,|\\s|$)`, `gmi`);

    for (let i = 0; i < input.length; i++) {
        let match = input[i].replace(pattern, function (fullMatch, gr1, gr2, gr3, gr4) {
            let message = gr3;
            if (message.match(/\s+[A-Z!%$#]{8,}/)) {
                message = message.replace(/!/g, '1');
                message = message.replace(/%/g, '2');
                message = message.replace(/#/g, '3');
                message = message.replace(/\$/g, '4');
                message = message.toLowerCase();
            }
            return gr1 + gr2 + message + gr4;
        });

        if (match) {
            console.log(match);
        } else {
            console.log(input[i]);
        }
    }
}

spyMaster([
    'enCode',
    'Some messages are just not encoded what can you do?',
    'RE - ENCODE THEMNOW! - he said.',
    'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'
]);