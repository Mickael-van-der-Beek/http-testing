var Request = require('../../request-class/Request');
var specialStrings = require('../../special-values/Strings');

function testMethod (method) {
	it(method, function (done) {
		new Request([
			method + ' / HTTP/1.1\r\n\r\n'
		].join(''), [

		], /*function (type, value) {

		}*/done);
	});
}

function testMethods (methods) {

	describe('unknown - ', function () {

		testMethod('UNKOWN');

	});

	describe('special strings - ', function () {

		for(var i = 0, len = specialStrings.length; i < len; i++) {
			method = specialStrings[i];
			testMethod(method);
		}

	});

}

module.exports = testMethods;