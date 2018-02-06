var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes')

var app = express();
const PORT = process.env.PORT || 8080;



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/client/build'));

app.use(routes);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
  

app.listen(PORT, () => {console.log(`listening to port ${PORT}`)})




module.exports = app;
