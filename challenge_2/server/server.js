var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var convertJson = require('../client/app.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../client')));

//get route to get data from the server
// app.get('/', (req, res) => {
//     //if there is an error send back a status code of 500 - server not working
//     if (err) {
//         res.status(500).send();
//     }
//     //send back results
//     res.send(results);
// });


//post method to add data to the server
app.post('/', (req, res) => {
    var data = convertJson(JSON.parse(req.body.csvFile));
    console.log('success', req.body);
    res.status(201).send(data);
});


app.listen(3000, () => {console.log('listening on port', 3000)});