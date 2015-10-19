var express = require('express');
var expressLogger = require('morgan');
var path = require('path');

var app = express();

app.use(expressLogger('tiny'));

app.use(express.static(path.join(__dirname, 'app')));

var portNum = 8080;

process.argv.forEach(function(val, index, array) {
    var subStrings = val.split("=");
    if(subStrings.length > 1) {
        if(subStrings[0] == "port") {
            portNum = subStrings[1];
        }
    }
});

var server = app.listen(portNum, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Starting up at http://%s%s', host, port);
});