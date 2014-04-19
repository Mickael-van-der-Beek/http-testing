var net = require('net');
var statusCodes = require('../http-standards/rfc2616').statuses;

var HTTPParser = process.binding('http_parser').HTTPParser;

var port = 3000;
var host = '127.0.0.1';

function handleResponse (buffer, expectedStatusCodes, callback) {
	return callback(null);
	var parser = new HTTPParser(HTTPParser.RESPONSE);

	parser.onHeadersComplete = function (res) {
		var status = res.statusCode;
		if(!~expectedStatusCodes.indexOf(status | 0)) {
			return callback('non-standard', 'Wrong status code.');
		}

		// var reason = res.reason;
		// if(status < 200 && status > 299 && reason !== statusCodes[statusCode]) {
		// 	return callback('non-standard', 'Wrong reason phrase.');
		// }

		callback(null);
	};

	parser.execute(buffer, 0, buffer.length);
}

function Request (request, expectedStatusCodes, callback) {

	var called = false;
	var cb = function () {
		if(!called) {
			callback.apply(this, arguments);
			called = true;
		}
	};

	var client = net.connect(port, host, request);
	var start_t = Date.now();
	var buffer = new Buffer(0);

	client
	.on('error', function (error) {
		cb(new Error('error'), error);
	})
	.on('timeout', function () {
		var end_t = Date.now();
		cb(new Error('timeout'), end_t - start_t);
	})
	.on('data', function (data) {
		buffer = Buffer.concat([buffer, data]);
	})
	.on('close', function () {
		handleResponse(buffer, expectedStatusCodes, cb);
	})
	.on('end', function () {
		handleResponse(buffer, expectedStatusCodes, cb);
	});

	client.write(request);
	client.end();

}

module.exports = Request;