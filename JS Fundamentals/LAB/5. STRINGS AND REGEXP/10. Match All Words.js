function matchAllWords(text) {
    let regex = /\W+/;
    let result = text.split(regex).filter(w => w!== "");
    console.log(result.join('|'));
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');