function jsonTable(input) {
    let result = '<table>\n';

    for (let line of input) {
        line = JSON.parse(line);
        result+='\t<tr>\n';
        result+=`\t\t<td>${line.name}</td>\n`;
        result+=`\t\t<td>${line.position}</td>\n`;
        result+=`\t\t<td>${line.salary}</td>\n`;
        result+='\t<tr>\n';
    }
    result += '</table>\n';
    console.log(result);
}

jsonTable([
           '{"name":"Pesho","position":"Promenliva","salary":100000}',
           '{"name":"Teo","position":"Lecturer","salary":1000}',
           '{"name":"Georgi","position":"Lecturer","salary":1000}',
          ]);