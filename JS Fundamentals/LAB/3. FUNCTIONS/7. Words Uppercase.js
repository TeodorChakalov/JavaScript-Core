function wordsUppercase(text) {
    let result = text.split(/\W+/).filter(w => w!=="").join(", ").toUpperCase();
    console.log(result);
}

wordsUppercase('Hi, how are you   ?');
wordsUppercase('hello');