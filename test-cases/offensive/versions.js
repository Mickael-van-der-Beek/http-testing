var Request = require('../../request-class/Request');
var specialNumbers = require('../../special-values/Numbers');

function testVersion (version) {
	it(version, function (done) {
		new Request([
			'GET / HTTP/' + version + '\r\n\r\n'
		].join(''), [

		], /*function (type, value) {

		}*/done);
	});
}

function testVersions (versions) {

	var number;

	describe('major version - ', function () {

		for(var i = 0, len = specialNumbers.length; i < len; i++) {
			number = specialNumbers[i];
			testVersion(number + '.1');
		}

	});

	describe('minor version - ', function () {

		for(var i = 0, len = specialNumbers.length; i < len; i++) {
			number = specialNumbers[i];
			testVersion('1.' + number);
		}

	});

	describe('major and minor version - ', function () {

		for(var i = 0, len = specialNumbers.length; i < len; i++) {
			number = specialNumbers[i];
			testVersion(number + '.' + number);
		}

	});

}

module.exports = testVersions;