var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



app.post('/login', function (request, response) {
    var email = request.body.Email;
    var password = request.body.Password;
    //var isValid = verifyUser(request.body.Email, request.body.Password);

    console.log("post request received \n email: " + email + "\n pass: " + password);

    //if (isValid) {
    //    response.render('login');
   // }

    //response.render('index');


});

//Mongo Query Methods
var verifyUser = function (email, pass) {
    MongoClient.connect(url, function (err, db) {
        var collection = db.collection('customers');
        if (err) {
            throw err;
        }

        if (collection.find({ "email": email, "password": pass }).limit(1).length != 0) {
            console.log('user was found');
            return true;
        }

        console.log('user was not found');
        return false;

    });
}


app.listen(8000, function(){
  console.log('Running Express');
});