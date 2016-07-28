var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }));

//var x = new Mongo('host[:27017]');
//var db = x.getDB('test');


app.use(express.static('public'));

//app.get('/', function (request, response) {
//    response.sendFile(__dirname + '/index.html');
//});

app.listen(8000, function(){
  console.log('Running Express');
});