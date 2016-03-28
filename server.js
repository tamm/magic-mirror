var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.use('/static', express.static('static'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});