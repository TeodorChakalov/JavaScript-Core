function emailValidation(text) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;
    if(regex.test(text)){
        console.log('Valid');
    }else{
        console.log('Invalid');
    }
}

emailValidation('valid@email.bg');