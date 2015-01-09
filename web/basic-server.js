var http = require("http");
var handler = require("./request-handler");
var initialize = require("./initialize.js");

// Why do you think we have this here?
// HINT:It has to do with what's in .gitignore
initialize();

var port = 8080;
var ip = "127.0.0.1";
//creates server with above IP and port number and sets up a request handler
//function that listens for events
var server = http.createServer(handler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
//server now listens to above ip and port
server.listen(port, ip);

