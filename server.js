var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
   //create model
  Trade = require('./api/models/stockModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/default'); 

app.use(bodyParser.json({type: 'application/json'}));

//import route
var routes = require('./api/routes/stockRoutes'); 
//register the route
routes(app); 
app.listen(port);
  
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.use(function(req, res) {
  res.status(500).send('Internal Error')
});

module.exports = app
console.log('stock API server started on: ' + port)