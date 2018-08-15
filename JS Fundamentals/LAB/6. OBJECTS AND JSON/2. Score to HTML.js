function scoreToHTML(input) {
    input = JSON.parse(input);
    let result = "<table>\n";
    result += "<tr><th>name</th><th>score</th></tr>\n";

    for (let line of input) {
        result += `<tr><td>${htmlEscape(line['name'])}</td><td>${(line['score'])}</td></tr>\n`;
    }

    result += "</table>";

    console.log(result);

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');