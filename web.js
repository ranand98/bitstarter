var express = require('express');

var app = express.createServer(express.logger());

var file = require('fs');

var str = file.readFileSync("index.html");

var output = new Buffer(256);



app.get('/', function(request, response) {
  
    response.send(output.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
