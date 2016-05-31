var express = require('express');
var app = express();
var path = require("path");

app.use('/public', express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/anotherPage', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/page.html'));
});


app.listen(3000, function() {
    console.log("Listening on port 3000");
});