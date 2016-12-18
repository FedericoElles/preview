var express = require('express');
var exphbs  = require('express-handlebars');
var cookieParser = require('cookie-parser');
var sass = require('node-sass'); 
var compression = require('compression');

var app = express();

var content = require('./content.js');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(compression());
app.use(cookieParser());


app.get('/style.css', function(req, res){
  var mandant = 'heilerpfad.de';
  var style = sass.renderSync({
    file: './public/d/'+mandant+'.scss',
    outputStyle: 'compressed'
  });
  res.header("Content-type", "text/css");
  res.send(style.css);
});

app.get('/', function (req, res) {
  var context = {};
  context.type = 'index';
  content.get('page').then(function(content){
    context.json = JSON.stringify(content, undefined, 2);
    res.render('home', context);  
  });
    
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
