// Intialixing Express here;
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  //mongoose = require('mongoose'),
  Task = require('./api/models/NobelPrizeModel'),
  bodyParser = require('body-parser');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Declaring or Loading Routes here
var routes = require('./api/routes/Routes');
routes(app);

// Handling URL format error;
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


// Creating a server that listens to a particular Port;
app.listen(port);

console.log('RESTful API server started on: ' + port);
