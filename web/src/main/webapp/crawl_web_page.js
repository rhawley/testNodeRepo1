/**
 * 
 */

function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () { 
    callback(this.responseText) 
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}

var request_function = require("request");

var webpage_url = "http://www.bing.com";

function process_webpage(error, response, body)
{
	if(!error)
	{
		// Log Status Code
		console.log('Server status code : ' + response.statusCode);
		
		// Log http version
		console.log('Http version : ' + response.httpVersion);
		
		// Log request method
		console.log('Request method : ' + response.method);
		
		// Store raw headers
		var raw_headers = response.rawHeaders;
		
		// Measure raw header length
		var length = raw_headers.length;
		
		// Get each header
		for(var i=0;i<length;i++)
		{
			var raw_header = raw_headers[i];
			
			console.log(raw_header);
		}
		
		body = body.substr(0,100) + "...";
		console.log(body);
	}
}

export function crawl_web_page() {
	request_function(webpage_url, process_webpage);
}
