function tag(input) {
    let fileLocation = input[0];
    let text = input[1];
    console.log(`<img src="${fileLocation}" alt="${text}">`);
}

tag(['smiley.gif', 'Smiley Face']);