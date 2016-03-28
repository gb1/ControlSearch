var express = require('express');
var axios = require('axios');
var path = require('path');
var app = express();


app.use(express.static('../dist'));

app.get('/controls', (req, res) =>{

    axios.get('https://registry.npmjs.org/-/_view/byKeyword?startkey=%5B%22ui5%22%5D&endkey=%5B%22ui5%22%2C%7B%7D%5D&group_level=3')
        .then((response) => {

            var requests = response.data.rows.map( row => {
                return axios.get('https://registry.npmjs.org/' + row.key[1]);
            });

            axios.all(requests).then( details => {
                res.send(details);
            })
        });
});


app.listen(3000);