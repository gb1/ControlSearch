var qs = require('querystring');
var fetch = require('node-fetch');

var registryUrl   = 'https://registry.npmjs.org',
    viewsPath     = '-/_view',
    keywordView   = 'byKeyword',
    keyword       = 'react-component',
    dlCountUrl    = 'https://api.npmjs.org/downloads/point/last-week',
    isFetching    = false;


var url = [registryUrl, viewsPath, keywordView].join('/') + '?' + qs.stringify({
        startkey: '["' + keyword + '"]',
        endkey: '["' + keyword + '",{}]',
        group_level: 3
    });

console.log(url);

fetch(url, { method: 'get' }).then((response) => {
    response.json().then((json) => {
        //console.log(json);
    });
}).catch((err) => { });