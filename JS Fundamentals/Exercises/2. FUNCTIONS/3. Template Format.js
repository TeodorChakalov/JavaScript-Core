function templateFormat(input) {
    let question = input[0];
    let answer = input[1];

    let result = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    result+= `<quiz>\n`;

    for (let i = 0; i < input.length; i+=2) {
        result+=`  <question>\n`;
        result+= `    ${input[i]}\n`;
        result+=`  </question>\n`;

        result+=`  <answer>\n`;
        result+= `    ${input[i+1]}\n`;
        result+=`  </answer>\n`;
    }

    result+=`</quiz>`;
    console.log(result);
}

templateFormat(["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?",  "Sirius"]
)