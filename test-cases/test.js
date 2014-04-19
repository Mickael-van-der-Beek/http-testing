var standard = require('../http-standards/rfc2616');

var dMethods = require('./defensive/methods');
var oMethods = require('./offensive/methods');

var dVersions = require('./defensive/versions');
var oVersions = require('./offensive/versions');

var dHeaders = require('./defensive/headers');
var oHeaders = require('./offensive/headers');

describe('Testing the HTTP server.', function () {

	describe('(1) - Methods : ', function () {

		var methods = standard.methods;
		dMethods(methods);
		oMethods(methods);

	});

	describe('(2) - Version : ', function () {

		var versions = standard.versions;
		dVersions(versions);
		oVersions(versions);

	});

	// describe('(3) - Headers : ', function () {

	// 	var headers = standard.headers;
	// 	dHeaders(headers);
	// 	oHeaders(headers);

	// });

});