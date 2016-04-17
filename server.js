var fs = require('fs');
var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	res.render('index', {
		'timeSinceLastDate': 0
	});
});

app.get('/days', function (req, res) {
	var latestDate = new Date();

	try {
		var log = fs.readFileSync('static/log.txt','utf8');
    	var lines = log.trim().split('\n');
    	var lastLine = lines.slice(-1)[0];
	    if (lines.length > 0) {
	    	latestDate = new Date(lastLine);
	    }
	} catch (error) {
		console.log('no log file found');
	}

    var	timeSinceLastDate = Math.round((new Date().getTime() - latestDate.getTime()) / (1000*60*60*24));

	res.send({
		days: timeSinceLastDate,
		date: latestDate
	});
});

app.get('/update', function (req, res) {
	var date = new Date().toISOString()
	fs.appendFile('static/log.txt', date + '\n', function (err) {
		if (err) {
			res.status(500).send({error: 'Unable to write to log'});
		} else {
			res.send({
				days: 0,
				date: date
			});
		}
	});

});

app.use('/static', express.static('static'));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});