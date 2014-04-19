var Request = require('../../request-class/Request');

function testMethod (method) {
	it(method, function (done) {
		new Request([
			method + ' / HTTP/1.1\r\n\r\n'
		].join(''), [
			405,
			501
		], /*function (type, value) {

		}*/done);
	});
}

function testMethods (methods) {

	var method;

	describe('uppercase - ', function () {

		for(var i = 0, len = methods.length; i < len; i++) {
			method = methods[i].toUpperCase();
			testMethod(method);
		}

	});

	describe('lowercase - ', function () {

		for(var i = 0, len = methods.length; i < len; i++) {
			method = methods[i].toLowerCase();
			testMethod(method);
		}

	});

	describe('camelcase - ', function () {

		for(var i = 0, len = methods.length; i < len; i++) {
			method = methods[i];
			method = method[0].toUpperCase() + method.toLowerCase().slice(1);
			testMethod(method);
		}

	});

	describe('mixedcase - ', function () {

		for(var i = 0, len = methods.length; i < len; i++) {
			method = methods[i];
			method = method[0].toUpperCase() + method.toLowerCase().slice(1, -1) + method.slice(-1).toUpperCase();
			testMethod(method);
		}

	});

	describe('mixedcase - ', function () {

		for(var i = 0, len = methods.length; i < len; i++) {
			method = methods[i];
			method = method[0].toUpperCase() + method.toLowerCase().slice(1, -1) + method.slice(-1).toUpperCase();
			testMethod(method);
		}

	});

}

module.exports = testMethods;