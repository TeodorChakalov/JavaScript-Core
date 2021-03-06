class CheckingAccount {
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId(){
        return this._clientId;
    }
    set clientId(value){
        let clientIdPattern = /^[0-9]{6}$/g;
        if(!clientIdPattern.test(value)){
            throw new TypeError('Client ID must be a 6-digit number');
        }else{
            this._clientId = value;
        }
    }

    get email(){
        return this._email;
    }
    set email(value){
        let emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/g;
        if(!emailPattern.test(value)){
            throw new TypeError('Invalid e-mail');
        }
        this._email = value;
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        let firstNamePattern = /^[a-zA-Z]+$/g;
        if(value.length < 3 || value.length > 20){
            throw new TypeError('First name must be between 3 and 20 characters long');
        }else if(!firstNamePattern.test(value)){
            throw new TypeError('First name must contain only Latin characters');
        }
        this._firstName = value;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        let lastNamePattern = /^[a-zA-Z]+$/g;
        if(value.length < 3 || value.length > 20){
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }else if(!lastNamePattern.test(value)){
            throw new TypeError('Last name must contain only Latin characters');
        }
        this._lastName = value;
    }
}

let acc = new CheckingAccount('136614', 'petkan@another.co.uk', 'Ivan', 'Petrov');
console.log(acc);