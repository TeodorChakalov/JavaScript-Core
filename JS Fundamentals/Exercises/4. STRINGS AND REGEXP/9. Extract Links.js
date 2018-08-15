function extractLinks(text){
    let regex = /(www\.)([a-zA-Z0-9-]+)(\.[a-z]+)+/g;
    let match;

    while(match = regex.exec(text)){
        console.log(match[0]);
    }
}

extractLinks(['Join WebStars now for free, at www.web-stars.com',
              'You can also support our partners:',
              'Internet - www.internet.com',
              'WebSpiders - www.webspiders101.com',
              'Sentinel - www.sentinel.-ko'
            ]);