// Dependencies:
var express = require('express');
var bodyParser = require('body-parser');

//EXPRESS CONFIG
var app = express();

//BODYPARSER
//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//NOT SURE ON THIS ONE
app.use(bodyParser.text());

//serve static content for the app from the public directory
app.use(express.static(process.cwd() + "/public"));

var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//ROUTES
var routes = require('./app/routes'); //configure our routes
app.use('/', routes);


var PORT = process.env.PORT || '3000';

//LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
