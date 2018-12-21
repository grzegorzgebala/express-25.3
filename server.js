var express = require('express');
var app = express();
var fs = require('fs');
var stringifyFile;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/getNote', function () {
    fs.readFile('./test.json', 'utf8', function(err, data) {
	    if (err) throw err;
	    stringifyFile = data
	    res.send([data]);
	});
});



app.post('/updateNote/:note', function () {
    fs.writeFile('./test.json', stringifyFile, function(err) {
	    if (err) throw err;
	    console.log('file updated');
	});
});



app.listen(3000);