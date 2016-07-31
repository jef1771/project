var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }));

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', function (err, db) {
    if (err) {
        throw err;
    }
    console.log("Connected to DataBase");
});


app.use(express.static('public'));

//app.get('/', function (request, response) {
//    response.sendFile(__dirname + '/index.html');
//});

app.listen(8000, function(){
  console.log('Running Express');
});