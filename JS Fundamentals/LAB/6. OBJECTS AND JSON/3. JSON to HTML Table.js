function JSONToHTMLTable(jsonString) {
    let array = JSON.parse(jsonString);

    let result = "<table>\n";

    result+="  <tr>";
    for (let key of Object.keys(array[0])) {
        result+=`<th>${key}</th>`;
    }
    result+="</tr>\n";

    for (let obj of array) {
        result+="  <tr>";
        for (let key in obj) {
            result+=`<td>${htmlEscape(String(obj[key]))}</td>`;
        }
        result+="</tr>\n";
    }

    result += "</table>\n";
    console.log(result);

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

JSONToHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');