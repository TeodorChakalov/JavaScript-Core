function stringSplit(text, delimiter) {
    let splittedElements = text.split(delimiter);
    console.log(splittedElements.join('\n'));
}

stringSplit('One-Two-Three-Four-Five', '-');