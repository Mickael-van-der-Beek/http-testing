var Request = require('../../request-class/Request');

function testHeader (header, value) {
	it(version + ': ' + value, function (done) {
		new Request([
			'GET / HTTP/1.1\r\n' +
			header + ': ' + value +
			'\r\n\r\n'
		].join(''), [

		], /*function (type, value) {

		}*/done);
	});
}

function testHeaders (headers) {

	describe('uppercase - ', function () {

		for(var i = 0, len = methods.length; i < len; i++) {
			method = methods[i].toUpperCase();
			testMethod(method);
		}

	});

}

module.exports = testHeaders;