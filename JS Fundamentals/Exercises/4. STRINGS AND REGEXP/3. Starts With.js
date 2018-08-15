function checkString(mainString, substring) {
    if(mainString === substring){
        console.log('true');
    }else {
        console.log('false');
    }
}

checkString('How have you been?', 'how');
checkString('The quick brown fox…', 'The quick brown fox…');