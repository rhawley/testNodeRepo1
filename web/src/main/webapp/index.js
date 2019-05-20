/**
 * 
 */
import {crawl_web_page} from 'crawl_web_page.js';
var http_module = require("http");
var z = 10;

function add(x,y)
{
	return x + y;
}

function process_client_request(request, response)
{
	// Message
	var body_content = 'Hello this web server is implemented by Node.js';
	
	// Measure
	var body_length = body_content.length;
	
	// Write 
	response.writeHead(200, {'Content-Type': 'text/plain', 'Content-Length': body_length});
	
	// Send
	response.end(body_content);
}

// Create the Web Server
var web_server = http_module.createServer(process_client_request);

// Listen on port 8000
web_server.listen(8000);

// Log startup message
console.log("Web server is running on port 8000, press Ctrl + C to exit. "); 
