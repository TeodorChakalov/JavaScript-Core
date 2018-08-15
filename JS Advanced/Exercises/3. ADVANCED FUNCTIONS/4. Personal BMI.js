function personalBMI(name, age, weight, height) {
    let BMICalc = Math.round(weight / (height / 100 * height / 100));
    let status;
    if(BMICalc < 18.5){
        status = 'underweight';
    }else if(BMICalc < 25){
        status = 'normal';
    }else if(BMICalc < 30){
        status = 'overweight';
    }else{
        status = 'obese';
    }

    let obj = {
        'name': name,
        'personalInfo': {
            'age': age,
            'weight': weight,
            'height': height,
        },
        'BMI': BMICalc,
        'status': status
    };

    if(status === 'obese'){
        obj['recommendation'] = 'admission required';
    }

    return obj;
}

console.log(personalBMI('Peter', 29, 75, 182));
console.log(personalBMI('Honey Boo Boo', 9, 57, 137));