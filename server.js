var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var morgan = require('morgan');
// var cookieParser = require('cookie-parser');
var app = express();

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
// app.use(cookieParser());


require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(port, function(){
  console.log('listening on port 8000');
});
