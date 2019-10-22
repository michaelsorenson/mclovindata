var express = require('express');
var app = express();

app.set( 'port', 8080);
app.set( 'view engine', 'ejs' );
app.set( 'views', 'views' );

app.use(require('./code/download.js'));
app.use( '/public', express.static( __dirname + '/views/public' ) );

app.get('/', function (req, res) {
  res.render('index',{
    'title': 'mclovindata',
    'user': 'Michael Sorenson'
  });
});

var server = app.listen( app.get('port'), function() {
  console.log( 'Listening on port ' + app.get('port') );
});