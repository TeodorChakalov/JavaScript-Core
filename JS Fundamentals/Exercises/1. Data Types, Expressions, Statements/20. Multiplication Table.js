function multiplicationTable(number) {
    let table = "<table border=\"1\">\n";
    table += "<tr>\n";
    table += "<th>x</th>\n";

    for (let i = 1; i <= number; i++) {
        table += `   <th>${i}</th>\n`;
    }

    table += "</tr>\n";


    for (let i = 1; i <= number; i++) {
        table += "<tr>\n";
        table += `<th>${i}</th>\n`;
        for (let j = 1; j <= number; j++) {
            table += `   <td>${i * j}</td>\n`;
        }
        table += "</tr>\n";
    }


    table+="</table>\n";

    console.log(table);
}

multiplicationTable(3);