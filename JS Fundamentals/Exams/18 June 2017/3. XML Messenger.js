function xmlMessenger(str) {
    let regex = /^<message\s+([a-z]+=\"[a-zA-Z0-9. ]+\"\s*)+>([\s\S]+)<\/message>$/;
    let matches = regex.exec(str);
    if (matches) {
        let senderRegex = /\bfrom=\"([a-zA-Z0-9. ]+)\"/;
        let recepientRegex = /\bto=\"([a-zA-Z0-9. ]+)\"/;

        let nameSender = senderRegex.exec(str);
        let namerecepient = recepientRegex.exec(str);
        let message = matches[2].split("\n");

        if (!nameSender || !namerecepient) {
            console.log("Missing attributes");
            return;
        } else {
            let result = `<article>\n`;
            result += `  <div>From: <span class="sender">${nameSender[1]}</span></div>\n`;
            result += `  <div>To: <span class="recipient">${namerecepient[1]}</span></div>\n`;
            result += `  <div>\n`;

            for (let msg of message) {
                result += `   <p>${msg}</p>\n`;
            }
            result += `  </div>\n`;
            result += `</article>\n`;

            console.log(result);
            return;
        }
    }
    console.log("Invalid message format");
}

xmlMessenger('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>');