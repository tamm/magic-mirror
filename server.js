var fs = require('fs');
var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	var latestDate = new Date();

	var log = fs.readFileSync('static/log.txt','utf8');
    var lines = log.trim().split('\n');
    var lastLine = lines.slice(-1)[0];

    if (lines.length > 0) {
    	latestDate = new Date(lastLine);
    }

    var	timeSinceLastDate = Math.round((new Date().getTime() - latestDate.getTime()) / (1000*60*60*24));

	res.render('index', {
		'latestDate': latestDate,
		'timeSinceLastDate': timeSinceLastDate
	});
});

app.get('/update', function (req, res) {
	fs.appendFile('static/log.txt', new Date().toISOString() + '\n', function (err) {

	});


	res.redirect('/');
});

app.use('/static', express.static('static'));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});