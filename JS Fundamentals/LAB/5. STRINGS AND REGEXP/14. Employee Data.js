function employeeData(data) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    for (let str of data) {
        let exec = regex.exec(str);
        if(exec){
            console.log(`Name: ${exec[1]}`);
            console.log(`Position: ${exec[3]}`);
            console.log(`Salary: ${exec[2]}`);
        }
    }

}

employeeData(['Isacc - 1000 - CEO',
              'Ivan - 500 - Employee',
              'Peter - 500 - Employee'
             ]);