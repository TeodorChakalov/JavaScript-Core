function daggerOrSword(input){
    let result = `<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n`;
    input = input.map(e => Math.floor(Number(e)));
    let type = "";

    for (let i = 0; i < input.length; i++) {
        let length = input[i];
        if(length <= 10){
            continue;
        }
        if(length > 40){
            type = "sword";
        }else{
            type = "dagger";
        }

        length = length % 5;
        let blade ="";

        switch (length){
            case 0: blade = "*rap-poker";
            break;
            case 1: blade = "blade";
                break;
            case 2: blade = "quite a blade";
                break;
            case 3: blade = "pants-scraper";
                break;
            case 4: blade = "frog-butcher";
                break;
        }
        result+=`<tr><td>${input[i]}</td><td>${type}</td><td>${blade}</td></tr>\n`;
    }
    result+=`</tbody>\n</table>`;

    console.log(result);
}

daggerOrSword([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
]);