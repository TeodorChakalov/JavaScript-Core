function escaping(items) {

    let result = '<ul>\n';
    for (let text of items) {
        result +=`  <li>${htlmEscape(text)}</li>\n`;
    }

    console.log(result + '</ul>');
    function htlmEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

}

escaping(['<b>unescaped text</b>', 'normal text']);