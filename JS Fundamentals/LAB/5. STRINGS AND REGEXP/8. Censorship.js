function censorship(text, forbiddenWords) {
    for (let word of forbiddenWords) {
        let subs = '-'.repeat(word.length);
        while (text.indexOf(word) > -1){
            text = text.replace(word, subs);
        }
    }
    console.log(text);
}

censorship('roses are red, violets are blue', [', violets are', 'red']);