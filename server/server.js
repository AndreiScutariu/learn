var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 8089;
app.listen(port, function() {
	console.log("start listening on port " + port + "...");
});