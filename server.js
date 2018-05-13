// require and import the http module
http = require('http');
express = require("express");
bodyParser = require("body-parser");

var  app = express();

// define the ports
var PORTONE = process.env.PORT || 7000;
var PORTTWO = process.env.PORT || 7500;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// create the servers that we will be using
var serverOne = http.createServer(requestHandlerOne);
var serverTwo = http.createServer(requestHandlerTwo);

// start my servers so that I can get this stuff working
serverOne.listen(PORTONE, function () {
  // call back when the server is listening
  console.log('server listening on:' + PORTONE);
});

serverTwo.listen(PORTTWO, function () {
  // call back when the server is listening
  console.log('server listening on:' + PORTTWO);
});






// // functions that handle requests for each server that is running
function requestHandlerOne(req, res) {
}
function requestHandlerTwo(req, res) {
}
