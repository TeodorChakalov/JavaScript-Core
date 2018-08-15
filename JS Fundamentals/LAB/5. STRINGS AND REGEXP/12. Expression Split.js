function expressionSplit(text) {
    let regex = text.split(/[(),.;\s]+/);
    console.log(regex.join('\n'))
}

expressionSplit('let sum = 4 * 4,b = "wow";');