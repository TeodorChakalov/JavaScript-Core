function palindrome(text) {
    for (let i = 0; i < text.length / 2; i++) {
        if(text[i] === text[text.length - 1 - i]){
            return true;
        }else{
            return false;
        }
    }
}

console.log(palindrome("haha"));
console.log(palindrome("racecar"));