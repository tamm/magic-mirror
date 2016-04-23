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

var routeAllDates = function (req, res) {
	var latestDate = [new Date()];
	var timeSinceLastDate = [];
	var log;
	try {
		log = fs.readFileSync('static/log.txt','utf8');
	} catch (error) {
		console.log('no log file found');
		res.status(404).send();
	}
	var lines = log.trim().split('\n');
	var days = [];
	var latestDates = [];

	if (lines.length > 0) {
		for (var i = 0; i <= lines.length - 1; i++) {
			var line = lines[i].split(';;');
			var dateObject = new Date(line[1]);
			var dateId = line[0];
			var dateId = line[0];
			var now = new Date();

			dateObject.setHours(23,59,0);

			days[dateId] = Math.ceil((now.getTime() - dateObject.getTime()) / (1000*60*60*24));
			latestDates[dateId] = dateObject;

		}

		res.send({
			days: days,
			date: latestDates
		});
	}
	else {
		res.status(404).send();
	}
};

app.get('/days', routeAllDates);

app.param('id', function(req, res, next, id) {
  req.id = id;
  next();
});

app.get('/update/:id', function (req, res) {
	var date = new Date().toISOString();
	var dateString = req.id + ';;' + date + '\n';
	fs.appendFile('static/log.txt', dateString, function (err) {
		if (err) {
			res.status(500).send({error: 'Unable to write to log'});
		} else {
			routeAllDates(req, res);
		}
	});
});

app.use('/static', express.static('static'));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});