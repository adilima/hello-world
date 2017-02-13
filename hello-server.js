var http = require('http');

var server = http.createServer(function(request, response) {
    console.log("server accepting a request");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello, World!");
}).listen(8080);

console.log("server is running on localhost:8080");
