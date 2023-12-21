// Create web server

// Import modules

var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// Create web server

var server = http.createServer(function (request, response) {

    // Get the request method and url

    var method = request.method;
    var url_parts = url.parse(request.url, true);
    var url_pathname = url_parts.pathname;
    var url_query = url_parts.query;

    // Get the query string

    var query = '';
    if (method === 'GET') {
        query = url_query;
    } else if (method === 'POST') {
        query = '';
    }

    // Get the body

    var body = '';
    request.on('data', function (data) {
        body += data;
    });

    // Process the request

    request.on('end', function () {

        // Process the request

        var output = '';
        var json = {};
        if (url_pathname === '/comments') {
            if (method === 'GET') {
                output = 'GET comments: ' + query;
                json = JSON.stringify({output: output});
            } else if (method === 'POST') {
                output = 'POST comments: ' + body;
                json = JSON.stringify({output: output});
            }
        } else {
            output = 'ERROR: Invalid path';
            json = JSON.stringify({output: output});
        }

        // Write the response

        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(json + '\n');
        console.log(output);

    });

});

// Listen on port 8080

server.listen(8080);

// Log message

console.log('Server running at http://' + require('os').hostname() + ':8080/');