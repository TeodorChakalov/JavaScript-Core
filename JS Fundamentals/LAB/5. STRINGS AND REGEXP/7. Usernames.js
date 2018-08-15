function userNames(arr) {
    let result = [];
    for (let mail of arr) {
        let [username, rest] = mail.split('@');
        result.push(username + '.' + rest.split('.').map(a => a[0]).join(''));
    }
    console.log(result.join(', '));
}

userNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);

